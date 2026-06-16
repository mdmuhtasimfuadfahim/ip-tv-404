require('dotenv').config();
const express      = require('express');
const cors         = require('cors');
const helmet       = require('helmet');
const compression  = require('compression');
const morgan       = require('morgan');
const rateLimit    = require('express-rate-limit');
const path         = require('path');
const health       = require('./utils/healthCheck');

// ── Channel data ────────────────────────────────────────────────
// Build backend/data/ JSONs from the JS source on first run
const fs     = require('fs');
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

// Sync channel data from frontend source (single source of truth)
// In a real pipeline: run `npm run sync-data` before starting
const CHANNELS_SRC  = path.join(__dirname, '../frontend/src/data/channels.js');
const SCHEDULE_SRC  = path.join(__dirname, '../frontend/src/data/schedule.js');
const CHANNELS_JSON = path.join(dataDir, 'channels.json');
const SCHEDULE_JSON = path.join(dataDir, 'schedule.json');

function syncData() {
  // Parse and extract arrays from JS module files
  function extractArray(src, varName) {
    const text = fs.readFileSync(src, 'utf-8');
    // Simple extraction: eval the export (safe — it's our own file)
    const modText = text
      .replace(/export\s+const\s+/g, 'const ')
      .replace(/export\s+function\s+/g, 'function ')
      .replace(/export\s+default\s+/g, 'module.exports = ')
      .replace(/^import\s+.+$/gm, '');
    try {
      const m = new module.constructor();
      m._compile(modText, src);
      return m.exports[varName] || [];
    } catch {
      return [];
    }
  }

  if (!fs.existsSync(CHANNELS_JSON)) {
    try {
      const channels = extractArray(CHANNELS_SRC, 'CHANNELS');
      if (channels.length > 0) {
        fs.writeFileSync(CHANNELS_JSON, JSON.stringify(channels, null, 2));
        console.log(`[sync] Wrote ${channels.length} channels to data/channels.json`);
      }
    } catch (e) {
      console.warn('[sync] Could not auto-sync channels:', e.message);
    }
  }

  if (!fs.existsSync(SCHEDULE_JSON)) {
    try {
      const schedule = extractArray(SCHEDULE_SRC, 'SCHEDULE');
      if (schedule.length > 0) {
        fs.writeFileSync(SCHEDULE_JSON, JSON.stringify(schedule, null, 2));
        console.log(`[sync] Wrote ${schedule.length} schedule entries`);
      }
    } catch (e) {
      console.warn('[sync] Could not auto-sync schedule:', e.message);
    }
  }
}

syncData();

// ── Express setup ───────────────────────────────────────────────
const app  = express();
const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(morgan('short'));
app.use(compression());
app.use(helmet({
  crossOriginResourcePolicy: false,     // Allow stream responses cross-origin
  contentSecurityPolicy: false,
}));

// CORS — allow frontend origins
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:4173',
  'http://localhost:3000',
  `https://mdmuhtasimfuadfahim.github.io`,
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) return cb(null, true);
    return cb(null, true); // allow all in self-hosted mode; restrict if needed
  },
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Range', 'Origin', 'Accept'],
  exposedHeaders: ['Content-Length', 'Content-Range'],
}));

app.use(express.json());

// Rate limit — 300 req/min per IP
app.use('/api', rateLimit({
  windowMs: 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  skip: req => req.path.startsWith('/api/proxy'), // proxy has its own limits
}));

// Proxy stricter limit — 60 req/min
app.use('/api/proxy', rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
}));

// ── Routes ──────────────────────────────────────────────────────
app.use('/api/proxy',    require('./routes/proxy'));
app.use('/api/channels', require('./routes/channels'));
app.use('/api/schedule', require('./routes/schedule'));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), ts: new Date().toISOString() });
});

// ── Serve frontend build ─────────────────────────────────────────
const distPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));
}

// ── Start ────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n⚽  World Cup IPTV server`);
  console.log(`   http://localhost:${PORT}\n`);
  console.log(`   API:   http://localhost:${PORT}/api/channels`);
  console.log(`   Proxy: http://localhost:${PORT}/api/proxy?url=<stream-url>\n`);
});

// Start background health checks after boot
try {
  const channels = require('./data/channels.json');
  health.init(channels);
} catch {
  console.warn('[health] No channels.json found — skipping health checks');
}

module.exports = app;
