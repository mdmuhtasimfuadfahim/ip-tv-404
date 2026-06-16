/**
 * Sports Channel Registry — World Cup IPTV 2026
 *
 * Stream tiers:
 *  🟢 STABLE  – public CDN, no token, CORS-open (akamai, amagi, gpcdn, frequency, xumo)
 *  🟡 PROXY   – works only when a CORS proxy is configured (VITE_PROXY_URL)
 *  🔴 BROKEN  – removed
 *
 * needsProxy: true → requires CORS proxy to load in-browser
 *
 * Sources: iptv-org/iptv (verified), official CDNs, FAST channels
 */

export const CHANNELS = [

  // ══════════════════════════════════════════════════════
  // 🇧🇩  BANGLADESH
  // ══════════════════════════════════════════════════════

  {
    id:       't-sports',
    name:     'T Sports HD',
    logo:     'https://i.imgur.com/2JzlorD.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['cricket','football','wc2026'],
    streams: [
      // iptv-org verified CDN (no token)
      { url: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/1709.m3u8', needsProxy: false },
      { url: 'https://tvsen7.aynaott.com/tsports-hd/index.m3u8',           needsProxy: false },
    ],
  },

  {
    id:       'gazi-tv',
    name:     'Gazi TV',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/GTV_Logo.png/200px-GTV_Logo.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['cricket','football'],
    streams: [
      { url: 'https://bozztv.com/rongo/rongo-gazitv/index.m3u8',           needsProxy: false },
      { url: 'http://tvn1.chowdhury-shaheb.com/gazitv/index.m3u8',         needsProxy: true  },
    ],
  },

  {
    id:       'btv-national',
    name:     'BTV National',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Bangladesh_Television_logo.svg/200px-Bangladesh_Television_logo.svg.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['national','wc2026'],
    streams: [
      { url: 'https://www.btvlive.gov.bd/streams/ef8b8bbc-98b7-4ba7-a49d-a0adaf259d35/ES/355ba051-9a60-48aa-adcf-5a6c64da8c5c/355ba051-9a60-48aa-adcf-5a6c64da8c5c_3_playlist.m3u8', needsProxy: false },
      { url: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/1709.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'btv-world',
    name:     'BTV World',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Bangladesh_Television_logo.svg/200px-Bangladesh_Television_logo.svg.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['national'],
    streams: [
      { url: 'https://www.btvlive.gov.bd/streams/ef8b8bbc-98b7-4ba7-a49d-a0adaf259d35/ES/d96eb7f4-83c2-4472-9597-3568390a8ebf/d96eb7f4-83c2-4472-9597-3568390a8ebf_3_playlist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'maasranga-tv',
    name:     'Maasranga TV',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Maasranga_Television_logo.png/200px-Maasranga_Television_logo.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['entertainment','cricket'],
    streams: [
      { url: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/index.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'channel-i',
    name:     'Channel i',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Channel_i_BD_logo.png/200px-Channel_i_BD_logo.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['entertainment'],
    streams: [
      { url: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/index.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'somoy-tv',
    name:     'Somoy TV',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Somoy_Television_logo.svg/200px-Somoy_Television_logo.svg.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['news','sports'],
    streams: [
      { url: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8', needsProxy: false },
      { url: 'https://bozztv.com/rongo/rongo-somoy/index.m3u8',             needsProxy: false },
    ],
  },

  {
    id:       'boishakhi-tv',
    name:     'Boishakhi TV',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Boishakhi_Television_Logo.png/200px-Boishakhi_Television_Logo.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['entertainment'],
    streams: [
      { url: 'https://boishakhi.sonarbanglatv.com/boishakhi/boishakhitv/index.m3u8', needsProxy: false },
      { url: 'https://bozztv.com/rongo/rongo-boishakhi/index.m3u8',                  needsProxy: false },
    ],
  },

  // ══════════════════════════════════════════════════════
  // 🇵🇰  PAKISTAN
  // ══════════════════════════════════════════════════════

  {
    id:       'ptv-sports',
    name:     'PTV Sports',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/PTV_Sports_Logo.png/200px-PTV_Sports_Logo.png',
    category: 'Pakistan',
    country:  'PK',
    tags:     ['cricket','wc2026'],
    streams: [
      { url: 'https://livestream.ptv.com.pk/ptvsports/ptvsports.m3u8', needsProxy: true  },
      { url: 'http://103.250.28.74:8000/play/a019/index.m3u8',         needsProxy: true  },
    ],
  },

  {
    id:       'ten-sports-pk',
    name:     'Ten Sports Pakistan',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Ten_Sports_2018.png/200px-Ten_Sports_2018.png',
    category: 'Pakistan',
    country:  'PK',
    tags:     ['cricket','football','wc2026'],
    streams: [
      { url: 'http://121.91.61.106:8000/play/a04h/index.m3u8', needsProxy: true },
    ],
  },

  {
    id:       'a-sports',
    name:     'A Sports',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/A_Sports_Pakistan_Logo.png/200px-A_Sports_Pakistan_Logo.png',
    category: 'Pakistan',
    country:  'PK',
    tags:     ['cricket','football','wc2026'],
    streams: [
      { url: 'https://tvsen6.aynaott.com/asports/index.m3u8', needsProxy: false },
    ],
  },

  // ══════════════════════════════════════════════════════
  // 🇮🇳  INDIA
  // ══════════════════════════════════════════════════════

  {
    id:       'dd-sports',
    name:     'DD Sports',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/DD_Sports_logo.png/200px-DD_Sports_logo.png',
    category: 'India',
    country:  'IN',
    tags:     ['cricket','wc2026'],
    streams: [
      { url: 'https://cdn-6.pishow.tv/live/13/master.m3u8', needsProxy: false },
    ],
  },

  // ══════════════════════════════════════════════════════
  // ⚽  FOOTBALL / GLOBAL
  // ══════════════════════════════════════════════════════

  {
    id:       'bein-sports',
    name:     'beIN Sports',
    logo:     'https://static.epg.best/qa/beINSports1.qa.png',
    category: 'Football',
    country:  'QA',
    tags:     ['football','wc2026'],
    streams: [
      // 🟢 Amagi FAST CDN — stable, no token
      { url: 'https://bein-esp-xumo.amagi.tv/playlistR1080p.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'real-madrid-tv',
    name:     'Real Madrid TV',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/200px-Real_Madrid_CF.svg.png',
    category: 'Football',
    country:  'ES',
    tags:     ['football'],
    streams: [
      // 🟢 Akamai official CDN
      { url: 'https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/bitrate_3.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'bleav-football',
    name:     'Bleav Football',
    logo:     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/1px-PNG_transparency_demonstration_1.png',
    category: 'Football',
    country:  'US',
    tags:     ['football'],
    streams: [
      // 🟢 Frequency FAST CDN
      { url: 'https://linear-493.frequency.stream/dist/glewedtv/493/hls/master/playlist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'sport5-il',
    name:     'Sport 5 Israel',
    logo:     null,
    category: 'Football',
    country:  'IL',
    tags:     ['football','multi'],
    streams: [
      // 🟢 Akamai CDN
      { url: 'https://rgelive.akamaized.net/hls/live/2043095/live3/playlist.m3u8', needsProxy: false },
    ],
  },

  // ══════════════════════════════════════════════════════
  // 🏏  CRICKET
  // ══════════════════════════════════════════════════════

  {
    id:       'willow-tv',
    name:     'Willow TV',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Willow_TV_Logo.png/200px-Willow_TV_Logo.png',
    category: 'Cricket',
    country:  'US',
    tags:     ['cricket'],
    streams: [
      { url: 'https://tvsen5.aynaott.com/willowhd/index.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'cricket-gold',
    name:     'Cricket Gold',
    logo:     null,
    category: 'Cricket',
    country:  'IN',
    tags:     ['cricket'],
    streams: [
      { url: 'https://tvsen6.aynaott.com/CricketGold/index.m3u8', needsProxy: false },
    ],
  },

  // ══════════════════════════════════════════════════════
  // 📡  MULTI-SPORT — STABLE FAST CHANNELS
  // ══════════════════════════════════════════════════════

  {
    id:       'nbc-sports',
    name:     'NBC Sports',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/NBCSports.svg/200px-NBCSports.svg.png',
    category: 'Multi-Sport',
    country:  'US',
    tags:     ['multi','wc2026'],
    streams: [
      // 🟢 Xumo/NBC CDN
      { url: 'https://xumo-xumoent-vc-122-sjv70.fast.nbcuni.com/live/master.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'world-free-sports',
    name:     'World of Free Sports',
    logo:     null,
    category: 'Multi-Sport',
    country:  'US',
    tags:     ['multi'],
    streams: [
      // 🟢 Amagi FAST CDN
      { url: 'https://mainstreammedia-worldoffreesportsintl-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-mainstreammediafreesportsintl-rakuten/CDN/master.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'speed-sports',
    name:     'Speed Sports',
    logo:     null,
    category: 'Motorsport',
    country:  'US',
    tags:     ['motorsport'],
    streams: [
      // 🟢 Frequency/Stirr FAST CDN
      { url: 'https://linear-599.frequency.stream/dist/stirr/599/hls/master/playlist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'more-than-sports',
    name:     'More Than Sports TV',
    logo:     null,
    category: 'Multi-Sport',
    country:  'DE',
    tags:     ['multi'],
    streams: [
      // 🟢 iptv-playoutcenter stable
      { url: 'https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'sports-first',
    name:     'Sports First TV',
    logo:     null,
    category: 'Multi-Sport',
    country:  'US',
    tags:     ['multi'],
    streams: [
      // 🟢 CloudFront CDN
      { url: 'https://d4ddgdmj1cvnm.cloudfront.net/scheduler/scheduleMaster/409.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'ktv-sport',
    name:     'KTV Sport Plus',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/KTV_Kuwait.png/200px-KTV_Kuwait.png',
    category: 'Multi-Sport',
    country:  'KW',
    tags:     ['multi'],
    streams: [
      // 🟢 Mangomolo CDN
      { url: 'https://kwtsplta.cdn.mangomolo.com/spl/smil:spl.stream.smil/chunklist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'oman-sports',
    name:     'Oman Sports TV',
    logo:     null,
    category: 'Multi-Sport',
    country:  'OM',
    tags:     ['multi'],
    streams: [
      // 🟢 Mgmlcdn CDN
      { url: 'https://partneta.cdn.mgmlcdn.com/omsport/smil:omsport.stream.smil/chunklist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'bahrain-sports',
    name:     'Bahrain Sports 1',
    logo:     null,
    category: 'Multi-Sport',
    country:  'BH',
    tags:     ['multi'],
    streams: [
      // 🟢 StreamLock CDN
      { url: 'https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       '2tv-sport',
    name:     '2TV Sport (Georgia)',
    logo:     null,
    category: 'Multi-Sport',
    country:  'GE',
    tags:     ['multi'],
    streams: [
      // 🟢 GPB CDN
      { url: 'https://tv.cdn.xsg.ge/gpb-2tv/index.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'sports-grid',
    name:     'Sports Grid',
    logo:     null,
    category: 'Multi-Sport',
    country:  'US',
    tags:     ['multi','analysis'],
    streams: [
      { url: 'https://tvsen6.aynaott.com/SportsGrid/index.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'marquee-sports',
    name:     'Marquee Sports Network',
    logo:     null,
    category: 'Multi-Sport',
    country:  'US',
    tags:     ['baseball','multi'],
    streams: [
      { url: 'https://tvsen6.aynaott.com/MarqueeSportsNetwork/index.m3u8', needsProxy: false },
    ],
  },

];

// ── Category tabs ────────────────────────────────────────────────
export const CATEGORIES = [
  { id: 'All',        label: '🌐 All',         emoji: '🌐' },
  { id: 'Bangladesh', label: '🇧🇩 Bangladesh', emoji: '🇧🇩' },
  { id: 'Pakistan',   label: '🇵🇰 Pakistan',   emoji: '🇵🇰' },
  { id: 'India',      label: '🇮🇳 India',       emoji: '🇮🇳' },
  { id: 'Football',   label: '⚽ Football',     emoji: '⚽' },
  { id: 'Cricket',    label: '🏏 Cricket',      emoji: '🏏' },
  { id: 'Multi-Sport',label: '📡 Multi-Sport',  emoji: '📡' },
  { id: 'Motorsport', label: '🏎️ Motorsport',   emoji: '🏎️' },
];

// Country flag emoji helper
export function countryFlag(code) {
  if (!code || code.length !== 2) return '🌐';
  return String.fromCodePoint(
    ...code.toUpperCase().split('').map(c => 0x1F1E6 - 65 + c.charCodeAt(0))
  );
}
