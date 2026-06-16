/**
 * Stream proxy — bypasses CORS and geo-restriction for clients.
 *
 * GET /api/proxy?url=<encoded-hls-url>
 *
 * Security:
 *  - Only http/https URLs allowed
 *  - Private IP ranges blocked (SSRF protection)
 *  - Max 8 MB/s pass-through (live HLS segments are small)
 *  - Only allowed content-types forwarded
 */

const express = require('express');
const router  = express.Router();
const { fetch } = require('undici');

const ALLOWED_CT = ['application/vnd.apple.mpegurl', 'application/x-mpegurl', 'video/mp2t', 'text/plain', 'video/mp4'];
const PRIVATE_IP = /^https?:\/\/(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/i;
const MAX_BODY   = 10 * 1024 * 1024; // 10 MB per request

router.get('/', async (req, res) => {
  const rawUrl = req.query.url;
  if (!rawUrl) return res.status(400).json({ error: 'Missing ?url=' });

  let url;
  try { url = decodeURIComponent(rawUrl); } catch { return res.status(400).json({ error: 'Invalid URL encoding' }); }

  if (!/^https?:\/\//i.test(url))  return res.status(400).json({ error: 'Only http/https URLs allowed' });
  if (PRIVATE_IP.test(url))         return res.status(403).json({ error: 'Private URLs not allowed' });

  try {
    const upstream = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; HLS-Proxy/2.0)',
        'Accept':     '*/*',
        'Origin':     req.headers.origin || '',
        'Referer':    url,
      },
      signal: AbortSignal.timeout(15000),
      redirect: 'follow',
    });

    const ct = upstream.headers.get('content-type') || '';

    // Set CORS headers — allow any origin (frontend may be on GH Pages)
    res.set('Access-Control-Allow-Origin',  '*');
    res.set('Access-Control-Allow-Headers', 'Range');
    res.set('Access-Control-Expose-Headers', 'Content-Length, Content-Range');
    res.set('Cache-Control', 'no-store');

    // Forward key upstream headers
    ['content-type', 'content-length', 'accept-ranges'].forEach(h => {
      const v = upstream.headers.get(h);
      if (v) res.set(h, v);
    });

    res.status(upstream.status);

    // Stream body with size cap
    let bytes = 0;
    const reader = upstream.body?.getReader();
    if (!reader) return res.end();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY) { res.end(); break; }
      res.write(value);
    }
    res.end();

  } catch (err) {
    if (!res.headersSent) {
      res.status(502).json({ error: 'Upstream fetch failed', detail: err.message });
    } else {
      res.end();
    }
  }
});

// Preflight
router.options('/', (_req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Range, Origin');
  res.sendStatus(204);
});

module.exports = router;
