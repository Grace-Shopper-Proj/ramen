const router = require('express').Router()
const {Bowl, Order} = require('../db/models')

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
    let cartArray
    //check whether the user exists req.user
    if (req.user) {
      //if the user does exist find or create an order
      let currentUserId = req.user.id
      cartArray = await Order.findOrCreate({
        where: {
          userId: currentUserId,
          isCart: true
        }
      })
    } else {
      //if session does not yet have a guestUserId
      if (!req.session.guestUserId) {
        //add a guestUserId to the session
        req.session.guestUserId = req.sessionID
      }

      cartArray = await Order.findOrCreate({
        where: {
          sessionId: req.session.guestUserId
        }
      })
    }

    //find or create returns an array, the first element of which is the instance we need
    let cart = cartArray[0]
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
router.get('/:id', (req, res, next) => {
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
