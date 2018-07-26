const router = require('express').Router()
const {Order, Bowl} = require('../db/models')

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

//create a new order
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    res.status(201).json(newOrder)
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

//delete an order

router.delete('/:id', async (req, res, next) => {
  try {
    await req.order.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
