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

//some middleware to find the campus and send it on to the next route or handle the error if there is one
router.use('/:id', async (req, res, next) => {
  try {
    const bowl = await Bowl.find({
      where: {
        id: req.params.id
      }
    })
    //if the promise returns null because no bowls are found
    if (!bowl) {
      const error = new Error('There is no bowl with id of' + req.params.id)
      //send an error
      error.status = 404
      return next(error)
    }
    //add the bowl to the request before sending it along
    req.bowl = bowl
    next()
    //catch any other errors
  } catch (error) {
    next(error)
  }
})
