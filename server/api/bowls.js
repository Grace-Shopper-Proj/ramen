const router = require('express').Router()
const {Bowl, Ingredient, Order} = require('../db/models')

module.exports = router

//create a new bowl
router.post('/', async (req, res, next) => {
  try {
    //create an empty bowl in the database
    let newBowl = await Bowl.create()
    //associate the ingredients sent on req.body to the new bowl
    await newBowl.addIngredients(req.body)
    //call the set price bowl instance method on the new bowl
    newBowl = await newBowl.setPrice()
    //associate bowl with an order
    let cart
    //check whether the user exists req.user
    if (req.user) {
      //if the user does exist find or create an order

      let currentUserId = req.user.id
      let cartArray = await Order.findOrCreate({
        where: {
          userId: currentUserId,
          isCart: true
        }
      })
      cart = cartArray[0]
    }

    //if the user does not exist find the session
    //find or create an order for the session

    //add the bowl to this order
    newBowl.setOrder(cart)
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
