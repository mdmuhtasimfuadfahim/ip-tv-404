import { useState, useMemo, useEffect } from 'react';
import { SCHEDULE, TIMEZONES, STAGE_PRIORITY, stageColor, toTZ } from '../data/schedule.js';

// Detect user's best matching TZ slot
function detectTZ() {
  const offset = -new Date().getTimezoneOffset() / 60; // JS offset is inverted
  const closest = TIMEZONES.reduce((best, tz) =>
    Math.abs(tz.offset - offset) < Math.abs(best.offset - offset) ? tz : best
  );
  return closest.id;
}

// toTZ() returns {date:'Mon, Jun 17', time:'7:00 PM', ts, ...} — not a Date object.
function fmtDate(tzObj) { return tzObj.date; }
function fmtTime(tzObj) { return tzObj.time; }

// Countdown helper
function useCountdown(targetIso) {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const calc = () => setDiff(new Date(targetIso) - new Date());
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetIso]);
  if (diff <= 0) return null;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  if (h > 48) return null;
  return h > 0 ? `${h}h ${m}m` : `${m}m ${s}s`;
}

const STAGE_FILTERS = ['All', 'Today', 'Upcoming', 'Groups', 'Knockouts'];

export default function EPG() {
  const [tzId,    setTzId]    = useState(detectTZ);
  const [stage,   setStage]   = useState('All');
  const [search,  setSearch]  = useState('');
  const [showTzMenu, setShowTzMenu] = useState(false);

  const tz = TIMEZONES.find(t => t.id === tzId) || TIMEZONES[0];

  // Next match countdown
  const nextMatch = useMemo(() =>
    SCHEDULE.find(m => new Date(m.time) > new Date()),
  []);
  const countdown = useCountdown(nextMatch?.time);

  const filtered = useMemo(() => {
    const now = new Date();
    return SCHEDULE.filter(m => {
      const mt = new Date(m.time);
      if (search) {
        const q = search.toLowerCase();
        if (!m.teams.toLowerCase().includes(q) && !m.venue.toLowerCase().includes(q) && !m.stage.toLowerCase().includes(q)) return false;
      }
      if (stage === 'Today') {
        const d = toTZ(m.time, tz.offset);
        const t = toTZ(new Date().toISOString(), tz.offset);
        return d.date === t.date;
      }
      if (stage === 'Upcoming') return mt > now;
      if (stage === 'Groups')   return m.stage.startsWith('Group');
      if (stage === 'Knockouts') return !m.stage.startsWith('Group');
      return true;
    });
  }, [stage, search, tz]);

  // Group by date in selected TZ
  const byDate = useMemo(() => {
    const map = new Map();
    for (const m of filtered) {
      const d = toTZ(m.time, tz.offset);
      const key = fmtDate(d);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(m);
    }
    return map;
  }, [filtered, tz]);

  return (
    <div className="epg">
      {/* ── Header ─────────────────────────────────────── */}
      <div className="epg-top">
        <div className="epg-top-left">
          <div className="epg-headline">
            <span className="epg-wc-badge">FIFA</span>
            <h2>World Cup 2026</h2>
            <span className="epg-host">🇺🇸🇨🇦🇲🇽</span>
          </div>
          <p className="epg-sub">June 11 – July 19 · 48 Teams · 104 Matches</p>
        </div>

        {/* Next match countdown */}
        {nextMatch && countdown && (
          <div className="epg-countdown">
            <div className="epg-countdown-label">⏱ Next match</div>
            <div className="epg-countdown-match">{nextMatch.teams.replace(/🏆\s*/,'')}</div>
            <div className="epg-countdown-time">{countdown}</div>
          </div>
        )}
      </div>

      {/* ── Controls ───────────────────────────────────── */}
      <div className="epg-controls">
        {/* Stage filters */}
        <div className="epg-filters">
          {STAGE_FILTERS.map(f => (
            <button
              key={f}
              className={`epg-filter-btn${stage === f ? ' active' : ''}`}
              onClick={() => setStage(f)}
            >{f}</button>
          ))}
        </div>

        {/* Search */}
        <input
          className="epg-search"
          type="search"
          placeholder="🔍 Search teams, venue…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* Timezone picker */}
        <div className="tz-wrap">
          <button className="tz-btn" onClick={() => setShowTzMenu(p => !p)}>
            {tz.label} <span className="tz-offset">({tz.fmt})</span>
            <span className="tz-caret">{showTzMenu ? '▲' : '▼'}</span>
          </button>
          {showTzMenu && (
            <div className="tz-menu">
              {TIMEZONES.map(t => (
                <button
                  key={t.id}
                  className={`tz-option${tzId === t.id ? ' active' : ''}`}
                  onClick={() => { setTzId(t.id); setShowTzMenu(false); }}
                >
                  <span>{t.label}</span>
                  <span className="tz-opt-offset">{t.fmt}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Match list ─────────────────────────────────── */}
      <div className="epg-body">
        {byDate.size === 0 && (
          <div className="epg-empty">No matches found for selected filter.</div>
        )}

        {[...byDate.entries()].map(([dateStr, matches]) => {
          const nowDate = toTZ(new Date().toISOString(), tz.offset);
          const matchDate = new Date(matches[0].time);
          const isToday = fmtDate(toTZ(new Date().toISOString(), tz.offset)) === dateStr;

          return (
            <section key={dateStr} className="epg-day-section">
              <div className={`epg-day-header${isToday ? ' today' : ''}`}>
                <span className="epg-day-label">
                  {isToday ? '📅 Today — ' : ''}{dateStr}
                </span>
                <span className="epg-day-tz">{tz.fmt}</span>
                <span className="epg-day-count">{matches.length} match{matches.length !== 1 ? 'es' : ''}</span>
              </div>

              <div className="epg-match-list">
                {matches.map(m => {
                  const localDate = toTZ(m.time, tz.offset);
                  const isPast    = new Date(m.time) < new Date();
                  const isFinal   = m.stage === 'Final';
                  const color     = stageColor(m.stage);
                  const isNow     = !isPast && countdown && m === nextMatch;

                  return (
                    <div
                      key={m.id}
                      className={[
                        'epg-match',
                        isPast  ? 'past'  : '',
                        isToday ? 'today' : '',
                        isFinal ? 'final' : '',
                        isNow   ? 'next'  : '',
                      ].filter(Boolean).join(' ')}
                      style={{ '--sc': color }}
                    >
                      {/* Stage pill */}
                      <div className="epg-match-stage" style={{ color }}>
                        {m.stage}
                      </div>

                      {/* Teams */}
                      <div className="epg-match-teams">{m.teams}</div>

                      {/* Meta row */}
                      <div className="epg-match-meta">
                        <span className="epg-venue">📍 {m.venue}</span>
                        {m.channels && (
                          <span className="epg-channels">📺 {m.channels}</span>
                        )}
                      </div>

                      {/* Time block */}
                      <div className="epg-match-time-block">
                        {isNow && countdown && (
                          <span className="epg-live-soon">{countdown}</span>
                        )}
                        {isPast ? (
                          <span className="epg-ft-badge">FT</span>
                        ) : (
                          <span className="epg-time">{fmtTime(localDate)}</span>
                        )}
                        <span className="epg-tz-label">{tz.fmt}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
