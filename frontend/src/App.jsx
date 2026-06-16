import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Player  from './components/Player.jsx';
import EPG     from './components/EPG.jsx';

const TABS = [
  { id: 'watch',    label: '📺 Watch' },
  { id: 'schedule', label: '📅 Schedule' },
];

export default function App() {
  const [tab,     setTab]     = useState('watch');
  const [channel, setChannel] = useState(null);

  const handleSelect = (ch) => {
    setChannel(ch);
    setTab('watch');
  };

  return (
    <div className="app">
      {/* ── Top bar ───────────────────────────────────────────── */}
      <header className="topbar">
        <div className="topbar-brand">
          <span className="topbar-logo">⚽</span>
          <span className="topbar-title">World Cup <em>IPTV</em></span>
          <span className="topbar-badge">2026</span>
        </div>

        <nav className="topbar-tabs">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`topbar-tab${tab === t.id ? ' active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className="topbar-right">
          {channel && (
            <div className="topbar-now">
              <span className="topbar-now-dot" />
              <span className="topbar-now-name">{channel.name}</span>
            </div>
          )}
          <a
            className="topbar-gh"
            href="https://github.com/mdmuhtasimfuadfahim/ip-tv-404"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <svg height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="app-body">
        <Sidebar active={channel} onSelect={handleSelect} />

        <main className="app-main">
          {tab === 'watch' ? (
            <div className="watch-layout">
              <Player channel={channel} />
              {channel && (
                <div className="channel-info-bar">
                  <div className="cib-left">
                    {channel.logo && (
                      <img className="cib-logo" src={channel.logo} alt={channel.name} />
                    )}
                    <div>
                      <div className="cib-name">{channel.name}</div>
                      <div className="cib-meta">
                        <span className="cib-cat">{channel.category}</span>
                        <span className="cib-sep">·</span>
                        <span className="cib-country">{channel.country}</span>
                      </div>
                    </div>
                  </div>
                  <div className="cib-right">
                    <span className="cib-live">● LIVE</span>
                    <span className="cib-hint">
                      Space / K = play  ·  F = fullscreen  ·  M = mute
                    </span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <EPG />
          )}
        </main>
      </div>
    </div>
  );
}
