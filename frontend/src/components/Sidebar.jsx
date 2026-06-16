import { useState, useMemo } from 'react';
import { CHANNELS, CATEGORIES, countryFlag } from '../data/channels.js';

const FAV_KEY = 'iptv_favorites_v2';
function getFavs()  { try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch { return []; } }
function saveFavs(f){ localStorage.setItem(FAV_KEY, JSON.stringify(f)); }

export default function Sidebar({ active, onSelect }) {
  const [search,   setSearch]   = useState('');
  const [category, setCategory] = useState('All');
  const [favOnly,  setFavOnly]  = useState(false);
  const [favs,     setFavs]     = useState(getFavs);

  const filtered = useMemo(() => {
    return CHANNELS.filter(ch => {
      if (favOnly && !favs.includes(ch.id)) return false;
      if (category !== 'All' && ch.category !== category) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!ch.name.toLowerCase().includes(q) &&
            !ch.country.toLowerCase().includes(q) &&
            !(ch.tags||[]).join(' ').includes(q)) return false;
      }
      return true;
    });
  }, [search, category, favOnly, favs]);

  const handleFav = (e, id) => {
    e.stopPropagation();
    const next = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
    saveFavs(next);
    setFavs(next);
  };

  return (
    <aside className="sidebar">
      {/* Search */}
      <div className="sb-search">
        <span className="sb-search-icon">⌕</span>
        <input
          type="search"
          placeholder="Search channels…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Category tabs */}
      <div className="sb-cats">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`sb-cat-btn${category === cat.id ? ' active' : ''}`}
            onClick={() => setCategory(cat.id)}
          >
            {cat.emoji} {cat.id === 'All' ? 'All' : cat.id}
          </button>
        ))}
        <button
          className={`sb-cat-btn fav-tab${favOnly ? ' active' : ''}`}
          onClick={() => setFavOnly(p => !p)}
          title="Show favorites"
        >⭐ Favs</button>
      </div>

      {/* Count */}
      <div className="sb-count">
        {filtered.length} channel{filtered.length !== 1 ? 's' : ''}
        {active && <span className="sb-now-playing"> · Now: {active.name}</span>}
      </div>

      {/* List */}
      <div className="sb-list">
        {filtered.length === 0 && (
          <div className="sb-empty">No channels match your search.</div>
        )}

        {filtered.map(ch => {
          const isActive = active?.id === ch.id;
          const needsProxy = ch.streams.every(s => s.needsProxy);

          return (
            <div
              key={ch.id}
              className={`ch-row${isActive ? ' active' : ''}`}
              onClick={() => onSelect(ch)}
            >
              {/* Logo */}
              <div className="ch-logo-box">
                {ch.logo ? (
                  <img
                    src={ch.logo}
                    alt={ch.name}
                    className="ch-logo-img"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentElement.querySelector('.ch-logo-fb').style.display = 'flex';
                    }}
                  />
                ) : null}
                <div
                  className="ch-logo-fb"
                  style={{ display: ch.logo ? 'none' : 'flex' }}
                >
                  {countryFlag(ch.country)}
                </div>
              </div>

              {/* Info */}
              <div className="ch-info">
                <div className="ch-name">{ch.name}</div>
                <div className="ch-submeta">
                  <span className="ch-country">{countryFlag(ch.country)}</span>
                  <span className="ch-cat-label">{ch.category}</span>
                  {needsProxy && (
                    <span className="ch-proxy-badge" title="Requires proxy to stream">🔒 Proxy</span>
                  )}
                </div>
              </div>

              {/* Right controls */}
              <div className="ch-actions">
                {isActive && <span className="ch-live-pulse" title="Now playing" />}
                <button
                  className={`ch-fav${favs.includes(ch.id) ? ' on' : ''}`}
                  onClick={e => handleFav(e, ch.id)}
                  title={favs.includes(ch.id) ? 'Remove from favorites' : 'Add to favorites'}
                >
                  {favs.includes(ch.id) ? '⭐' : '☆'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
