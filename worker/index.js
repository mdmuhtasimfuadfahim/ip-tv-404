/**
 * Cloudflare Worker — IPTV CORS Proxy
 * Free tier: 100,000 requests/day
 *
 * Deploy:  wrangler deploy
 * Usage:   https://your-worker.workers.dev?url=<encoded-stream-url>
 *
 * This worker:
 *  1. Forwards the HLS stream URL with proper CORS headers
 *  2. Rewrites .m3u8 playlist URLs to route through the worker too
 *     (needed for sub-playlists / segment relative paths)
 *  3. Blocks private IPs and non-http URLs
 */

const ALLOWED_ORIGINS  = ['*']; // restrict to your GH Pages domain if desired
const PRIVATE_IP_RE    = /^https?:\/\/(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/i;
const MAX_BODY_BYTES   = 10 * 1024 * 1024; // 10 MB

export default {
  async fetch(request, _env) {
    // ── CORS preflight ──────────────────────────────────────────
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(request),
      });
    }

    if (request.method !== 'GET') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    // ── Parse target URL ────────────────────────────────────────
    const workerUrl = new URL(request.url);
    const rawTarget = workerUrl.searchParams.get('url');

    if (!rawTarget) {
      return new Response(JSON.stringify({ error: 'Missing ?url= parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(request) },
      });
    }

    let targetUrl;
    try {
      targetUrl = decodeURIComponent(rawTarget);
    } catch {
      return new Response('Invalid URL encoding', { status: 400 });
    }

    if (!/^https?:\/\//i.test(targetUrl)) {
      return new Response('Only http/https URLs allowed', { status: 400 });
    }
    if (PRIVATE_IP_RE.test(targetUrl)) {
      return new Response('Private URLs not allowed', { status: 403 });
    }

    // ── Fetch upstream ──────────────────────────────────────────
    let upstream;
    try {
      upstream = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; IPTV-Worker/1.0)',
          'Accept':     '*/*',
          'Referer':    targetUrl,
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Upstream fetch failed', detail: err.message }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(request) },
      });
    }

    const ct = upstream.headers.get('content-type') || '';
    const isPlaylist = ct.includes('mpegurl') || targetUrl.endsWith('.m3u8');

    // ── Rewrite .m3u8 playlists ─────────────────────────────────
    if (isPlaylist) {
      const text    = await upstream.text();
      const baseUrl = targetUrl.substring(0, targetUrl.lastIndexOf('/') + 1);
      const workerBase = `${workerUrl.origin}?url=`;

      const rewritten = text
        .split('\n')
        .map(line => {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) return line;
          // Absolute URL
          if (/^https?:\/\//i.test(trimmed)) {
            return workerBase + encodeURIComponent(trimmed);
          }
          // Relative URL — resolve against base
          try {
            const abs = new URL(trimmed, baseUrl).href;
            return workerBase + encodeURIComponent(abs);
          } catch {
            return line;
          }
        })
        .join('\n');

      return new Response(rewritten, {
        status: upstream.status,
        headers: {
          'Content-Type': 'application/vnd.apple.mpegurl',
          'Cache-Control': 'no-store',
          ...corsHeaders(request),
        },
      });
    }

    // ── Pass-through for segments / other content ───────────────
    const responseHeaders = new Headers(corsHeaders(request));
    responseHeaders.set('Cache-Control', 'no-store');
    const originalCt = upstream.headers.get('content-type');
    if (originalCt) responseHeaders.set('Content-Type', originalCt);

    return new Response(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  },
};

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '*';
  return {
    'Access-Control-Allow-Origin':   origin,
    'Access-Control-Allow-Methods':  'GET, OPTIONS',
    'Access-Control-Allow-Headers':  'Range, Origin, Accept',
    'Access-Control-Expose-Headers': 'Content-Length, Content-Range',
    'Access-Control-Max-Age':        '86400',
  };
}
