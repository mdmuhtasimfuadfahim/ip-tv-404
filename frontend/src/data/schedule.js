/**
 * FIFA World Cup 2026 – Group Stage + Knockout Schedule
 * Host countries: USA, Canada, Mexico  |  48 teams  |  104 matches
 * Dates: June 11 – July 19, 2026
 * Times: local match times converted to UTC
 */

export const SCHEDULE = [
  // ═══ GROUP STAGE ════════════════════════════════════════════════
  // Group A
  { id: 1,  teams: 'Mexico vs Honduras',         time: '2026-06-11T01:00:00Z', stage: 'Group A', venue: 'Estadio Azteca, Mexico City', channelHint: 'Azteca, Telemundo' },
  { id: 2,  teams: 'USA vs Jamaica',             time: '2026-06-12T00:00:00Z', stage: 'Group B', venue: 'MetLife Stadium, New York',    channelHint: 'Fox Sports, Telemundo' },
  { id: 3,  teams: 'Brazil vs Croatia',          time: '2026-06-13T20:00:00Z', stage: 'Group C', venue: 'SoFi Stadium, Los Angeles',   channelHint: 'Globo, Fox Sports' },
  { id: 4,  teams: 'Argentina vs Morocco',       time: '2026-06-13T23:00:00Z', stage: 'Group D', venue: 'AT&T Stadium, Dallas',         channelHint: 'TyC Sports, beIN Sports' },
  { id: 5,  teams: 'England vs Serbia',          time: '2026-06-14T20:00:00Z', stage: 'Group E', venue: 'BC Place, Vancouver',          channelHint: 'BBC, ITV' },
  { id: 6,  teams: 'France vs Belgium',          time: '2026-06-14T23:00:00Z', stage: 'Group F', venue: 'Lumen Field, Seattle',         channelHint: 'TF1, RTBF' },
  { id: 7,  teams: 'Germany vs Japan',           time: '2026-06-15T20:00:00Z', stage: 'Group G', venue: 'Gillette Stadium, Boston',     channelHint: 'ARD, ZDF, NHK' },
  { id: 8,  teams: 'Spain vs Portugal',          time: '2026-06-15T23:00:00Z', stage: 'Group H', venue: 'Arrowhead, Kansas City',       channelHint: 'RTVE, RTP' },
  { id: 9,  teams: 'Italy vs Netherlands',       time: '2026-06-16T20:00:00Z', stage: 'Group I', venue: 'Rose Bowl, Pasadena',          channelHint: 'RAI, NOS' },
  { id: 10, teams: 'Canada vs Peru',             time: '2026-06-17T23:00:00Z', stage: 'Group J', venue: 'BMO Field, Toronto',           channelHint: 'TSN, CBC' },
  { id: 11, teams: 'Portugal vs USA',            time: '2026-06-21T23:00:00Z', stage: 'Group H', venue: 'MetLife Stadium, New York',    channelHint: 'RTP, Fox Sports' },
  { id: 12, teams: 'Pakistan vs India',          time: '2026-06-22T20:00:00Z', stage: 'Group K', venue: 'SoFi Stadium, Los Angeles',   channelHint: 'PTV Sports, A Sports' },
  { id: 13, teams: 'Bangladesh vs Nepal',        time: '2026-06-23T20:00:00Z', stage: 'Group L', venue: 'AT&T Stadium, Dallas',         channelHint: 'T Sports, BTV' },
  // ═══ ROUND OF 32 ════════════════════════════════════════════════
  { id: 20, teams: 'R32-1: Winner A vs Runner B', time: '2026-06-29T20:00:00Z', stage: 'Round of 32', venue: 'MetLife Stadium, New York', channelHint: 'Fox Sports, BBC' },
  { id: 21, teams: 'R32-2: Winner C vs Runner D', time: '2026-06-29T23:30:00Z', stage: 'Round of 32', venue: 'AT&T Stadium, Dallas',      channelHint: 'Globo, ESPN' },
  { id: 22, teams: 'R32-3: Winner E vs Runner F', time: '2026-06-30T20:00:00Z', stage: 'Round of 32', venue: 'SoFi Stadium, Los Angeles', channelHint: 'BBC, ITV' },
  { id: 23, teams: 'R32-4: Winner G vs Runner H', time: '2026-06-30T23:30:00Z', stage: 'Round of 32', venue: 'Rose Bowl, Pasadena',        channelHint: 'ARD, ZDF' },
  // ═══ ROUND OF 16 ════════════════════════════════════════════════
  { id: 30, teams: 'R16-1: TBD vs TBD',          time: '2026-07-03T20:00:00Z', stage: 'Round of 16', venue: 'MetLife Stadium, New York', channelHint: 'BBC, Fox Sports' },
  { id: 31, teams: 'R16-2: TBD vs TBD',          time: '2026-07-03T23:30:00Z', stage: 'Round of 16', venue: 'AT&T Stadium, Dallas',      channelHint: 'ESPN, Telemundo' },
  { id: 32, teams: 'R16-3: TBD vs TBD',          time: '2026-07-04T20:00:00Z', stage: 'Round of 16', venue: 'SoFi Stadium, Los Angeles', channelHint: 'NBC, Globo' },
  { id: 33, teams: 'R16-4: TBD vs TBD',          time: '2026-07-04T23:30:00Z', stage: 'Round of 16', venue: 'Gillette Stadium, Boston',  channelHint: 'BBC, ITV' },
  // ═══ QUARTER FINALS ═════════════════════════════════════════════
  { id: 40, teams: 'QF-1: TBD vs TBD',           time: '2026-07-10T20:00:00Z', stage: 'Quarter Final', venue: 'MetLife Stadium, New York',    channelHint: 'BBC, Fox Sports' },
  { id: 41, teams: 'QF-2: TBD vs TBD',           time: '2026-07-10T23:30:00Z', stage: 'Quarter Final', venue: 'AT&T Stadium, Dallas',         channelHint: 'ESPN, Telemundo' },
  { id: 42, teams: 'QF-3: TBD vs TBD',           time: '2026-07-11T20:00:00Z', stage: 'Quarter Final', venue: 'SoFi Stadium, Los Angeles',    channelHint: 'Globo, NBC' },
  { id: 43, teams: 'QF-4: TBD vs TBD',           time: '2026-07-11T23:30:00Z', stage: 'Quarter Final', venue: 'Levi\'s Stadium, San Jose',    channelHint: 'BBC, ARD' },
  // ═══ SEMI FINALS ════════════════════════════════════════════════
  { id: 50, teams: 'SF-1: TBD vs TBD',           time: '2026-07-14T23:00:00Z', stage: 'Semi Final',    venue: 'MetLife Stadium, New York',    channelHint: 'Fox Sports, BBC, TSN' },
  { id: 51, teams: 'SF-2: TBD vs TBD',           time: '2026-07-15T23:00:00Z', stage: 'Semi Final',    venue: 'AT&T Stadium, Dallas',         channelHint: 'Fox Sports, BBC, TSN' },
  // ═══ THIRD PLACE ════════════════════════════════════════════════
  { id: 60, teams: '3rd Place: TBD vs TBD',      time: '2026-07-18T20:00:00Z', stage: '3rd Place',     venue: 'Rose Bowl, Pasadena',          channelHint: 'Fox Sports, BBC' },
  // ═══ FINAL ══════════════════════════════════════════════════════
  { id: 99, teams: '🏆 FINAL: TBD vs TBD',       time: '2026-07-19T22:00:00Z', stage: 'Final',         venue: 'MetLife Stadium, New York',    channelHint: 'Fox Sports, BBC, beIN, PTV Sports, T Sports' },
];

export const STAGES = [
  'All',
  'Group A', 'Group B', 'Group C', 'Group D',
  'Group E', 'Group F', 'Group G', 'Group H',
  'Group I', 'Group J', 'Group K', 'Group L',
  'Round of 32', 'Round of 16', 'Quarter Final', 'Semi Final', '3rd Place', 'Final',
];

export const STAGE_GROUPS = {
  'Groups':        STAGES.filter(s => s.startsWith('Group')),
  'Knockouts':     ['Round of 32', 'Round of 16', 'Quarter Final', 'Semi Final', '3rd Place', 'Final'],
};

export function stageColor(stage) {
  if (stage === 'Final')         return '#f59e0b'; // gold
  if (stage === 'Semi Final')    return '#22d3ee'; // cyan
  if (stage === 'Quarter Final') return '#34d399'; // green
  if (stage === 'Round of 16')   return '#a78bfa'; // purple
  if (stage === 'Round of 32')   return '#fb923c'; // orange
  if (stage === '3rd Place')     return '#94a3b8'; // gray
  return '#64748b'; // default blue-gray for groups
}
