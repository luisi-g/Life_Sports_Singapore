//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');
// const mongoose = require('mongoose')
// const db = mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true }, () => console.log('connected!')

// );

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. get all users on record
// GET: /
// ========================================
router.get('/', async (req, res) => {
  try {
    const posts = await User.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });

  }
});

// 2. add a new user
// POST /add
// ========================================
router.post('/add', async (req, res) => {
  const user = new User({
    username: req.body.username
  });
  try {
    const createdUser = await user.save();
    res.json(createdUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;