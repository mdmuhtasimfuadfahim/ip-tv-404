/**
 * World Cup IPTV 2026 — Production Backend
 *
 * Features:
 *  - CORS-open stream proxy with SSRF protection
 *  - Rate limiting (per-IP, stricter on proxy endpoint)
 *  - Helmet security headers
 *  - Gzip compression
 *  - Request logging (morgan)
 *  - Health check endpoint
 *  - Graceful shutdown (SIGTERM / SIGINT)
 *  - Unhandled rejection guard
 */

'use strict';

require('dotenv').config();

const express     = require('express');
const cors        = require('cors');
const helmet      = require('helmet');
const compression = require('compression');
const morgan      = require('morgan');
const rateLimit   = require('express-rate-limit');
const path        = require('path');
const fs          = require('fs');

// ── Sync channel/schedule data from frontend source ─────────────────────────
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const CHANNELS_SRC  = path.join(__dirname, '../frontend/src/data/channels.js');
const SCHEDULE_SRC  = path.join(__dirname, '../frontend/src/data/schedule.js');
const CHANNELS_JSON = path.join(dataDir, 'channels.json');
const SCHEDULE_JSON = path.join(dataDir, 'schedule.json');

function extractArray(src, varName) {
  try {
    const text = fs.readFileSync(src, 'utf-8');
    const modText = text
      .replace(/export\s+const\s+/g, 'const ')
      .replace(/export\s+function\s+/g, 'function ')
      .replace(/export\s+default\s+/g, 'module.exports = ')
      .replace(/^import\s+.+$/gm, '');
    const m = new module.constructor();
    m._compile(modText, src);
    return m.exports[varName] || [];
  } catch (e) {
    console.warn(`[sync] Could not parse ${src}:`, e.message);
    return [];
  }
}

function syncData(force = false) {
  if (force || !fs.existsSync(CHANNELS_JSON)) {
    const channels = extractArray(CHANNELS_SRC, 'CHANNELS');
    if (channels.length > 0) {
      fs.writeFileSync(CHANNELS_JSON, JSON.stringify(channels, null, 2));
      console.log(`[sync] Wrote ${channels.length} channels → data/channels.json`);
    }
  }
  if (force || !fs.existsSync(SCHEDULE_JSON)) {
    const schedule = extractArray(SCHEDULE_SRC, 'SCHEDULE');
    if (schedule.length > 0) {
      fs.writeFileSync(SCHEDULE_JSON, JSON.stringify(schedule, null, 2));
      console.log(`[sync] Wrote ${schedule.length} matches → data/schedule.json`);
    }
  }
}

syncData();

// ── Express app ──────────────────────────────────────────────────────────────
const app  = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const ENV  = process.env.NODE_ENV || 'development';

app.set('trust proxy', 1);

// Logging — skip health checks in production to reduce noise
app.use(morgan(ENV === 'production' ? 'combined' : 'dev', {
  skip: (req) => req.path === '/api/health',
}));

app.use(compression());

app.use(helmet({
  crossOriginResourcePolicy: false,  // Allow stream responses cross-origin
  contentSecurityPolicy: false,      // Frontend handles its own CSP
}));

// ── CORS ────────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:4173',
  'http://localhost:3000',
  'https://mdmuhtasimfuadfahim.github.io',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (mobile apps, curl, Postman, same-origin)
    if (!origin) return cb(null, true);
    if (ALLOWED_ORIGINS.includes(origin) || ENV !== 'production') return cb(null, true);
    return cb(new Error(`CORS: origin ${origin} not allowed`), false);
  },
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Range', 'Origin', 'Accept'],
  exposedHeaders: ['Content-Length', 'Content-Range'],
}));

app.use(express.json({ limit: '16kb' }));

// ── Rate limiting ────────────────────────────────────────────────────────────

// General API — 300 req/min per IP
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests — please try again in a minute' },
});

// Proxy endpoint — 120 req/min per IP (live HLS segments ~every 2s)
const proxyLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Proxy rate limit exceeded — slow down stream requests' },
});

app.use('/api/proxy', proxyLimiter);
app.use('/api',       apiLimiter);

// ── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/proxy',    require('./routes/proxy'));
app.use('/api/channels', require('./routes/channels'));
app.use('/api/schedule', require('./routes/schedule'));

// Health check — returns uptime, environment, channel count
app.get('/api/health', (_req, res) => {
  let channelCount = 0;
  try { channelCount = JSON.parse(fs.readFileSync(CHANNELS_JSON, 'utf-8')).length; } catch {}
  res.json({
    status:   'ok',
    env:      ENV,
    uptime:   Math.round(process.uptime()),
    channels: channelCount,
    ts:       new Date().toISOString(),
    version:  process.env.npm_package_version || '2.0.0',
  });
});

// Force re-sync from frontend source (useful after deploy)
app.post('/api/sync', (_req, res) => {
  syncData(true);
  res.json({ ok: true, ts: new Date().toISOString() });
});

// 404 for unknown API routes
app.use('/api/*', (_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// ── Serve compiled frontend ──────────────────────────────────────────────────
const distPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, {
    maxAge: ENV === 'production' ? '1h' : 0,
    etag:   true,
  }));
  app.get('*', (_req, res) => res.sendFile(path.join(distPath, 'index.html')));
  console.log('[static] Serving frontend from', distPath);
}

// ── Global error handler ─────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = ENV === 'production' ? 'Internal server error' : err.message;
  console.error('[error]', err.message);
  res.status(status).json({ error: message });
});

// ── Start ────────────────────────────────────────────────────────────────────
const server = app.listen(PORT, () => {
  console.log(`\n⚽  World Cup IPTV 2026  [${ENV}]`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Proxy:  http://localhost:${PORT}/api/proxy?url=<stream-url>\n`);
});

// ── Graceful shutdown ─────────────────────────────────────────────────────────
let isShuttingDown = false;

function shutdown(signal) {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log(`\n[shutdown] Received ${signal} — closing server gracefully...`);

  server.close(err => {
    if (err) {
      console.error('[shutdown] Error closing server:', err);
      process.exit(1);
    }
    console.log('[shutdown] Server closed. Bye!');
    process.exit(0);
  });

  // Force exit after 10 seconds if connections are stuck
  setTimeout(() => {
    console.warn('[shutdown] Timeout — forcing exit');
    process.exit(1);
  }, 10_000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT',  () => shutdown('SIGINT'));

// ── Unhandled rejection guard ─────────────────────────────────────────────────
process.on('unhandledRejection', (reason) => {
  console.error('[unhandledRejection]', reason);
  // Don't crash on expected stream errors, but log them
});

process.on('uncaughtException', (err) => {
  console.error('[uncaughtException]', err);
  shutdown('uncaughtException');
});

module.exports = app;
