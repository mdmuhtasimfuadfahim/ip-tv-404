# Deployment Guide — World Cup IPTV 2026

Three deployment modes. Pick one.

---

## Option A — GitHub Pages (free, static, no server)

**Live URL:** `https://mdmuhtasimfuadfahim.github.io/ip-tv-404/`

### Step 1 — Enable GitHub Pages in repo settings
1. Go to `github.com/mdmuhtasimfuadfahim/ip-tv-404` → **Settings → Pages**
2. Source: **GitHub Actions**
3. Save

### Step 2 — Push code (deploys automatically)
```bash
git add .
git commit -m "feat: production IPTV app"
git push origin main
```
The GitHub Action at `.github/workflows/deploy.yml` builds and deploys automatically.

### Step 3 (optional but recommended) — Add Cloudflare Worker proxy

Without the proxy, streams blocked by CORS won't play. This free step fixes that.

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare (free account)
wrangler login

# Deploy the worker
cd worker
wrangler deploy
# → Output: https://iptv-worldcup-proxy.YOUR_SUBDOMAIN.workers.dev
```

Then add the worker URL to GitHub Actions:
1. Repo → **Settings → Secrets and variables → Actions**
2. New repository secret: `VITE_PROXY_URL` = `https://iptv-worldcup-proxy.YOUR_SUBDOMAIN.workers.dev`
3. Edit `.github/workflows/deploy.yml`, uncomment:
   ```yaml
   VITE_PROXY_URL: ${{ secrets.VITE_PROXY_URL }}
   ```
4. Push again → re-deploys with proxy enabled

---

## Option B — Local SSH / VPS (full features, stream proxy built-in)

### Quick start
```bash
# Clone and install
git clone https://github.com/mdmuhtasimfuadfahim/ip-tv-404.git
cd ip-tv-404
npm run install:all

# Build frontend
npm run build

# Start backend (serves frontend + API + proxy)
npm start
# → http://localhost:3000
```

### With nodemon (auto-restart on change)
```bash
# Terminal 1 — backend with hot reload
npm run dev:backend

# Terminal 2 — frontend with HMR
npm run dev:frontend
# → http://localhost:5173
```

### Environment
```bash
cp .env.example .env
# Edit .env:
#   PORT=3000
#   FRONTEND_URL=http://localhost:5173
```

---

## Option C — VPS with Docker + nginx + SSL (production)

### Requirements
- Ubuntu 22.04 VPS (1 GB RAM minimum)
- Domain pointing to your VPS IP
- Ports 80 and 443 open

### Step 1 — Install Docker
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker
```

### Step 2 — Clone and configure
```bash
git clone https://github.com/mdmuhtasimfuadfahim/ip-tv-404.git
cd ip-tv-404
cp .env.example .env
# Edit .env: set FRONTEND_URL=https://yourdomain.com
```

### Step 3 — Build and start
```bash
npm run docker:build
npm run docker:up
# App is now on http://YOUR_VPS_IP:3000
```

### Step 4 — nginx reverse proxy
```bash
# Edit docker/nginx.conf — replace yourdomain.com
nano docker/nginx.conf

# Start with nginx profile
docker compose -f docker/docker-compose.yml --profile production up -d
```

### Step 5 — SSL with Let's Encrypt
```bash
# Install certbot on host (not inside Docker)
sudo apt install certbot -y
sudo certbot certonly --standalone -d yourdomain.com

# Edit docker/nginx.conf — uncomment the HTTPS server block
# Reload nginx
docker compose -f docker/docker-compose.yml restart nginx
```

### Update app
```bash
git pull
npm run docker:build
docker compose -f docker/docker-compose.yml up -d
```

---

## Stream reliability notes

| Stream source         | Reliability | Notes |
|-----------------------|-------------|-------|
| akamaized.net         | 🟢 Very high | CDN-grade, no token |
| amagi.tv              | 🟢 Very high | CDN-grade, no token |
| frequency.stream      | 🟢 Very high | CDN-grade, no token |
| xumo.com (NBC)        | 🟢 Very high | CDN-grade, no token |
| aynaott.com           | 🟡 Good      | Token-protected, refresh via backend |
| pishow.tv (DD Sports) | 🟡 Good      | No token, CORS varies |
| Direct official URLs  | 🟡 Medium    | Geo-blocked without proxy |
| HTTP streams          | 🔴 Low       | Need HTTPS proxy |

The backend proxy at `/api/proxy?url=<encoded-url>` handles all CORS and geo-block issues
when self-hosting. For GitHub Pages, use the Cloudflare Worker.

---

## Troubleshooting

**Stream shows error "geo-blocked or offline"**
→ The stream URL is valid but your IP is blocked by the broadcaster.
→ Fix: Enable the Cloudflare Worker proxy (Option A) or use the self-hosted backend proxy.

**Stream loads but freezes**
→ Network too slow for the selected quality.
→ Fix: Click the quality button (top-right of player) and pick a lower bitrate.

**All channels show error**
→ Your network may be blocking HLS outbound.
→ Fix: Test with `curl -I https://bein-esp-xumo.amagi.tv/playlistR1080p.m3u8`

**PTV Sports not loading**
→ PTV Sports official stream has CORS headers. Must be loaded through the proxy.
→ Fix: Set `VITE_PROXY_URL` and redeploy.

**GitHub Pages shows blank page**
→ The `VITE_BASE_URL` may be wrong.
→ Fix: Ensure the workflow sets `VITE_BASE_URL: /ip-tv-404/` (must match your repo name exactly).
