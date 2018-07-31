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

// GET cart
router.get('/cart', async (req, res, next) => {
  try {
    // Always grab the cart associated with the session first
    const cart = await Order.findOne({
      where: {
        sessionId: req.session.guestUserId,
        isCart: true
      },
      include: [
        {
          model: Bowl,
          include: [Ingredient]
        }
      ]
    })
    if (req.user) {
      // If the client is logged in
      // Grab the user
      const user = await User.findOne({
        where: {
          id: req.user.id
        }
      })
      // Check to see if the user already has a cart
      const usrCart = await Order.findOne({
        where: {
          isCart: true,
          userId: req.user.id
        },
        include: [
          {
            model: Bowl,
            include: [Ingredient]
          }
        ]
      })
      if (usrCart) {
        // if there is an old cart...
        // Check if there is a session cart.
        // If so, keep the newer cart
        if (cart && cart.updatedAt > usrCart.updatedAt) {
          await user.addOrder(cart)
          await usrCart.destroy()
          res.json(cart)
        } else {
          // otherwise keep and use the old cart
          res.json(usrCart)
        }
      } else {
        // if there is no old cart...
        if (cart) {
          // and if there IS a session cart...
          await user.addOrder(cart)
          console.log(cart)
          res.json(cart)
        } else {
          const newCart = await Order.create({isCart: true})
          await user.addOrder(newCart)
          res.status(201).json(newCart)
        }
      }
    } else {
      // if user is not logged in
      // just return the session cart
      if (cart) res.json(cart)
      else res.json({})
    }
  } catch (err) {
    next(err)
  }
})

// GET past orders by userId
router.get('/past', async (req, res, next) => {
  if (!req.user) res.sendStatus(404)
  try {
    const orders = await Order.findAll({
      where: {
        isCart: false,
        userId: req.user.id
      },
      include: [
        {
          model: Bowl,
          include: [Ingredient]
        }
      ]
    })

    // This does not work:
    //
    // let promises = orders.map(order => order.getPrice())
    // let prices = await Promise.all(promises)

    // orders.forEach((order, i) => {
    //   order.price = prices[i]
    // })

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
