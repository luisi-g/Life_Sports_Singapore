
/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all exercise logs on record
// GET: /
// ========================================
router.get("/", async (req, res) => {
  try {
    const createdExcercise = await Exercise.find();
    res.json(createdExcercise)
  } catch (err) {
    res.json({ message: err });
  }
})

// 2. add a new exercise log
// POST: /add
// ========================================
router.post('/add', async (req, res) => {
  try {
    console.log(req.body)
    const excercise = new Exercise(req.body);
    const createdExcercise = excercise.save();
    res.json(createdExcercise);
  } catch (err) {
    res.json({ message: err });
  }
});

// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
router.get('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.findById({ _id: req.params.id })
    res.json(exercise);
  }
  catch (err) {
    res.json({ message: err });
  }
})


// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.remove({ _id: req.params.id })
    res.json(exercise);
  }
  catch (err) {
    res.json({ message: err });
  }
})


// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
// app.post('/update/:id', (req, res))
router.post('/update/:id', async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    exercise.set(req.body);
    const result = await exercise.save();
    res.send(result);
  } catch (err) {
    res.json({ message: err })
  }
});
module.exports = router;