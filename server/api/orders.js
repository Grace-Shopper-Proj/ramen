const router = require('express').Router()
const {Order, Bowl, User, Ingredient} = require('../db/models')
const authorize = require('./authorize')

module.exports = router

//gets all orders -- not sure if we need this route
router.get('/', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      include: [
        {
          model: Bowl
        }
      ]
    })
    res.json(allOrders)
  } catch (error) {
    next(error)
  }
})

// GET cart by userId
router.get('/:userId/cart', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        isCart: true,
        userId: req.params.userId
      },
      include: [
        {
          model: Bowl,
          include: [Ingredient]
        }
      ]
    })
    if (cart) {
      res.json(cart)
    } else {
      const newCart = await Order.create({isCart: true})
      const user = await User.findOne({
        where: {
          id: req.params.userId
        }
      })
      await user.setOrder(newCart)
      res.status(201).json(newCart)
    }
  } catch (error) {
    next(error)
  }
})

// Get cart by Session ID
router.get('/guest/cart', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        sessionId: req.session.id
      },
      include: [
        {
          model: Bowl
        }
      ]
    })

    res.json(cart)
  } catch (error) {
    next(error)
  }
})

// GET past orders by userId
router.get('/:userId/past', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        isCart: false,
        userId: +req.params.userId
      },
      include: [
        {
          model: Bowl,
          include: [Ingredient]
        }
      ]
    })
    res.json(orders)
  } catch (error) {
    next(error)
  }
})

// GET orders by status (creating vs ready)
router.get('/status/:status', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        status: req.params.status,
        isCart: false
      },
      include: [
        {
          model: Bowl,
          include: [Ingredient]
        }
      ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

//some middleware to find the order and send it on to the next route or handle the error if there is one
router.use('/:id', async (req, res, next) => {
  try {
    const order = await Order.find({
      where: {
        id: req.params.id
      }
    })
    //if the promise returns null because no orders are found
    if (!order) {
      const error = new Error('There is no order with id of ' + req.params.id)
      //send an error
      error.status = 404
      return next(error)
    }
    //add the order to the request before sending it along
    req.order = order
    next()
    //catch any other errors
  } catch (error) {
    next(error)
  }
})

// change an order's status to 'ready'
router.put('/:id', async (req, res, next) => {
  try {
    const order = await req.order.update({status: 'ready'})
    res.status(202).json(order)
  } catch (err) {
    console.log(err)
  }
})

//delete an order

router.delete('/:id', async (req, res, next) => {
  try {
    await req.order.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
