const express  = require('express');
const router   = express.Router();
const SCHEDULE = require('../data/schedule.json');

// GET /api/schedule
router.get('/', (req, res) => {
  const { stage } = req.query;
  let result = SCHEDULE;
  if (stage && stage !== 'All') {
    result = result.filter(m => m.stage === stage || m.stage.startsWith(stage));
  }
  res.json(result);
});

// GET /api/schedule/upcoming?limit=10
router.get('/upcoming', (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const now   = new Date().toISOString();
  const upcoming = SCHEDULE
    .filter(m => m.time >= now)
    .slice(0, limit);
  res.json(upcoming);
});

module.exports = router;
