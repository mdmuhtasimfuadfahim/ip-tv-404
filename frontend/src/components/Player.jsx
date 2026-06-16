import { useRef, useState, useCallback, useEffect } from 'react';
import { usePlayer } from '../hooks/usePlayer.js';

const PROXY_URL = import.meta.env.VITE_PROXY_URL || '';

export default function Player({ channel }) {
  const videoRef    = useRef(null);
  const wrapRef     = useRef(null);
  const [pip, setPip]               = useState(false);
  const [fs,  setFs]                = useState(false);
  const [muted, setMuted]           = useState(false);
  const [volume, setVolume]         = useState(1);
  const [showQuality, setShowQuality] = useState(false);

  const streams = channel?.streams ?? [];
  const { state, error, currentStreamIndex, levels, currentLevel, setLevel, retry } =
    usePlayer(videoRef, streams, PROXY_URL);

  // ── Keyboard shortcuts ─────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (!channel) return;
      switch (e.key) {
        case ' ':
        case 'k':
          e.preventDefault();
          videoRef.current?.paused ? videoRef.current.play() : videoRef.current.pause();
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'm':
          toggleMute();
          break;
        case 'ArrowUp':
          e.preventDefault();
          adjustVolume(0.1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          adjustVolume(-0.1);
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [channel]);

  // ── Fullscreen ─────────────────────────────────────────────────
  const toggleFullscreen = useCallback(() => {
    const el = wrapRef.current;
    if (!document.fullscreenElement) {
      el?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const handler = () => setFs(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // ── Picture-in-Picture ─────────────────────────────────────────
  const togglePip = useCallback(async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        setPip(false);
      } else if (videoRef.current) {
        await videoRef.current.requestPictureInPicture();
        setPip(true);
      }
    } catch (e) { /* PiP not supported */ }
  }, []);

  // ── Volume ─────────────────────────────────────────────────────
  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }, []);

  const adjustVolume = useCallback((delta) => {
    if (!videoRef.current) return;
    const v = Math.max(0, Math.min(1, videoRef.current.volume + delta));
    videoRef.current.volume = v;
    setVolume(v);
  }, []);

  // ── Quality label helper ───────────────────────────────────────
  const qualityLabel = (level, idx) => {
    if (!level) return `Quality ${idx + 1}`;
    if (level.height) return `${level.height}p`;
    if (level.bitrate) return `${Math.round(level.bitrate / 1000)}kbps`;
    return `Source ${idx + 1}`;
  };

  // ── Idle / no channel ──────────────────────────────────────────
  if (!channel) {
    return (
      <div className="player-wrap player-idle">
        <div className="player-idle-inner">
          <div className="player-ball">⚽</div>
          <p>Select a channel to start watching</p>
          <span>FIFA World Cup 2026 · Live Streams</span>
        </div>
      </div>
    );
  }

  return (
    <div className="player-wrap" ref={wrapRef}>
      {/* Video element */}
      <video
        ref={videoRef}
        className="player-video"
        playsInline
        autoPlay
        style={{ display: state === 'playing' ? 'block' : 'none' }}
        onVolumeChange={() => {
          setMuted(videoRef.current?.muted ?? false);
          setVolume(videoRef.current?.volume ?? 1);
        }}
      />

      {/* Loading overlay */}
      {state === 'loading' && (
        <div className="player-overlay">
          <div className="player-spinner" />
          <span>Connecting to stream…</span>
          {currentStreamIndex > 0 && (
            <span className="player-fallback-note">
              Trying backup source {currentStreamIndex + 1}
            </span>
          )}
        </div>
      )}

      {/* Error overlay */}
      {state === 'error' && (
        <div className="player-overlay player-overlay-error">
          <div className="player-error-icon">⚠️</div>
          <p className="player-error-msg">{error}</p>
          <p className="player-error-sub">Stream may be geo-blocked, offline, or expired</p>
          <button className="player-retry-btn" onClick={retry}>
            ↺ Retry
          </button>
        </div>
      )}

      {/* Controls bar */}
      {state === 'playing' && (
        <div className="player-controls">
          <div className="player-controls-left">
            <span className="player-live-dot" />
            <span className="player-live-label">LIVE</span>
            {currentStreamIndex > 0 && (
              <span className="player-src-badge">Backup {currentStreamIndex + 1}</span>
            )}
          </div>
          <div className="player-controls-right">
            {/* Quality selector */}
            {levels.length > 1 && (
              <div className="quality-wrap">
                <button
                  className="ctrl-btn"
                  title="Quality"
                  onClick={() => setShowQuality(p => !p)}
                >
                  {currentLevel === -1 ? 'AUTO' : qualityLabel(levels[currentLevel], currentLevel)}
                </button>
                {showQuality && (
                  <div className="quality-menu">
                    <button
                      className={`quality-item${currentLevel === -1 ? ' active' : ''}`}
                      onClick={() => { setLevel(-1); setShowQuality(false); }}
                    >Auto (ABR)</button>
                    {levels.map((l, i) => (
                      <button
                        key={i}
                        className={`quality-item${currentLevel === i ? ' active' : ''}`}
                        onClick={() => { setLevel(i); setShowQuality(false); }}
                      >
                        {qualityLabel(l, i)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Volume */}
            <button className="ctrl-btn" onClick={toggleMute} title="Mute (M)">
              {muted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
            </button>

            {/* PiP */}
            {'pictureInPictureEnabled' in document && (
              <button className="ctrl-btn" onClick={togglePip} title="Picture in Picture">
                {pip ? '⊡' : '⧉'}
              </button>
            )}

            {/* Fullscreen */}
            <button className="ctrl-btn" onClick={toggleFullscreen} title="Fullscreen (F)">
              {fs ? '⊠' : '⛶'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
