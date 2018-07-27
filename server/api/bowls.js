const router = require('express').Router()
const {Bowl, Ingredient} = require('../db/models')

module.exports = router

//create a new bowl
router.post('/', async (req, res, next) => {
  try {
    const newBowl = await Bowl.create()
    req.body.forEach(async ingredientId => {
      const currentIngredient = await Ingredient.findById(ingredientId)
      await newBowl.addIngredient(currentIngredient)
    })
    await newBowl.setPrice()
    console.log('new bowl price', newBowl.price)
    res.status(201).json(newBowl)
  } catch (err) {
    next(err)
  }
})

//some middleware to find the bowl and send it on to the next route or handle the error if there is one
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

//get a bowl
router.get('/:id', async (req, res, next) => {
  res.json(req.bowl)
})

//update a bowl
router.put('/:id', async (req, res, next) => {
  try {
    const updatedBowl = await req.bowl.update(req.body)
    res.json(updatedBowl)
  } catch (error) {
    next(error)
  }
})

//delete a bowl

router.delete('/:id', async (req, res, next) => {
  try {
    await req.bowl.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
