import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Player  from './components/Player.jsx';
import EPG     from './components/EPG.jsx';

const SITE_URL = 'https://mdmuhtasimfuadfahim.github.io/ip-tv-404/';

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const text = '⚽ Watch FIFA World Cup 2026 live — free HD IPTV with 30+ sports channels from BD, PK, IN & global! No sign-up needed.';
    if (navigator.share) {
      try {
        await navigator.share({ title: 'World Cup IPTV 2026', text, url: SITE_URL });
        return;
      } catch {}
    }
    await navigator.clipboard.writeText(`${text}\n${SITE_URL}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('⚽ Watch FIFA World Cup 2026 live for FREE — HD sports IPTV: PTV Sports, T Sports, beIN, BBC & more!')}&url=${encodeURIComponent(SITE_URL)}`;
  const waUrl    = `https://wa.me/?text=${encodeURIComponent('⚽ Watch World Cup 2026 live FREE: ' + SITE_URL)}`;

  return (
    <div className="share-group">
      <button className="share-btn primary" onClick={share} title="Share this page">
        {copied ? '✅ Copied!' : '🔗 Share'}
      </button>
      <a className="share-btn tw" href={tweetUrl} target="_blank" rel="noreferrer" title="Share on X / Twitter">𝕏</a>
      <a className="share-btn wa" href={waUrl}    target="_blank" rel="noreferrer" title="Share on WhatsApp">📱</a>
    </div>
  );
}

export default function App() {
  const [tab,         setTab]         = useState('watch');
  const [channel,     setChannel]     = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSelect = ch => {
    setChannel(ch);
    setTab('watch');
    setSidebarOpen(false); // close drawer on mobile after selecting
  };

  return (
    <div className="app">

      {/* Mobile overlay — close sidebar when tapping outside */}
      {sidebarOpen && (
        <div
          className="mob-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Top bar ─────────────────────────────────────────── */}
      <header className="topbar">
        {/* Hamburger — only visible on mobile */}
        <button
          className="mob-hamburger"
          onClick={() => setSidebarOpen(p => !p)}
          aria-label="Toggle channel list"
        >
          <span /><span /><span />
        </button>

        <div className="topbar-brand">
          <span className="topbar-ball">⚽</span>
          <div className="topbar-title-wrap">
            <span className="topbar-title">World Cup <em>IPTV</em></span>
            <span className="topbar-year">2026</span>
          </div>
          <div className="topbar-flags">🇧🇩🇵🇰🇮🇳🌍</div>
        </div>

        <nav className="topbar-nav">
          <button
            className={`topbar-tab${tab === 'watch' ? ' active' : ''}`}
            onClick={() => setTab('watch')}
          >📺 Watch</button>
          <button
            className={`topbar-tab${tab === 'schedule' ? ' active' : ''}`}
            onClick={() => setTab('schedule')}
          >📅 Schedule</button>
        </nav>

        <div className="topbar-right">
          {channel && tab === 'watch' && (
            <div className="topbar-now">
              <span className="topbar-now-live">● LIVE</span>
              <span className="topbar-now-name">{channel.name}</span>
            </div>
          )}
          <ShareButton />
          <a
            className="topbar-gh"
            href="https://github.com/mdmuhtasimfuadfahim/ip-tv-404"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <svg height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="app-body">
        <Sidebar
          active={channel}
          onSelect={handleSelect}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="app-main">
          {tab === 'watch' ? (
            channel ? (
              <div className="watch-wrap">
                <Player channel={channel} />
                <div className="ch-info-bar">
                  <div className="cib-l">
                    {channel.logo && (
                      <img className="cib-logo" src={channel.logo} alt={channel.name}
                        onError={e => e.target.style.display='none'} />
                    )}
                    <div>
                      <div className="cib-name">{channel.name}</div>
                      <div className="cib-meta">
                        <span className="cib-cat">{channel.category}</span>
                        <span>·</span>
                        <span>{channel.country}</span>
                        {channel.streams.every(s=>s.needsProxy) && (
                          <span className="cib-proxy-note">🔒 Proxy required — may not load on GitHub Pages</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="cib-r">
                    <span className="cib-live-badge">● LIVE</span>
                    <span className="cib-keys">Space=Play/Pause · F=Fullscreen · M=Mute · ↑↓=Volume</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="watch-hero">
                <div className="watch-hero-inner">
                  <div className="hero-ball">⚽</div>
                  <h2>FIFA World Cup 2026</h2>
                  <p>Pick a channel from the sidebar to start watching live</p>
                  <div className="hero-channels">
                    <span>🇧🇩 T Sports</span>
                    <span>🇧🇩 Gazi TV</span>
                    <span>🇧🇩 BTV</span>
                    <span>🇵🇰 PTV Sports</span>
                    <span>🇮🇳 DD Sports</span>
                    <span>🏆 beIN Sports</span>
                    <span>📡 NBC Sports</span>
                    <span>🌐 +25 more</span>
                  </div>
                  <div className="hero-actions">
                    <button
                      className="hero-schedule-btn"
                      onClick={() => setTab('schedule')}
                    >📅 View Match Schedule + Timezones →</button>
                    <button
                      className="hero-channels-btn"
                      onClick={() => setSidebarOpen(true)}
                    >📺 Browse Channels →</button>
                  </div>
                </div>
              </div>
            )
          ) : (
            <EPG />
          )}
        </main>
      </div>
    </div>
  );
}
