const express = require('express');
const router = express.Router();

router.use('/api/login', (req, res) => {
  res.status(401).json({ error: 'Unauthorized' });
});

module.exports = router;