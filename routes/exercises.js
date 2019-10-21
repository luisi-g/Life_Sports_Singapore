
/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require('express').Router();
let Exercise = require('../models/exercise.model');
const ObjectId = require('mongodb').ObjectId;

// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all exercise logs on record
// GET: /
// ========================================
router.get('/', (req, res) => {
    Exercise.find({})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.send(err))
})

// 2. add a new exercise log
// POST: /add
// ========================================
router.post('/add', ({ body }, res) => {
    Exercise.create(body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.send(err))
})

// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
router.get('/:id', (req, res) => {
    Exercise.findOne(
        { _id: ObjectId(req.params.id) }, (error, data) => {
            if (error) res.send(error);
            else res.send(data);
        }
    );
})

// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete("/:id", (req, res) => {
    Exercise.deleteOne({ _id: req.params.id })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.send(err))
});


// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
router.post("/update/:id", (req, res) => {
    Exercise.updateOne({ _id: req.params.id},
        {
            $set: {
                username: req.body.username,
                description: req.body.description,
                duration: req.body.duration,
                date: Date.now()
            }
        }        
    )
    .then(dbUser => res.json(dbUser))
    .catch(err => res.send(err))
});



module.exports = router;