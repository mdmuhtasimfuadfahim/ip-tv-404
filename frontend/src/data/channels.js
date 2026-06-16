/**
 * Curated sports channel list.
 *
 * Each channel:
 *   id        – unique slug
 *   name      – display name
 *   logo      – logo URL (null = show emoji fallback)
 *   category  – Football | Cricket | Multi-Sport | Motorsport | Regional
 *   country   – 2-letter country code
 *   streams   – ordered list of stream URLs. Player tries [0] first, falls
 *               back to [1], etc.  Mark needsProxy:true for CORS-blocked streams
 *               (they'll route through your proxy when configured).
 *
 * STREAM RELIABILITY TIERS:
 *   🟢 Stable  – public CDN, no tokens, CORS-open (akamai, amagi, frequency, xumo)
 *   🟡 Good    – stable server but may need proxy for CORS
 *   🔴 Token   – aynaott.com streams with expiring tokens; backend auto-refreshes
 */

export const CHANNELS = [
  // ─── PTV Sports ────────────────────────────────────────────────
  {
    id:       'ptv-sports',
    name:     'PTV Sports',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/PTV_Sports_Logo.png/150px-PTV_Sports_Logo.png',
    category: 'Cricket',
    country:  'PK',
    streams: [
      { url: 'https://livestream.ptv.com.pk/ptvsports/ptvsports.m3u8', needsProxy: true },
      { url: 'https://tvsen5.aynaott.com/PtvSports/index.m3u8', needsProxy: false },
    ],
  },

  // ─── T Sports (Bangladesh) ──────────────────────────────────────
  {
    id:       't-sports',
    name:     'T Sports HD',
    logo:     'https://s3.aynaott.com/storage/dbc585f70a60b9855b6e13a8ce4cb6f4',
    category: 'Cricket',
    country:  'BD',
    streams: [
      { url: 'https://tvsen7.aynaott.com/tsports-hd/index.m3u8', needsProxy: false },
      { url: 'http://198.195.239.50:8095/Tsports/index.m3u8',     needsProxy: true  },
    ],
  },

  // ─── A Sports (Pakistan) ────────────────────────────────────────
  {
    id:       'a-sports',
    name:     'A Sports',
    logo:     'https://s3.aynaott.com/storage/64de30d2df9b2a888cb73f17614a9a8b',
    category: 'Multi-Sport',
    country:  'PK',
    streams: [
      { url: 'https://tvsen6.aynaott.com/asports/index.m3u8', needsProxy: false },
    ],
  },

  // ─── Cricket Gold ───────────────────────────────────────────────
  {
    id:       'cricket-gold',
    name:     'Cricket Gold',
    logo:     'https://s3.aynaott.com/storage/7d20b575edc4e4b5276faa8c246e72a4',
    category: 'Cricket',
    country:  'IN',
    streams: [
      { url: 'https://tvsen6.aynaott.com/CricketGold/index.m3u8', needsProxy: false },
    ],
  },

  // ─── ESPN ───────────────────────────────────────────────────────
  {
    id:       'espn',
    name:     'ESPN',
    logo:     'https://s3.aynaott.com/storage/b46df1959322aa48d270a6b163234c76',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://tvsen5.aynaott.com/espn/index.m3u8', needsProxy: false },
    ],
  },

  // ─── NBC Sports 🟢 ─────────────────────────────────────────────
  {
    id:       'nbc-sports',
    name:     'NBC Sports',
    logo:     'https://s3.aynaott.com/storage/0a241a80bf51d2c3b3722531706ce086',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://xumo-xumoent-vc-122-sjv70.fast.nbcuni.com/live/master.m3u8', needsProxy: false },
    ],
  },

  // ─── Fox Sports 2 ──────────────────────────────────────────────
  {
    id:       'fox-sports-2',
    name:     'Fox Sports 2',
    logo:     'https://s3.aynaott.com/storage/da4282cd107cc3d40efadae488b187e5',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://tvsen7.aynaott.com/foxsports2/index.m3u8', needsProxy: false },
    ],
  },

  // ─── beIN TV 🟢 (Amagi CDN) ─────────────────────────────────────
  {
    id:       'bein-tv',
    name:     'beIN Sports',
    logo:     'https://static.epg.best/qa/beINSports1.qa.png',
    category: 'Football',
    country:  'QA',
    streams: [
      { url: 'https://bein-esp-xumo.amagi.tv/playlistR1080p.m3u8', needsProxy: false },
    ],
  },

  // ─── TSN 1 ──────────────────────────────────────────────────────
  {
    id:       'tsn-1',
    name:     'TSN 1',
    logo:     'https://s3.aynaott.com/storage/59fe7ff434fed04ecec29b4d737ebc95',
    category: 'Multi-Sport',
    country:  'CA',
    streams: [
      { url: 'https://tvsen7.aynaott.com/tsn1/index.m3u8', needsProxy: false },
    ],
  },

  // ─── TSN 2 ──────────────────────────────────────────────────────
  {
    id:       'tsn-2',
    name:     'TSN 2',
    logo:     'https://s3.aynaott.com/storage/17642cb60c2af7fc36ca1e08cc54fdae',
    category: 'Multi-Sport',
    country:  'CA',
    streams: [
      { url: 'https://tvsen7.aynaott.com/tsn2/index.m3u8', needsProxy: false },
    ],
  },

  // ─── TSN 3 ──────────────────────────────────────────────────────
  {
    id:       'tsn-3',
    name:     'TSN 3',
    logo:     'https://s3.aynaott.com/storage/1cb10107a47db353e35ad78d3160eda7',
    category: 'Multi-Sport',
    country:  'CA',
    streams: [
      { url: 'https://tvsen7.aynaott.com/tsn3/index.m3u8', needsProxy: false },
    ],
  },

  // ─── Golf Channel ───────────────────────────────────────────────
  {
    id:       'golf-channel',
    name:     'Golf Channel',
    logo:     'https://s3.aynaott.com/storage/edb73991516696dfd53efbd32d80ca58',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://tvsen6.aynaott.com/golfchannel/index.m3u8', needsProxy: false },
    ],
  },

  // ─── NFL Network ────────────────────────────────────────────────
  {
    id:       'nfl-network',
    name:     'NFL Network',
    logo:     'https://s3.aynaott.com/storage/79f1ee920d6931a767ae0030e1c7c12b',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://tvsen6.aynaott.com/nfl/index.m3u8', needsProxy: false },
    ],
  },

  // ─── Willow HD ──────────────────────────────────────────────────
  {
    id:       'willow-hd',
    name:     'Willow HD',
    logo:     'https://s3.aynaott.com/storage/94a778ec3219f7eb54bdf1ee07a95788',
    category: 'Cricket',
    country:  'US',
    streams: [
      { url: 'https://tvsen5.aynaott.com/willowhd/index.m3u8', needsProxy: false },
    ],
  },

  // ─── DD Sports 🟢 ───────────────────────────────────────────────
  {
    id:       'dd-sports',
    name:     'DD Sports',
    logo:     'https://s3.aynaott.com/storage/188500190395c4de0e506d518925dcc4',
    category: 'Cricket',
    country:  'IN',
    streams: [
      { url: 'https://cdn-6.pishow.tv/live/13/master.m3u8', needsProxy: false },
    ],
  },

  // ─── Star Sports 2 ──────────────────────────────────────────────
  {
    id:       'star-sports-2',
    name:     'Star Sports 2',
    logo:     null,
    category: 'Cricket',
    country:  'IN',
    streams: [
      { url: 'http://198.195.239.50:8095/StarSports2/index.m3u8', needsProxy: true },
    ],
  },

  // ─── Sony Sports 2 ──────────────────────────────────────────────
  {
    id:       'sony-sports-2',
    name:     'Sony Sports 2',
    logo:     null,
    category: 'Cricket',
    country:  'IN',
    streams: [
      { url: 'http://198.195.239.50:8095/SonyTenSports2/index.m3u8', needsProxy: true },
    ],
  },

  // ─── Eurosport HD ───────────────────────────────────────────────
  {
    id:       'eurosport',
    name:     'Eurosport HD',
    logo:     null,
    category: 'Multi-Sport',
    country:  'EU',
    streams: [
      { url: 'http://198.195.239.50:8095/Eurosport/index.m3u8', needsProxy: true },
    ],
  },

  // ─── Real Madrid TV 🟢 (Akamai) ─────────────────────────────────
  {
    id:       'real-madrid-tv',
    name:     'Real Madrid TV',
    logo:     'https://pbs.twimg.com/profile_images/896773300667461633/F75hrQfN_400x400.jpg',
    category: 'Football',
    country:  'ES',
    streams: [
      { url: 'https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/bitrate_3.m3u8', needsProxy: false },
    ],
  },

  // ─── KTV Sport Plus 🟢 ──────────────────────────────────────────
  {
    id:       'ktv-sport',
    name:     'KTV Sport Plus',
    logo:     'https://s3.aynaott.com/storage/b54495ee3cdd53ddaa19d1f98120f488',
    category: 'Multi-Sport',
    country:  'KW',
    streams: [
      { url: 'https://kwtsplta.cdn.mangomolo.com/spl/smil:spl.stream.smil/chunklist.m3u8', needsProxy: false },
    ],
  },

  // ─── Oman Sports TV 🟢 ──────────────────────────────────────────
  {
    id:       'oman-sports',
    name:     'Oman Sports TV',
    logo:     'https://s3.aynaott.com/storage/33f87783637fc95fdb8837ba9344c9e9',
    category: 'Multi-Sport',
    country:  'OM',
    streams: [
      { url: 'https://partneta.cdn.mgmlcdn.com/omsport/smil:omsport.stream.smil/chunklist.m3u8', needsProxy: false },
    ],
  },

  // ─── Bahrain Sports 1 🟢 ────────────────────────────────────────
  {
    id:       'bahrain-sports',
    name:     'Bahrain Sports 1',
    logo:     'https://s3.aynaott.com/storage/f55bea3263be1af187fe1122e4f44142',
    category: 'Multi-Sport',
    country:  'BH',
    streams: [
      { url: 'https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8', needsProxy: false },
    ],
  },

  // ─── Bleav Football 🟢 ──────────────────────────────────────────
  {
    id:       'bleav-football',
    name:     'Bleav Football',
    logo:     'https://s3.aynaott.com/storage/030ec528e912afb9a2ec3b4c5167a928',
    category: 'Football',
    country:  'US',
    streams: [
      { url: 'https://linear-493.frequency.stream/dist/glewedtv/493/hls/master/playlist.m3u8', needsProxy: false },
    ],
  },

  // ─── Speed Sports 🟢 ────────────────────────────────────────────
  {
    id:       'speed-sports',
    name:     'Speed Sports 1',
    logo:     'https://s3.aynaott.com/storage/06f5b193bfa4d31310ee934eb3c2222e',
    category: 'Motorsport',
    country:  'US',
    streams: [
      { url: 'https://linear-599.frequency.stream/dist/stirr/599/hls/master/playlist.m3u8', needsProxy: false },
    ],
  },

  // ─── World of Free Sports 🟢 ────────────────────────────────────
  {
    id:       'world-free-sports',
    name:     'World of Free Sports',
    logo:     'https://s3.aynaott.com/storage/1a580ee2636a0c4761e623bc131ba7a6',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://mainstreammedia-worldoffreesportsintl-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-mainstreammediafreesportsintl-rakuten/CDN/master.m3u8', needsProxy: false },
    ],
  },

  // ─── Sports First TV 🟢 ─────────────────────────────────────────
  {
    id:       'sports-first',
    name:     'Sports First TV',
    logo:     'https://s3.aynaott.com/storage/748d28752dcf95740561f1ac39e15fc3',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://d4ddgdmj1cvnm.cloudfront.net/scheduler/scheduleMaster/409.m3u8', needsProxy: false },
    ],
  },

  // ─── More Than Sports 🟢 ────────────────────────────────────────
  {
    id:       'more-than-sports',
    name:     'More Than Sports TV',
    logo:     'https://s3.aynaott.com/storage/39174e32d4f8d29a95c881637fe1ecdb',
    category: 'Multi-Sport',
    country:  'DE',
    streams: [
      { url: 'https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8', needsProxy: false },
    ],
  },

  // ─── Sports Grid ─────────────────────────────────────────────────
  {
    id:       'sports-grid',
    name:     'Sports Grid',
    logo:     'https://s3.aynaott.com/storage/1aa37e387ed56a1260b285558eec7c46',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://tvsen6.aynaott.com/SportsGrid/index.m3u8', needsProxy: false },
    ],
  },

  // ─── Marquee Sports Network ──────────────────────────────────────
  {
    id:       'marquee-sports',
    name:     'Marquee Sports Network',
    logo:     'https://s3.aynaott.com/storage/66bdaa21aba96de6d32a3515715f7502',
    category: 'Multi-Sport',
    country:  'US',
    streams: [
      { url: 'https://tvsen6.aynaott.com/MarqueeSportsNetwork/index.m3u8', needsProxy: false },
    ],
  },

  // ─── Sport5 Israel 🟢 ───────────────────────────────────────────
  {
    id:       'sport5',
    name:     'Sport 5',
    logo:     null,
    category: 'Football',
    country:  'IL',
    streams: [
      { url: 'https://rgelive.akamaized.net/hls/live/2043095/live3/playlist.m3u8', needsProxy: false },
    ],
  },

  // ─── 2TV Sport Georgia 🟢 ───────────────────────────────────────
  {
    id:       '2tv-sport',
    name:     '2TV Sport',
    logo:     null,
    category: 'Multi-Sport',
    country:  'GE',
    streams: [
      { url: 'https://tv.cdn.xsg.ge/gpb-2tv/index.m3u8', needsProxy: false },
    ],
  },
];

// Category list for filter tabs
export const CATEGORIES = [
  'All',
  'Football',
  'Cricket',
  'Multi-Sport',
  'Motorsport',
  'Regional',
];

// Country flag emoji helper
export function countryFlag(code) {
  if (!code || code.length !== 2) return '🌐';
  return String.fromCodePoint(
    ...code.toUpperCase().split('').map(c => 0x1F1E6 - 65 + c.charCodeAt(0))
  );
}
