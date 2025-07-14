const express = require('express');
const router = express.Router();
const Bug = require('../models/bug.js');

// Get all bugs
router.get('/', async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err); // Pass to error middleware
  }
});

// Create a bug
router.post('/', async (req, res, next) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
});

module.exports = router;