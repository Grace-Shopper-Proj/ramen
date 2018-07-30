const router = require('express').Router()
const stripe = require('stripe')('sk_test_TwTTlid3GeOG6YPydOjARw4I')

const Order = require('../db/models/order')

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.findById(req.body.orderId)
    let {status} = await stripe.charges.create({
      amount: order.getPrice(),
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })
    await order.update({inCart: false})
    res.json({status})
  } catch (err) {
    res.status(500).end()
  }
})
