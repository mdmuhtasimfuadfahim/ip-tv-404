import { useState, useMemo } from 'react';
import { CHANNELS, CATEGORIES, countryFlag } from '../data/channels.js';

const STORAGE_KEY = 'iptv_favorites';

function getFavorites() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
function toggleFav(id) {
  const favs = getFavorites();
  const next = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export default function Sidebar({ active, onSelect }) {
  const [search,   setSearch]   = useState('');
  const [category, setCategory] = useState('All');
  const [favOnly,  setFavOnly]  = useState(false);
  const [favs,     setFavs]     = useState(getFavorites);

  const filtered = useMemo(() => {
    return CHANNELS.filter(ch => {
      if (favOnly && !favs.includes(ch.id)) return false;
      if (category !== 'All' && ch.category !== category) return false;
      if (search && !ch.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, category, favOnly, favs]);

  const handleFav = (e, id) => {
    e.stopPropagation();
    setFavs(toggleFav(id));
  };

  return (
    <aside className="sidebar">
      {/* Search */}
      <div className="sidebar-search">
        <span className="sidebar-search-icon">⌕</span>
        <input
          type="search"
          placeholder="Search channels…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Category tabs */}
      <div className="sidebar-cats">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`cat-btn${category === cat ? ' active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <button
          className={`cat-btn fav-btn${favOnly ? ' active' : ''}`}
          onClick={() => setFavOnly(p => !p)}
          title="Favorites"
        >
          ★
        </button>
      </div>

      {/* Channel count */}
      <div className="sidebar-meta">
        {filtered.length} channel{filtered.length !== 1 ? 's' : ''}
      </div>

      {/* Channel list */}
      <div className="sidebar-list">
        {filtered.length === 0 && (
          <div className="sidebar-empty">No channels found</div>
        )}
        {filtered.map(ch => (
          <div
            key={ch.id}
            className={`ch-item${active?.id === ch.id ? ' active' : ''}`}
            onClick={() => onSelect(ch)}
          >
            {/* Logo */}
            <div className="ch-logo-wrap">
              {ch.logo ? (
                <img
                  className="ch-logo"
                  src={ch.logo}
                  alt={ch.name}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
              ) : null}
              <div
                className="ch-logo-fallback"
                style={{ display: ch.logo ? 'none' : 'flex' }}
              >
                {countryFlag(ch.country)}
              </div>
            </div>

            {/* Info */}
            <div className="ch-info">
              <div className="ch-name">{ch.name}</div>
              <div className="ch-meta">
                <span className="ch-cat">{ch.category}</span>
                <span className="ch-flag">{countryFlag(ch.country)}</span>
              </div>
            </div>

            {/* Live indicator */}
            <div className="ch-right">
              {active?.id === ch.id && <span className="ch-live-dot" />}
              <button
                className={`ch-fav-btn${favs.includes(ch.id) ? ' starred' : ''}`}
                onClick={e => handleFav(e, ch.id)}
                title={favs.includes(ch.id) ? 'Remove favorite' : 'Add favorite'}
              >
                {favs.includes(ch.id) ? '★' : '☆'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
