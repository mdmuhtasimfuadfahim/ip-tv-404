const express = require('express');
const router  = express.Router();
const health  = require('../utils/healthCheck');

// Import channel data (same data as frontend — single source of truth)
// In production you'd store this in DB; for now, import the JS module.
// We use a lightweight require here since it's plain data.
const CHANNELS_DATA = require('../data/channels.json');

// GET /api/channels
router.get('/', (req, res) => {
  const { category, search } = req.query;
  let result = CHANNELS_DATA;
  if (category && category !== 'All') {
    result = result.filter(c => c.category === category);
  }
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(c => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q));
  }
  // Attach health status
  result = result.map(c => ({
    ...c,
    health: health.getHealth(c.id),
  }));
  res.json(result);
});

// GET /api/channels/:id
router.get('/:id', (req, res) => {
  const ch = CHANNELS_DATA.find(c => c.id === req.params.id);
  if (!ch) return res.status(404).json({ error: 'Not found' });
  res.json({ ...ch, health: health.getHealth(ch.id) });
});

// GET /api/channels/health/all
router.get('/health/all', (_req, res) => {
  res.json(health.getAllHealth());
});

module.exports = router;
