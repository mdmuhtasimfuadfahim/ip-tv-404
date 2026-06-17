/**
 * Sports Channel Registry — World Cup IPTV 2026
 *
 * Stream tiers:
 *  🟢 STABLE  – public CDN, no token, CORS-open (akamai, amagi, gpcdn, frequency, xumo, cloudfront)
 *  🟡 PROXY   – works only when a CORS proxy is configured (VITE_PROXY_URL)
 *  🔴 BROKEN  – removed
 *
 * needsProxy: true → requires CORS proxy / backend to load in browser
 */

export const CHANNELS = [

  // ══════════════════════════════════════════════════════════
  // 🇧🇩  BANGLADESH
  // ══════════════════════════════════════════════════════════

  {
    id:       't-sports',
    name:     'T Sports HD',
    logo:     'https://i.imgur.com/2JzlorD.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['cricket','football','wc2026'],
    streams: [
      // iptv-org verified gpcdn (no token)
      { url: 'https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/1709.m3u8', needsProxy: false },
      // User-provided alternative
      { url: 'https://1nyaler.streamhostingcdn.top/stream/23/index.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'gazi-tv',
    name:     'Gazi TV',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/GTV_Logo.png/200px-GTV_Logo.png',
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['cricket','football','wc2026'],
    streams: [
      { url: 'https://bozztv.com/rongo/rongo-gazitv/index.m3u8', needsProxy: false },
      { url: 'http://tvn1.chowdhury-shaheb.com/gazitv/index.m3u8', needsProxy: true },
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
      // Official BTV National live stream only — gpcdn ID 1709 is T Sports, NOT BTV
      { url: 'https://www.btvlive.gov.bd/streams/ef8b8bbc-98b7-4ba7-a49d-a0adaf259d35/ES/355ba051-9a60-48aa-adcf-5a6c64da8c5c/355ba051-9a60-48aa-adcf-5a6c64da8c5c_3_playlist.m3u8', needsProxy: false },
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
      { url: 'https://bozztv.com/rongo/rongo-boishakhi/index.m3u8',                 needsProxy: false },
    ],
  },

  {
    id:       'rajdhani-tv',
    name:     'Rajdhani TV',
    logo:     null,
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['entertainment','news'],
    streams: [
      { url: 'https://sm-monirul.top/toffee/play/rajdhani_tv.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'bioscope-wc',
    name:     'Bioscope WC 2026',
    logo:     null,
    category: 'Bangladesh',
    country:  'BD',
    tags:     ['football','wc2026'],
    streams: [
      // Bioscope Plus WC stream (Cloudflare Worker — BD streaming platform)
      { url: 'https://streamsportixa.ajmainearafat.workers.dev/live.m3u8', needsProxy: false },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 🇵🇰  PAKISTAN
  // ══════════════════════════════════════════════════════════

  {
    id:       'ptv-sports',
    name:     'PTV Sports',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/PTV_Sports_Logo.png/200px-PTV_Sports_Logo.png',
    category: 'Pakistan',
    country:  'PK',
    tags:     ['cricket','wc2026'],
    streams: [
      { url: 'https://livestream.ptv.com.pk/ptvsports/ptvsports.m3u8', needsProxy: true },
      { url: 'http://103.250.28.74:8000/play/a019/index.m3u8',         needsProxy: true },
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
      { url: 'https://geo.mawjmedia.net/asports/smil:asports.stream.smil/chunklist.m3u8', needsProxy: false },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 🇮🇳  INDIA
  // ══════════════════════════════════════════════════════════

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

  // ══════════════════════════════════════════════════════════
  // ⚽  WORLD CUP / FOOTBALL
  // ══════════════════════════════════════════════════════════

  {
    id:       'wc-sky-stream',
    name:     'WC 2026 — Sky Sports',
    logo:     null,
    category: 'World Cup',
    country:  'GB',
    tags:     ['football','wc2026'],
    streams: [
      // CloudFront CDN — stable no-token
      { url: 'https://d1211whpimeups.cloudfront.net/smil:rtbgo/chunklist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'wc-stream-1',
    name:     'WC 2026 Live HD',
    logo:     null,
    category: 'World Cup',
    country:  'US',
    tags:     ['football','wc2026'],
    streams: [
      { url: 'https://1nyaler.streamhostingcdn.top/stream/23/index.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'bein-sports',
    name:     'beIN Sports (English)',
    logo:     'https://static.epg.best/qa/beINSports1.qa.png',
    category: 'World Cup',
    country:  'QA',
    tags:     ['football','wc2026'],
    streams: [
      // Amagi FAST CDN — stable
      { url: 'https://bein-esp-xumo.amagi.tv/playlistR1080p.m3u8',   needsProxy: false },
      { url: 'https://amg01334-beinsportsllc-beinxtraesp-localnow-aekzc.amagi.tv/playlist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'bein-sports-1080',
    name:     'beIN Sports 1080p',
    logo:     'https://static.epg.best/qa/beINSports1.qa.png',
    category: 'World Cup',
    country:  'QA',
    tags:     ['football','wc2026'],
    streams: [
      { url: 'https://andro.226503.xyz/checklist/androstreamlivebs1.m3u8', needsProxy: false },
      { url: 'https://andro.226503.xyz/checklist/androstreamlivebs2.m3u8', needsProxy: false },
      { url: 'https://andro.226503.xyz/checklist/androstreamlivebs3.m3u8', needsProxy: false },
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
      { url: 'https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/bitrate_3.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'bleav-football',
    name:     'Bleav Football',
    logo:     null,
    category: 'Football',
    country:  'US',
    tags:     ['football'],
    streams: [
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
      { url: 'https://rgelive.akamaized.net/hls/live/2043095/live3/playlist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'caze-tv',
    name:     'Cazé TV (Brazil)',
    logo:     null,
    category: 'Football',
    country:  'BR',
    tags:     ['football','wc2026'],
    streams: [
      // Amagi/CloudFront — stable, WC 2026 coverage
      { url: 'https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8',    needsProxy: false },
      { url: 'https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/1080p-vtt/index.m3u8', needsProxy: false },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // 🏏  CRICKET
  // ══════════════════════════════════════════════════════════

  {
    id:       'cricket-gold',
    name:     'Cricket Gold',
    logo:     null,
    category: 'Cricket',
    country:  'IN',
    tags:     ['cricket'],
    streams: [
      // CloudFront CDN — stable from DOCX
      { url: 'https://d1nj4u39ja4cn0.cloudfront.net/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/FLS-MuxIP-CricketGold/418.m3u8', needsProxy: false },
    ],
  },

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

  // ══════════════════════════════════════════════════════════
  // 📡  MULTI-SPORT — STABLE FAST CHANNELS
  // ══════════════════════════════════════════════════════════

  {
    id:       'nbc-sports',
    name:     'NBC Sports',
    logo:     'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/NBCSports.svg/200px-NBCSports.svg.png',
    category: 'Multi-Sport',
    country:  'US',
    tags:     ['multi','wc2026'],
    streams: [
      { url: 'https://xumo-xumoent-vc-122-sjv70.fast.nbcuni.com/live/master.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'fox-ny',
    name:     'FOX Sports (WNYW)',
    logo:     null,
    category: 'Multi-Sport',
    country:  'US',
    tags:     ['multi','wc2026'],
    streams: [
      // Amagi FAST CDN
      { url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00488-foxdigital-wnyw-lgus/playlist.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'tvri-sport',
    name:     'TVRI Sport HD (Indonesia)',
    logo:     null,
    category: 'Multi-Sport',
    country:  'ID',
    tags:     ['multi','wc2026'],
    streams: [
      // Official Indonesian state broadcaster CDN
      { url: 'https://ott-balancer.tvri.go.id/live/eds/SportHD/hls/SportHD-avc1_1500000=10003-mp4a_96000=20002.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'red-bull-tv',
    name:     'Red Bull TV',
    logo:     null,
    category: 'Multi-Sport',
    country:  'AT',
    tags:     ['motorsport','extreme'],
    streams: [
      // Akamai CDN — stable
      { url: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'dazn-combat',
    name:     'DAZN Combat',
    logo:     null,
    category: 'Multi-Sport',
    country:  'US',
    tags:     ['combat','boxing'],
    streams: [
      // Amagi FAST CDN
      { url: 'https://dazn-combat-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-dazn-combat-rakuten/CDN/master.m3u8', needsProxy: false },
    ],
  },

  {
    id:       'fight-network',
    name:     'FIGHT NETWORK',
    logo:     null,
    category: 'Multi-Sport',
    country:  'CA',
    tags:     ['combat','mma'],
    streams: [
      // Amagi playout — stable
      { url: 'https://amg00966-amg00966c10-amgplt0201.playout.now3.amagi.tv/playlist/amg00966-amg00966c10-amgplt0201/playlist.m3u8', needsProxy: false },
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

];

// ── Category tabs ────────────────────────────────────────────────
export const CATEGORIES = [
  { id: 'All',        label: '🌐 All',          emoji: '🌐' },
  { id: 'World Cup',  label: '🏆 World Cup',     emoji: '🏆' },
  { id: 'Bangladesh', label: '🇧🇩 Bangladesh',  emoji: '🇧🇩' },
  { id: 'Pakistan',   label: '🇵🇰 Pakistan',    emoji: '🇵🇰' },
  { id: 'India',      label: '🇮🇳 India',        emoji: '🇮🇳' },
  { id: 'Football',   label: '⚽ Football',      emoji: '⚽' },
  { id: 'Cricket',    label: '🏏 Cricket',       emoji: '🏏' },
  { id: 'Multi-Sport',label: '📡 Multi-Sport',   emoji: '📡' },
  { id: 'Motorsport', label: '🏎️ Motorsport',    emoji: '🏎️' },
];

// Country flag emoji helper
export function countryFlag(code) {
  if (!code || code.length !== 2) return '🌐';
  return String.fromCodePoint(
    ...code.toUpperCase().split('').map(c => 0x1F1E6 - 65 + c.charCodeAt(0))
  );
}
