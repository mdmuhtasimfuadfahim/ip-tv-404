/**
 * Stream health checker.
 * Polls each channel's primary stream URL every INTERVAL ms.
 * Updates an in-memory health map — routes and the frontend can query it.
 */

const { fetch } = require('undici');

const INTERVAL   = 5 * 60 * 1000; // 5 minutes
const TIMEOUT_MS = 8000;

// health map: channelId → { ok: bool, checkedAt: ISO, latencyMs: number, activeIndex: number }
const healthMap = new Map();

let channels = [];   // set by init()

async function checkStream(url) {
  const start = Date.now();
  try {
    const ctrl = new AbortController();
    const tid  = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    const res  = await fetch(url, {
      signal: ctrl.signal,
      method: 'GET',
      headers: { 'User-Agent': 'Mozilla/5.0 HLS-HealthChecker/1.0' },
      redirect: 'follow',
    });
    clearTimeout(tid);
    return { ok: res.ok || res.status === 206, latencyMs: Date.now() - start };
  } catch {
    return { ok: false, latencyMs: Date.now() - start };
  }
}

async function checkChannel(ch) {
  const streams = ch.streams || [];
  for (let i = 0; i < streams.length; i++) {
    const { ok, latencyMs } = await checkStream(streams[i].url);
    if (ok) {
      healthMap.set(ch.id, { ok: true, checkedAt: new Date().toISOString(), latencyMs, activeIndex: i });
      return;
    }
  }
  healthMap.set(ch.id, { ok: false, checkedAt: new Date().toISOString(), latencyMs: 0, activeIndex: -1 });
}

async function runCheck() {
  console.log(`[health] Checking ${channels.length} channels…`);
  // Stagger checks to avoid burst
  for (const ch of channels) {
    await checkChannel(ch);
    await new Promise(r => setTimeout(r, 200));
  }
  const ok  = [...healthMap.values()].filter(v => v.ok).length;
  const bad = [...healthMap.values()].filter(v => !v.ok).length;
  console.log(`[health] Done — ✅ ${ok} up, ❌ ${bad} down`);
}

function init(channelList) {
  channels = channelList;
  runCheck();
  setInterval(runCheck, INTERVAL);
}

function getHealth(channelId) {
  return healthMap.get(channelId) ?? null;
}

function getAllHealth() {
  return Object.fromEntries(healthMap);
}

module.exports = { init, getHealth, getAllHealth };
