import { useState, useMemo } from 'react';
import { SCHEDULE, STAGE_GROUPS, stageColor } from '../data/schedule.js';

const FILTER_GROUPS = ['All', 'Groups', 'Knockouts'];

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}
function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}
function isPast(iso) { return new Date(iso) < new Date(); }
function isToday(iso) {
  const d = new Date(iso), now = new Date();
  return d.toDateString() === now.toDateString();
}

export default function EPG() {
  const [filter, setFilter] = useState('All');
  const [stageFilter, setStageFilter] = useState('');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return SCHEDULE.filter(m => {
      if (search && !m.teams.toLowerCase().includes(search.toLowerCase()) &&
          !m.venue.toLowerCase().includes(search.toLowerCase())) return false;
      if (stageFilter && m.stage !== stageFilter) return false;
      if (filter === 'Groups' && !m.stage.startsWith('Group')) return false;
      if (filter === 'Knockouts' && m.stage.startsWith('Group')) return false;
      return true;
    });
  }, [filter, stageFilter, search]);

  // Group by date
  const byDate = useMemo(() => {
    const map = new Map();
    for (const m of filtered) {
      const key = formatDate(m.time);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(m);
    }
    return map;
  }, [filtered]);

  const upcoming = SCHEDULE.filter(m => !isPast(m.time)).slice(0, 1)[0];

  return (
    <div className="epg">
      {/* Header */}
      <div className="epg-header">
        <div>
          <h2 className="epg-title">⚽ FIFA World Cup 2026</h2>
          <p className="epg-subtitle">June 11 – July 19 · USA, Canada, Mexico</p>
        </div>
        {upcoming && (
          <div className="epg-next">
            <span className="epg-next-label">Next</span>
            <span className="epg-next-match">{upcoming.teams}</span>
            <span className="epg-next-time">{formatDate(upcoming.time)} · {formatTime(upcoming.time)}</span>
          </div>
        )}
      </div>

      {/* Filters */}
      <div className="epg-filters">
        <div className="epg-filter-row">
          {FILTER_GROUPS.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => { setFilter(f); setStageFilter(''); }}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          className="epg-search"
          type="search"
          placeholder="Search teams or venue…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Schedule */}
      <div className="epg-body">
        {byDate.size === 0 && (
          <div className="epg-empty">No matches found</div>
        )}
        {[...byDate.entries()].map(([date, matches]) => (
          <div key={date} className="epg-day">
            <div className="epg-day-header">
              <span className="epg-day-label">{date}</span>
              <span className="epg-day-count">{matches.length} match{matches.length !== 1 ? 'es' : ''}</span>
            </div>
            <div className="epg-matches">
              {matches.map(m => {
                const color = stageColor(m.stage);
                const past  = isPast(m.time);
                const today = isToday(m.time);
                const final = m.stage === 'Final';
                return (
                  <div
                    key={m.id}
                    className={`epg-match${past ? ' past' : ''}${today ? ' today' : ''}${final ? ' final' : ''}`}
                    style={{ '--stage-color': color }}
                  >
                    <div className="epg-match-left">
                      <div className="epg-match-teams">{m.teams}</div>
                      <div className="epg-match-info">
                        <span className="epg-match-stage" style={{ color }}>
                          {m.stage}
                        </span>
                        <span className="epg-match-venue">📍 {m.venue}</span>
                      </div>
                      {m.channelHint && (
                        <div className="epg-match-channels">
                          📺 {m.channelHint}
                        </div>
                      )}
                    </div>
                    <div className="epg-match-right">
                      {today && !past && <span className="epg-today-badge">TODAY</span>}
                      {past  && <span className="epg-past-badge">FT</span>}
                      <div className="epg-match-time">{formatTime(m.time)}</div>
                      <div className="epg-match-tz">UTC</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
