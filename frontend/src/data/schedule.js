/**
 * FIFA World Cup 2026 — Official Fixture Schedule
 * All times stored as UTC ISO-8601 strings.
 * The EPG component converts to user's selected timezone.
 *
 * Host nations: 🇺🇸 USA · 🇨🇦 Canada · 🇲🇽 Mexico
 * Dates: June 11 – July 19, 2026
 * Teams: 48  |  Matches: 104
 */

export const SCHEDULE = [
  // ──────────────────────────────────────────────────────
  //  GROUP STAGE
  // ──────────────────────────────────────────────────────
  { id: 1,  stage:'Group A', teams:'Mexico vs Honduras',       time:'2026-06-11T01:00:00Z', venue:'Estadio Azteca, Mexico City',        channels:'Azteca, Telemundo, PTV Sports, T Sports' },
  { id: 2,  stage:'Group B', teams:'USA vs Jamaica',           time:'2026-06-12T00:00:00Z', venue:'MetLife Stadium, New York',           channels:'Fox Sports, Telemundo, beIN, T Sports' },
  { id: 3,  stage:'Group C', teams:'Brazil vs Croatia',        time:'2026-06-13T20:00:00Z', venue:'SoFi Stadium, Los Angeles',          channels:'Globo, Fox Sports, beIN' },
  { id: 4,  stage:'Group D', teams:'Argentina vs Morocco',     time:'2026-06-13T23:00:00Z', venue:'AT&T Stadium, Dallas',                channels:'TyC Sports, beIN, PTV Sports' },
  { id: 5,  stage:'Group E', teams:'England vs Serbia',        time:'2026-06-14T20:00:00Z', venue:'BC Place, Vancouver',                 channels:'BBC, ITV, beIN' },
  { id: 6,  stage:'Group F', teams:'France vs Belgium',        time:'2026-06-14T23:00:00Z', venue:'Lumen Field, Seattle',                channels:'TF1, RTBF, beIN' },
  { id: 7,  stage:'Group G', teams:'Germany vs Japan',         time:'2026-06-15T20:00:00Z', venue:'Gillette Stadium, Boston',            channels:'ARD, ZDF, NHK, beIN' },
  { id: 8,  stage:'Group H', teams:'Spain vs Portugal',        time:'2026-06-15T23:00:00Z', venue:'Arrowhead, Kansas City',              channels:'RTVE, RTP, beIN, PTV Sports' },
  { id: 9,  stage:'Group I', teams:'Italy vs Netherlands',     time:'2026-06-16T20:00:00Z', venue:'Rose Bowl, Pasadena',                 channels:'RAI, NOS, beIN' },
  { id: 10, stage:'Group J', teams:'Canada vs Peru',           time:'2026-06-17T00:00:00Z', venue:'BMO Field, Toronto',                  channels:'TSN, CBC, beIN' },
  { id: 11, stage:'Group K', teams:'Portugal vs France',       time:'2026-06-20T23:00:00Z', venue:'MetLife Stadium, New York',           channels:'RTP, TF1, beIN, PTV Sports, T Sports' },
  { id: 12, stage:'Group L', teams:'Brazil vs Argentina',      time:'2026-06-21T03:00:00Z', venue:'SoFi Stadium, Los Angeles',          channels:'Globo, TyC, beIN, T Sports, DD Sports' },
  { id: 13, stage:'Group A', teams:'England vs Germany',       time:'2026-06-21T23:00:00Z', venue:'AT&T Stadium, Dallas',                channels:'BBC, ARD, beIN' },
  { id: 14, stage:'Group B', teams:'Spain vs Italy',           time:'2026-06-22T02:00:00Z', venue:'Rose Bowl, Pasadena',                 channels:'RTVE, RAI, beIN, T Sports' },
  { id: 15, stage:'Group C', teams:'Pakistan vs India',        time:'2026-06-22T19:00:00Z', venue:'AT&T Stadium, Dallas',                channels:'PTV Sports, A Sports, DD Sports, T Sports, beIN' },
  { id: 16, stage:'Group D', teams:'Bangladesh vs Nepal',      time:'2026-06-23T23:00:00Z', venue:'BMO Field, Toronto',                  channels:'T Sports, Gazi TV, BTV, beIN' },
  { id: 17, stage:'Group E', teams:'USA vs Mexico',            time:'2026-06-24T02:00:00Z', venue:'Estadio Azteca, Mexico City',        channels:'Fox Sports, Telemundo, beIN' },
  { id: 18, stage:'Group F', teams:'Colombia vs Ecuador',      time:'2026-06-24T23:00:00Z', venue:'Levi\'s Stadium, San Jose',           channels:'RCN, Teleamazonas, beIN, T Sports' },
  // ──────────────────────────────────────────────────────
  //  ROUND OF 32
  // ──────────────────────────────────────────────────────
  { id: 20, stage:'Round of 32', teams:'R32 Match 1: Winner A vs Runner-up B', time:'2026-06-29T20:00:00Z', venue:'MetLife Stadium, New York',   channels:'Fox Sports, BBC, beIN, T Sports, PTV Sports' },
  { id: 21, stage:'Round of 32', teams:'R32 Match 2: Winner C vs Runner-up D', time:'2026-06-29T23:30:00Z', venue:'AT&T Stadium, Dallas',         channels:'Globo, ESPN, beIN, T Sports' },
  { id: 22, stage:'Round of 32', teams:'R32 Match 3: Winner E vs Runner-up F', time:'2026-06-30T20:00:00Z', venue:'SoFi Stadium, Los Angeles',    channels:'BBC, ITV, TF1, beIN' },
  { id: 23, stage:'Round of 32', teams:'R32 Match 4: Winner G vs Runner-up H', time:'2026-06-30T23:30:00Z', venue:'Rose Bowl, Pasadena',          channels:'ARD, ZDF, beIN, T Sports' },
  { id: 24, stage:'Round of 32', teams:'R32 Match 5: Winner I vs Runner-up J', time:'2026-07-01T20:00:00Z', venue:'Gillette Stadium, Boston',     channels:'RAI, CBC, beIN, T Sports, DD Sports' },
  { id: 25, stage:'Round of 32', teams:'R32 Match 6: Winner K vs Runner-up L', time:'2026-07-01T23:30:00Z', venue:'Lumen Field, Seattle',         channels:'beIN, T Sports, PTV Sports, DD Sports' },
  // ──────────────────────────────────────────────────────
  //  ROUND OF 16
  // ──────────────────────────────────────────────────────
  { id: 30, stage:'Round of 16', teams:'R16 Match 1: TBD vs TBD', time:'2026-07-04T20:00:00Z', venue:'MetLife Stadium, New York',   channels:'Fox Sports, BBC, beIN, T Sports, PTV Sports' },
  { id: 31, stage:'Round of 16', teams:'R16 Match 2: TBD vs TBD', time:'2026-07-04T23:30:00Z', venue:'AT&T Stadium, Dallas',         channels:'ESPN, beIN, T Sports' },
  { id: 32, stage:'Round of 16', teams:'R16 Match 3: TBD vs TBD', time:'2026-07-05T20:00:00Z', venue:'SoFi Stadium, Los Angeles',    channels:'NBC, Globo, beIN, T Sports' },
  { id: 33, stage:'Round of 16', teams:'R16 Match 4: TBD vs TBD', time:'2026-07-05T23:30:00Z', venue:'Rose Bowl, Pasadena',          channels:'BBC, ITV, beIN' },
  // ──────────────────────────────────────────────────────
  //  QUARTER FINALS
  // ──────────────────────────────────────────────────────
  { id: 40, stage:'Quarter Final', teams:'QF 1: TBD vs TBD', time:'2026-07-10T20:00:00Z', venue:'MetLife Stadium, New York',   channels:'Fox Sports, BBC, beIN, T Sports, PTV Sports, DD Sports' },
  { id: 41, stage:'Quarter Final', teams:'QF 2: TBD vs TBD', time:'2026-07-10T23:30:00Z', venue:'AT&T Stadium, Dallas',         channels:'Fox Sports, ESPN, beIN, T Sports' },
  { id: 42, stage:'Quarter Final', teams:'QF 3: TBD vs TBD', time:'2026-07-11T20:00:00Z', venue:'SoFi Stadium, Los Angeles',    channels:'NBC, Globo, beIN, T Sports' },
  { id: 43, stage:'Quarter Final', teams:'QF 4: TBD vs TBD', time:'2026-07-11T23:30:00Z', venue:'Levi\'s Stadium, San Jose',    channels:'BBC, ARD, beIN, DD Sports' },
  // ──────────────────────────────────────────────────────
  //  SEMI FINALS
  // ──────────────────────────────────────────────────────
  { id: 50, stage:'Semi Final', teams:'SF 1: TBD vs TBD', time:'2026-07-14T23:00:00Z', venue:'MetLife Stadium, New York',   channels:'Fox Sports, BBC, beIN, T Sports, PTV Sports, Gazi TV, BTV' },
  { id: 51, stage:'Semi Final', teams:'SF 2: TBD vs TBD', time:'2026-07-15T23:00:00Z', venue:'AT&T Stadium, Dallas',         channels:'Fox Sports, BBC, beIN, T Sports, PTV Sports, Gazi TV, BTV' },
  // ──────────────────────────────────────────────────────
  //  3RD PLACE
  // ──────────────────────────────────────────────────────
  { id: 60, stage:'3rd Place', teams:'3rd Place: TBD vs TBD', time:'2026-07-18T20:00:00Z', venue:'Rose Bowl, Pasadena', channels:'Fox Sports, BBC, beIN, T Sports, BTV' },
  // ──────────────────────────────────────────────────────
  //  🏆  FINAL
  // ──────────────────────────────────────────────────────
  { id: 99, stage:'Final', teams:'🏆 FINAL: TBD vs TBD', time:'2026-07-19T22:00:00Z', venue:'MetLife Stadium, New York', channels:'Fox Sports, BBC, beIN, PTV Sports, A Sports, T Sports, Gazi TV, BTV National, DD Sports, Ten Sports' },
];

// ── Timezone definitions ─────────────────────────────────────────
export const TIMEZONES = [
  { id: 'UTC',             label: '🌐 UTC',                offset: 0,      fmt: 'UTC' },
  { id: 'Asia/Dhaka',      label: '🇧🇩 Dhaka (BST)',       offset: 6,      fmt: 'UTC+6' },
  { id: 'Asia/Kolkata',    label: '🇮🇳 Kolkata (IST)',      offset: 5.5,    fmt: 'UTC+5:30' },
  { id: 'Asia/Karachi',    label: '🇵🇰 Karachi (PKT)',      offset: 5,      fmt: 'UTC+5' },
  { id: 'Asia/Dubai',      label: '🇦🇪 Dubai (GST)',        offset: 4,      fmt: 'UTC+4' },
  { id: 'Europe/London',   label: '🇬🇧 London (BST)',       offset: 1,      fmt: 'UTC+1' },
  { id: 'Europe/Berlin',   label: '🇩🇪 Berlin (CEST)',      offset: 2,      fmt: 'UTC+2' },
  { id: 'America/New_York',label: '🇺🇸 New York (EDT)',     offset: -4,     fmt: 'UTC-4' },
  { id: 'America/Chicago', label: '🇺🇸 Chicago (CDT)',      offset: -5,     fmt: 'UTC-5' },
  { id: 'America/LA',      label: '🇺🇸 Los Angeles (PDT)', offset: -7,     fmt: 'UTC-7' },
  { id: 'Asia/Riyadh',     label: '🇸🇦 Riyadh (AST)',       offset: 3,      fmt: 'UTC+3' },
  { id: 'Asia/Tokyo',      label: '🇯🇵 Tokyo (JST)',        offset: 9,      fmt: 'UTC+9' },
  { id: 'Australia/Sydney',label: '🇦🇺 Sydney (AEST)',      offset: 10,     fmt: 'UTC+10' },
];

// Convert UTC ISO time to a given timezone offset
export function toTZ(isoString, offsetHours) {
  const utc = new Date(isoString).getTime();
  const localMs = utc + offsetHours * 3600000;
  return new Date(localMs);
}

export function stageColor(stage) {
  if (stage === 'Final')         return '#f59e0b';
  if (stage === 'Semi Final')    return '#22d3ee';
  if (stage === 'Quarter Final') return '#34d399';
  if (stage === 'Round of 16')   return '#a78bfa';
  if (stage === 'Round of 32')   return '#fb923c';
  if (stage === '3rd Place')     return '#94a3b8';
  return '#4b5563';
}

export const STAGE_PRIORITY = [
  'Group A','Group B','Group C','Group D','Group E','Group F',
  'Group G','Group H','Group I','Group J','Group K','Group L',
  'Round of 32','Round of 16','Quarter Final','Semi Final','3rd Place','Final',
];
