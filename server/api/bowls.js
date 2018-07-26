const router = require('express').Router()
const {Bowl} = require('../db/models')

//gets all bowls -- not sure if we need this route
router.get('/', async (req, res, next) => {
  try {
    const allBowls = await Bowl.findAll()
    res.json(allBowls)
  } catch (error) {
    next(error)
  }
})

//create a new bowl
router.post('/', async (req, res, next) => {
  try {
    const newBowl = await Bowl.create(req.body)
    res.status(201).json(newBowl)
  } catch (err) {
    next(err)
  }
})
