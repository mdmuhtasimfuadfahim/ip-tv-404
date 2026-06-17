/**
 * FIFA World Cup 2026 — Complete Match Schedule
 *
 * All times stored as UTC ISO strings.
 * Source: The Daily Star Bangladesh (thedailystar.net) — verified BD times,
 *         converted to UTC (BD = UTC+6, so UTC = BD - 6h).
 * Venue: USA / Canada / Mexico
 *
 * Groups:
 *   A: Mexico, South Korea, South Africa, Czechia
 *   B: Canada, Switzerland, Qatar, Bosnia & Herzegovina
 *   C: Brazil, Morocco, Scotland, Haiti
 *   D: USA, Australia, Paraguay, Turkey
 *   E: Germany, Ecuador, Ivory Coast, Curacao
 *   F: Netherlands, Japan, Tunisia, Sweden
 *   G: Belgium, Iran, Egypt, New Zealand
 *   H: Spain, Uruguay, Saudi Arabia, Cape Verde
 *   I: France, Senegal, Norway, Iraq
 *   J: Argentina, Austria, Algeria, Jordan
 *   K: Portugal, Colombia, Uzbekistan, DR Congo
 *   L: England, Croatia, Panama, Ghana
 */

export const SCHEDULE = [

  // ══════════════════════════════════════════════════════════
  //  GROUP STAGE — MATCHDAY 1
  // ══════════════════════════════════════════════════════════

  { id:'m01', home:'🇲🇽 Mexico',       away:'🇿🇦 South Africa', group:'A', stage:'Group', kickoff:'2026-06-11T19:00:00Z', venue:'Mexico City' },
  { id:'m02', home:'🇰🇷 South Korea',  away:'🇨🇿 Czechia',      group:'A', stage:'Group', kickoff:'2026-06-12T02:00:00Z', venue:'Guadalajara' },
  { id:'m03', home:'🇨🇦 Canada',       away:'🇧🇦 Bosnia & Herzegovina', group:'B', stage:'Group', kickoff:'2026-06-12T19:00:00Z', venue:'Toronto' },
  { id:'m04', home:'🇺🇸 USA',          away:'🇵🇾 Paraguay',     group:'D', stage:'Group', kickoff:'2026-06-13T01:00:00Z', venue:'Los Angeles' },
  { id:'m05', home:'🇶🇦 Qatar',        away:'🇨🇭 Switzerland',  group:'B', stage:'Group', kickoff:'2026-06-13T19:00:00Z', venue:'San Francisco' },
  { id:'m06', home:'🇧🇷 Brazil',       away:'🇲🇦 Morocco',      group:'C', stage:'Group', kickoff:'2026-06-13T22:00:00Z', venue:'New Jersey' },
  { id:'m07', home:'🇭🇹 Haiti',        away:'🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland',     group:'C', stage:'Group', kickoff:'2026-06-14T01:00:00Z', venue:'Boston' },
  { id:'m08', home:'🇦🇺 Australia',    away:'🇹🇷 Turkey',       group:'D', stage:'Group', kickoff:'2026-06-14T04:00:00Z', venue:'Vancouver' },
  { id:'m09', home:'🇩🇪 Germany',      away:'🇨🇼 Curacao',      group:'E', stage:'Group', kickoff:'2026-06-14T17:00:00Z', venue:'Houston' },
  { id:'m10', home:'🇳🇱 Netherlands',  away:'🇯🇵 Japan',        group:'F', stage:'Group', kickoff:'2026-06-14T20:00:00Z', venue:'Dallas' },
  { id:'m11', home:'🇨🇮 Ivory Coast',  away:'🇪🇨 Ecuador',      group:'E', stage:'Group', kickoff:'2026-06-14T23:00:00Z', venue:'Philadelphia' },
  { id:'m12', home:'🇸🇪 Sweden',       away:'🇹🇳 Tunisia',      group:'F', stage:'Group', kickoff:'2026-06-15T02:00:00Z', venue:'Monterrey' },
  { id:'m13', home:'🇪🇸 Spain',        away:'🇨🇻 Cape Verde',   group:'H', stage:'Group', kickoff:'2026-06-15T16:00:00Z', venue:'Atlanta' },
  { id:'m14', home:'🇧🇪 Belgium',      away:'🇪🇬 Egypt',        group:'G', stage:'Group', kickoff:'2026-06-15T19:00:00Z', venue:'Seattle' },
  { id:'m15', home:'🇸🇦 Saudi Arabia', away:'🇺🇾 Uruguay',      group:'H', stage:'Group', kickoff:'2026-06-15T22:00:00Z', venue:'Miami' },
  { id:'m16', home:'🇮🇷 Iran',         away:'🇳🇿 New Zealand',  group:'G', stage:'Group', kickoff:'2026-06-16T01:00:00Z', venue:'Los Angeles' },
  { id:'m17', home:'🇫🇷 France',       away:'🇸🇳 Senegal',      group:'I', stage:'Group', kickoff:'2026-06-16T19:00:00Z', venue:'New Jersey' },
  { id:'m18', home:'🇮🇶 Iraq',         away:'🇳🇴 Norway',       group:'I', stage:'Group', kickoff:'2026-06-16T22:00:00Z', venue:'Boston' },
  { id:'m19', home:'🇦🇷 Argentina',    away:'🇩🇿 Algeria',      group:'J', stage:'Group', kickoff:'2026-06-17T01:00:00Z', venue:'Kansas City' },
  { id:'m20', home:'🇦🇹 Austria',      away:'🇯🇴 Jordan',       group:'J', stage:'Group', kickoff:'2026-06-17T04:00:00Z', venue:'San Francisco' },
  { id:'m21', home:'🇵🇹 Portugal',     away:'🇨🇩 DR Congo',     group:'K', stage:'Group', kickoff:'2026-06-17T17:00:00Z', venue:'Houston' },
  { id:'m22', home:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',     away:'🇭🇷 Croatia',      group:'L', stage:'Group', kickoff:'2026-06-17T20:00:00Z', venue:'Dallas' },
  { id:'m23', home:'🇬🇭 Ghana',        away:'🇵🇦 Panama',       group:'L', stage:'Group', kickoff:'2026-06-17T23:00:00Z', venue:'Toronto' },
  { id:'m24', home:'🇺🇿 Uzbekistan',   away:'🇨🇴 Colombia',     group:'K', stage:'Group', kickoff:'2026-06-18T02:00:00Z', venue:'Mexico City' },

  // ══════════════════════════════════════════════════════════
  //  GROUP STAGE — MATCHDAY 2
  // ══════════════════════════════════════════════════════════

  { id:'m25', home:'🇨🇿 Czechia',      away:'🇿🇦 South Africa', group:'A', stage:'Group', kickoff:'2026-06-18T16:00:00Z', venue:'Atlanta' },
  { id:'m26', home:'🇨🇭 Switzerland',  away:'🇧🇦 Bosnia & Herzegovina', group:'B', stage:'Group', kickoff:'2026-06-18T19:00:00Z', venue:'Los Angeles' },
  { id:'m27', home:'🇨🇦 Canada',       away:'🇶🇦 Qatar',        group:'B', stage:'Group', kickoff:'2026-06-18T22:00:00Z', venue:'Vancouver' },
  { id:'m28', home:'🇲🇽 Mexico',       away:'🇰🇷 South Korea',  group:'A', stage:'Group', kickoff:'2026-06-19T01:00:00Z', venue:'Guadalajara' },
  { id:'m29', home:'🇺🇸 USA',          away:'🇦🇺 Australia',    group:'D', stage:'Group', kickoff:'2026-06-19T19:00:00Z', venue:'Seattle' },
  { id:'m30', home:'🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland',     away:'🇲🇦 Morocco',      group:'C', stage:'Group', kickoff:'2026-06-19T22:00:00Z', venue:'Boston' },
  { id:'m31', home:'🇧🇷 Brazil',       away:'🇭🇹 Haiti',        group:'C', stage:'Group', kickoff:'2026-06-20T00:30:00Z', venue:'Philadelphia' },
  { id:'m32', home:'🇹🇷 Turkey',       away:'🇵🇾 Paraguay',     group:'D', stage:'Group', kickoff:'2026-06-20T03:00:00Z', venue:'San Francisco' },
  { id:'m33', home:'🇳🇱 Netherlands',  away:'🇸🇪 Sweden',       group:'F', stage:'Group', kickoff:'2026-06-20T17:00:00Z', venue:'Houston' },
  { id:'m34', home:'🇩🇪 Germany',      away:'🇨🇮 Ivory Coast',  group:'E', stage:'Group', kickoff:'2026-06-20T20:00:00Z', venue:'Toronto' },
  { id:'m35', home:'🇪🇨 Ecuador',      away:'🇨🇼 Curacao',      group:'E', stage:'Group', kickoff:'2026-06-21T00:00:00Z', venue:'Kansas City' },
  { id:'m36', home:'🇹🇳 Tunisia',      away:'🇯🇵 Japan',        group:'F', stage:'Group', kickoff:'2026-06-21T04:00:00Z', venue:'Monterrey' },
  { id:'m37', home:'🇪🇸 Spain',        away:'🇸🇦 Saudi Arabia', group:'H', stage:'Group', kickoff:'2026-06-21T16:00:00Z', venue:'Atlanta' },
  { id:'m38', home:'🇧🇪 Belgium',      away:'🇮🇷 Iran',         group:'G', stage:'Group', kickoff:'2026-06-21T19:00:00Z', venue:'Los Angeles' },
  { id:'m39', home:'🇺🇾 Uruguay',      away:'🇨🇻 Cape Verde',   group:'H', stage:'Group', kickoff:'2026-06-21T22:00:00Z', venue:'Miami' },
  { id:'m40', home:'🇳🇿 New Zealand',  away:'🇪🇬 Egypt',        group:'G', stage:'Group', kickoff:'2026-06-22T01:00:00Z', venue:'Vancouver' },
  { id:'m41', home:'🇦🇷 Argentina',    away:'🇦🇹 Austria',      group:'J', stage:'Group', kickoff:'2026-06-22T17:00:00Z', venue:'Dallas' },
  { id:'m42', home:'🇫🇷 France',       away:'🇮🇶 Iraq',         group:'I', stage:'Group', kickoff:'2026-06-22T21:00:00Z', venue:'Philadelphia' },
  { id:'m43', home:'🇳🇴 Norway',       away:'🇸🇳 Senegal',      group:'I', stage:'Group', kickoff:'2026-06-23T00:00:00Z', venue:'New Jersey' },
  { id:'m44', home:'🇯🇴 Jordan',       away:'🇩🇿 Algeria',      group:'J', stage:'Group', kickoff:'2026-06-23T03:00:00Z', venue:'San Francisco' },
  { id:'m45', home:'🇵🇹 Portugal',     away:'🇺🇿 Uzbekistan',   group:'K', stage:'Group', kickoff:'2026-06-23T17:00:00Z', venue:'Houston' },
  { id:'m46', home:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',     away:'🇬🇭 Ghana',        group:'L', stage:'Group', kickoff:'2026-06-23T20:00:00Z', venue:'Boston' },
  { id:'m47', home:'🇵🇦 Panama',       away:'🇭🇷 Croatia',      group:'L', stage:'Group', kickoff:'2026-06-23T23:00:00Z', venue:'Toronto' },
  { id:'m48', home:'🇨🇴 Colombia',     away:'🇨🇩 DR Congo',     group:'K', stage:'Group', kickoff:'2026-06-24T02:00:00Z', venue:'Guadalajara' },

  // ══════════════════════════════════════════════════════════
  //  GROUP STAGE — MATCHDAY 3 (simultaneous within group)
  // ══════════════════════════════════════════════════════════

  { id:'m49', home:'🇨🇭 Switzerland',  away:'🇨🇦 Canada',       group:'B', stage:'Group', kickoff:'2026-06-24T19:00:00Z', venue:'Vancouver' },
  { id:'m50', home:'🇧🇦 Bosnia & Herzegovina', away:'🇶🇦 Qatar', group:'B', stage:'Group', kickoff:'2026-06-24T19:00:00Z', venue:'Seattle' },
  { id:'m51', home:'🇲🇦 Morocco',      away:'🇭🇹 Haiti',        group:'C', stage:'Group', kickoff:'2026-06-24T22:00:00Z', venue:'Atlanta' },
  { id:'m52', home:'🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland',     away:'🇧🇷 Brazil',       group:'C', stage:'Group', kickoff:'2026-06-24T22:00:00Z', venue:'Miami' },
  { id:'m53', home:'🇿🇦 South Africa', away:'🇰🇷 South Korea',  group:'A', stage:'Group', kickoff:'2026-06-25T01:00:00Z', venue:'Monterrey' },
  { id:'m54', home:'🇨🇿 Czechia',      away:'🇲🇽 Mexico',       group:'A', stage:'Group', kickoff:'2026-06-25T01:00:00Z', venue:'Mexico City' },
  { id:'m55', home:'🇨🇼 Curacao',      away:'🇨🇮 Ivory Coast',  group:'E', stage:'Group', kickoff:'2026-06-25T20:00:00Z', venue:'Philadelphia' },
  { id:'m56', home:'🇪🇨 Ecuador',      away:'🇩🇪 Germany',      group:'E', stage:'Group', kickoff:'2026-06-25T20:00:00Z', venue:'New Jersey' },
  { id:'m57', home:'🇹🇳 Tunisia',      away:'🇳🇱 Netherlands',  group:'F', stage:'Group', kickoff:'2026-06-25T23:00:00Z', venue:'Kansas City' },
  { id:'m58', home:'🇯🇵 Japan',        away:'🇸🇪 Sweden',       group:'F', stage:'Group', kickoff:'2026-06-25T23:00:00Z', venue:'Dallas' },
  { id:'m59', home:'🇹🇷 Turkey',       away:'🇺🇸 USA',          group:'D', stage:'Group', kickoff:'2026-06-26T02:00:00Z', venue:'Los Angeles' },
  { id:'m60', home:'🇵🇾 Paraguay',     away:'🇦🇺 Australia',    group:'D', stage:'Group', kickoff:'2026-06-26T02:00:00Z', venue:'San Francisco' },
  { id:'m61', home:'🇳🇴 Norway',       away:'🇫🇷 France',       group:'I', stage:'Group', kickoff:'2026-06-26T19:00:00Z', venue:'Boston' },
  { id:'m62', home:'🇸🇳 Senegal',      away:'🇮🇶 Iraq',         group:'I', stage:'Group', kickoff:'2026-06-26T19:00:00Z', venue:'Toronto' },
  { id:'m63', home:'🇨🇻 Cape Verde',   away:'🇸🇦 Saudi Arabia', group:'H', stage:'Group', kickoff:'2026-06-27T00:00:00Z', venue:'Houston' },
  { id:'m64', home:'🇺🇾 Uruguay',      away:'🇪🇸 Spain',        group:'H', stage:'Group', kickoff:'2026-06-27T00:00:00Z', venue:'Guadalajara' },
  { id:'m65', home:'🇳🇿 New Zealand',  away:'🇧🇪 Belgium',      group:'G', stage:'Group', kickoff:'2026-06-27T03:00:00Z', venue:'Vancouver' },
  { id:'m66', home:'🇪🇬 Egypt',        away:'🇮🇷 Iran',         group:'G', stage:'Group', kickoff:'2026-06-27T03:00:00Z', venue:'Seattle' },
  { id:'m67', home:'🇵🇦 Panama',       away:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',     group:'L', stage:'Group', kickoff:'2026-06-27T21:00:00Z', venue:'New Jersey' },
  { id:'m68', home:'🇭🇷 Croatia',      away:'🇬🇭 Ghana',        group:'L', stage:'Group', kickoff:'2026-06-27T21:00:00Z', venue:'Philadelphia' },
  { id:'m69', home:'🇨🇴 Colombia',     away:'🇵🇹 Portugal',     group:'K', stage:'Group', kickoff:'2026-06-27T23:30:00Z', venue:'Miami' },
  { id:'m70', home:'🇨🇩 DR Congo',     away:'🇺🇿 Uzbekistan',   group:'K', stage:'Group', kickoff:'2026-06-27T23:30:00Z', venue:'Atlanta' },
  { id:'m71', home:'🇩🇿 Algeria',      away:'🇦🇹 Austria',      group:'J', stage:'Group', kickoff:'2026-06-28T02:00:00Z', venue:'Kansas City' },
  { id:'m72', home:'🇯🇴 Jordan',       away:'🇦🇷 Argentina',    group:'J', stage:'Group', kickoff:'2026-06-28T02:00:00Z', venue:'Dallas' },

  // ══════════════════════════════════════════════════════════
  //  ROUND OF 32
  // ══════════════════════════════════════════════════════════

  { id:'r32-01', home:'2nd Group A', away:'2nd Group B',     group:null, stage:'Round of 32', kickoff:'2026-06-28T19:00:00Z', venue:'Los Angeles' },
  { id:'r32-02', home:'1st Group C', away:'2nd Group F',     group:null, stage:'Round of 32', kickoff:'2026-06-29T17:00:00Z', venue:'Houston' },
  { id:'r32-03', home:'1st Group E', away:'Best 3rd',        group:null, stage:'Round of 32', kickoff:'2026-06-29T20:30:00Z', venue:'Boston' },
  { id:'r32-04', home:'1st Group F', away:'2nd Group C',     group:null, stage:'Round of 32', kickoff:'2026-06-30T01:00:00Z', venue:'Monterrey' },
  { id:'r32-05', home:'2nd Group E', away:'2nd Group I',     group:null, stage:'Round of 32', kickoff:'2026-06-30T17:00:00Z', venue:'Dallas' },
  { id:'r32-06', home:'1st Group I', away:'Best 3rd',        group:null, stage:'Round of 32', kickoff:'2026-06-30T21:00:00Z', venue:'New Jersey' },
  { id:'r32-07', home:'1st Group A', away:'Best 3rd',        group:null, stage:'Round of 32', kickoff:'2026-07-01T01:00:00Z', venue:'Mexico City' },
  { id:'r32-08', home:'1st Group L', away:'Best 3rd',        group:null, stage:'Round of 32', kickoff:'2026-07-01T16:00:00Z', venue:'Atlanta' },
  { id:'r32-09', home:'1st Group G', away:'Best 3rd',        group:null, stage:'Round of 32', kickoff:'2026-07-01T20:00:00Z', venue:'Seattle' },
  { id:'r32-10', home:'1st Group D', away:'Best 3rd',        group:null, stage:'Round of 32', kickoff:'2026-07-02T00:00:00Z', venue:'San Francisco' },
  { id:'r32-11', home:'1st Group H', away:'2nd Group J',     group:null, stage:'Round of 32', kickoff:'2026-07-02T19:00:00Z', venue:'Los Angeles' },
  { id:'r32-12', home:'2nd Group K', away:'2nd Group L',     group:null, stage:'Round of 32', kickoff:'2026-07-02T23:00:00Z', venue:'Toronto' },
  { id:'r32-13', home:'1st Group B', away:'Best 3rd',        group:null, stage:'Round of 32', kickoff:'2026-07-03T03:00:00Z', venue:'Vancouver' },
  { id:'r32-14', home:'2nd Group D', away:'2nd Group G',     group:null, stage:'Round of 32', kickoff:'2026-07-03T18:00:00Z', venue:'Dallas' },
  { id:'r32-15', home:'1st Group J', away:'2nd Group H',     group:null, stage:'Round of 32', kickoff:'2026-07-03T22:00:00Z', venue:'Miami' },
  { id:'r32-16', home:'1st Group K', away:'Best 3rd',        group:null, stage:'Round of 32', kickoff:'2026-07-04T01:30:00Z', venue:'Kansas City' },

  // ══════════════════════════════════════════════════════════
  //  ROUND OF 16
  // ══════════════════════════════════════════════════════════

  { id:'r16-01', home:'W Match 73', away:'W Match 76', group:null, stage:'Round of 16', kickoff:'2026-07-04T17:00:00Z', venue:'Houston' },
  { id:'r16-02', home:'W Match 75', away:'W Match 78', group:null, stage:'Round of 16', kickoff:'2026-07-04T21:00:00Z', venue:'Philadelphia' },
  { id:'r16-03', home:'W Match 74', away:'W Match 77', group:null, stage:'Round of 16', kickoff:'2026-07-05T20:00:00Z', venue:'New Jersey' },
  { id:'r16-04', home:'W Match 79', away:'W Match 80', group:null, stage:'Round of 16', kickoff:'2026-07-06T00:00:00Z', venue:'Mexico City' },
  { id:'r16-05', home:'W Match 84', away:'W Match 83', group:null, stage:'Round of 16', kickoff:'2026-07-06T19:00:00Z', venue:'Dallas' },
  { id:'r16-06', home:'W Match 82', away:'W Match 81', group:null, stage:'Round of 16', kickoff:'2026-07-07T00:00:00Z', venue:'Seattle' },
  { id:'r16-07', home:'W Match 87', away:'W Match 86', group:null, stage:'Round of 16', kickoff:'2026-07-07T16:00:00Z', venue:'Atlanta' },
  { id:'r16-08', home:'W Match 85', away:'W Match 88', group:null, stage:'Round of 16', kickoff:'2026-07-07T20:00:00Z', venue:'Vancouver' },

  // ══════════════════════════════════════════════════════════
  //  QUARTERFINALS
  // ══════════════════════════════════════════════════════════

  { id:'qf-01', home:'W QF Match 89', away:'W QF Match 90', group:null, stage:'Quarterfinal', kickoff:'2026-07-09T20:00:00Z', venue:'Boston' },
  { id:'qf-02', home:'W QF Match 93', away:'W QF Match 94', group:null, stage:'Quarterfinal', kickoff:'2026-07-10T19:00:00Z', venue:'Los Angeles' },
  { id:'qf-03', home:'W QF Match 91', away:'W QF Match 92', group:null, stage:'Quarterfinal', kickoff:'2026-07-11T21:00:00Z', venue:'Miami' },
  { id:'qf-04', home:'W QF Match 95', away:'W QF Match 96', group:null, stage:'Quarterfinal', kickoff:'2026-07-12T01:00:00Z', venue:'Kansas City' },

  // ══════════════════════════════════════════════════════════
  //  SEMIFINALS
  // ══════════════════════════════════════════════════════════

  { id:'sf-01', home:'W QF-01', away:'W QF-02', group:null, stage:'Semifinal', kickoff:'2026-07-14T19:00:00Z', venue:'Dallas' },
  { id:'sf-02', home:'W QF-03', away:'W QF-04', group:null, stage:'Semifinal', kickoff:'2026-07-15T19:00:00Z', venue:'Atlanta' },

  // ══════════════════════════════════════════════════════════
  //  THIRD PLACE & FINAL
  // ══════════════════════════════════════════════════════════

  { id:'3rd',   home:'L SF-01', away:'L SF-02', group:null, stage:'Third Place', kickoff:'2026-07-18T21:00:00Z', venue:'Miami' },
  { id:'final', home:'W SF-01', away:'W SF-02', group:null, stage:'Final',       kickoff:'2026-07-19T19:00:00Z', venue:'New Jersey (MetLife Stadium)' },
];

// ── Timezone definitions ─────────────────────────────────────────────────
export const TIMEZONES = [
  { id:'UTC',  label:'UTC / GMT',              offset:0,    region:'🌐' },
  { id:'BD',   label:'Bangladesh (BDT)',        offset:6,    region:'🇧🇩' },
  { id:'IN',   label:'India (IST)',             offset:5.5,  region:'🇮🇳' },
  { id:'PK',   label:'Pakistan (PKT)',          offset:5,    region:'🇵🇰' },
  { id:'UAE',  label:'UAE / Dubai (GST)',       offset:4,    region:'🇦🇪' },
  { id:'SA',   label:'Saudi Arabia (AST)',      offset:3,    region:'🇸🇦' },
  { id:'UK',   label:'UK (BST)',                offset:1,    region:'🇬🇧' },
  { id:'DE',   label:'Germany (CEST)',          offset:2,    region:'🇩🇪' },
  { id:'US_E', label:'USA Eastern (EDT)',       offset:-4,   region:'🇺🇸' },
  { id:'US_C', label:'USA Central (CDT)',       offset:-5,   region:'🇺🇸' },
  { id:'US_P', label:'USA Pacific (PDT)',       offset:-7,   region:'🇺🇸' },
  { id:'JP',   label:'Japan (JST)',             offset:9,    region:'🇯🇵' },
  { id:'AU',   label:'Australia/Sydney (AEST)', offset:10,   region:'🇦🇺' },
];

/**
 * Convert a UTC ISO string to formatted date/time in a given timezone offset.
 * offsetHours can be fractional (e.g. 5.5 for India).
 */
export function toTZ(isoString, offsetHours) {
  const utcMs   = new Date(isoString).getTime();
  const localMs = utcMs + offsetHours * 3600 * 1000;
  const d       = new Date(localMs);
  const pad     = n => String(n).padStart(2, '0');
  const days    = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const h    = d.getUTCHours();
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12  = h % 12 || 12;
  return {
    date:   `${days[d.getUTCDay()]}, ${months[d.getUTCMonth()]} ${d.getUTCDate()}`,
    time:   `${h12}:${pad(d.getUTCMinutes())} ${ampm}`,
    time24: `${pad(h)}:${pad(d.getUTCMinutes())}`,
    full:   `${days[d.getUTCDay()]} ${d.getUTCDate()} ${months[d.getUTCMonth()]} — ${h12}:${pad(d.getUTCMinutes())} ${ampm}`,
    ts:     localMs,
  };
}

/** Accent color per stage */
export function stageColor(stage) {
  if (!stage) return 'var(--border)';
  if (stage === 'Final')        return '#f59e0b';
  if (stage === 'Semifinal')    return '#a78bfa';
  if (stage === 'Quarterfinal') return '#60a5fa';
  if (stage.startsWith('Round')) return '#34d399';
  if (stage === 'Third Place')  return '#fb923c';
  return 'var(--border)';
}

/** Auto-detect viewer's timezone offset */
export function detectTZ() {
  const off = -new Date().getTimezoneOffset() / 60;
  let best = TIMEZONES[0];
  let minDiff = Infinity;
  for (const tz of TIMEZONES) {
    const diff = Math.abs(tz.offset - off);
    if (diff < minDiff) { minDiff = diff; best = tz; }
  }
  return best;
}
