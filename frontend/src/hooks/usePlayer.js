import { useEffect, useRef, useState, useCallback } from 'react';
import Hls from 'hls.js';

// HLS.js config tuned for live sports: minimum latency, fast recovery
const HLS_CONFIG = {
  enableWorker: true,
  lowLatencyMode: true,
  liveSyncDuration: 3,
  liveMaxLatencyDuration: 15,
  maxBufferLength: 20,
  maxMaxBufferLength: 40,
  backBufferLength: 30,
  startPosition: -1,          // Always start at live edge
  // Manifest / segment loading
  manifestLoadingTimeOut: 10000,
  manifestLoadingMaxRetry: 5,
  manifestLoadingRetryDelay: 500,
  levelLoadingTimeOut: 10000,
  levelLoadingMaxRetry: 5,
  fragLoadingTimeOut: 20000,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1000,
  // ABR
  abrEwmaDefaultEstimate: 1500000, // 1.5 Mbps starting estimate
  abrEwmaSlowVoD: 0.5,
  abrEwmaFastVoD: 0.1,
  // Debug (disable in prod)
  debug: false,
};

// Validate that the proxy URL is actually a usable proxy server
// (not empty, not the same site, not a GitHub Pages URL used wrongly)
function isValidProxy(url) {
  if (!url) return false;
  try {
    const u = new URL(url);
    // Reject if it's the same as the app's origin (common misconfiguration)
    if (u.hostname === location.hostname) return false;
    // Must be http/https
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
}

/**
 * usePlayer(videoRef, streams, proxyUrl)
 *
 * streams: [{ url, needsProxy }, ...]  – ordered by preference
 * proxyUrl: optional – Cloudflare Worker or backend proxy URL
 *
 * Returns: { state, error, currentStreamIndex, levels, currentLevel, setLevel, retry }
 */
export function usePlayer(videoRef, streams, proxyUrl = '') {
  const validProxy = isValidProxy(proxyUrl) ? proxyUrl : '';
  const hlsRef             = useRef(null);
  const retryTimerRef      = useRef(null);
  const streamIndexRef     = useRef(0);

  const [state, setState]              = useState('idle');   // idle|loading|playing|error
  const [error, setError]              = useState(null);
  const [currentStreamIndex, setCSI]   = useState(0);
  const [levels, setLevels]            = useState([]);
  const [currentLevel, setCurrentLevel]= useState(-1);       // -1 = auto ABR

  const resolveUrl = useCallback((stream) => {
    if (!stream) return null;
    if (stream.needsProxy && validProxy) {
      return `${validProxy}?url=${encodeURIComponent(stream.url)}`;
    }
    return stream.url;
  }, [validProxy]);

  const destroyHls = useCallback(() => {
    clearTimeout(retryTimerRef.current);
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
  }, []);

  const tryStream = useCallback((index) => {
    const video = videoRef.current;
    if (!video || !streams || streams.length === 0) return;

    const stream = streams[index];
    if (!stream) {
      setState('error');
      setError('All stream sources exhausted. Channel may be offline.');
      return;
    }

    const url = resolveUrl(stream);
    setState('loading');
    setError(null);
    streamIndexRef.current = index;
    setCSI(index);

    destroyHls();

    // ── Native HLS (Safari) ────────────────────────────────────
    if (!Hls.isSupported()) {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.load();
        video.play().catch(() => {});
        setState('playing');
      } else {
        setError('HLS not supported in this browser.');
        setState('error');
      }
      return;
    }

    // ── HLS.js ─────────────────────────────────────────────────
    const hls = new Hls(HLS_CONFIG);
    hlsRef.current = hls;

    hls.loadSource(url);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, (_e, data) => {
      setState('playing');
      setLevels(data.levels || []);
      setCurrentLevel(-1);
      video.play().catch(() => {});
    });

    hls.on(Hls.Events.LEVEL_SWITCHED, (_e, data) => {
      setCurrentLevel(data.level);
    });

    hls.on(Hls.Events.ERROR, (_e, data) => {
      if (!data.fatal) return;          // Non-fatal: HLS.js auto-recovers

      switch (data.type) {
        case Hls.ErrorTypes.NETWORK_ERROR:
          // Try to recover once, then fall back to next stream
          if (data.details === Hls.ErrorDetails.MANIFEST_LOAD_ERROR ||
              data.details === Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT) {
            // Manifest totally unreachable — try next source
            console.warn(`[player] stream ${index} manifest failed, trying next`);
            tryStream(index + 1);
          } else {
            // Segment error — attempt HLS recovery
            hls.startLoad();
          }
          break;

        case Hls.ErrorTypes.MEDIA_ERROR:
          hls.recoverMediaError();
          break;

        default:
          console.warn(`[player] fatal error on stream ${index}:`, data.details);
          tryStream(index + 1);
          break;
      }
    });
  }, [streams, resolveUrl, destroyHls, videoRef]);

  // ── Expose manual level setter ─────────────────────────────────
  const setLevel = useCallback((level) => {
    if (hlsRef.current) {
      hlsRef.current.currentLevel = level;
      setCurrentLevel(level);
    }
  }, []);

  // ── Manual retry from UI ───────────────────────────────────────
  const retry = useCallback(() => {
    tryStream(0);
  }, [tryStream]);

  // ── Start/restart when streams change ─────────────────────────
  useEffect(() => {
    if (!streams || streams.length === 0) {
      destroyHls();
      setState('idle');
      return;
    }
    tryStream(0);
    return destroyHls;
  }, [streams]); // eslint-disable-line react-hooks/exhaustive-deps

  return { state, error, currentStreamIndex, levels, currentLevel, setLevel, retry };
}
