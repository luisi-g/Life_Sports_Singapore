
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================
router.get('/', (req, res) => {
    User.find({})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.send(err))
})

// 2. add a new user
// POST /add
// ========================================
router.post('/add', ({ body }, res) => {
    User.create(body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.send(err))
})


module.exports = router;