const express = require('express');
const router = express.Router();
const Provider = require('../models/Provider');

router.get('/', async (req, res) => {
  try {
    const providers = await Provider.find();
    res.json(providers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
