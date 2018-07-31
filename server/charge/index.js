const router = require('express').Router()
const stripe = require('stripe')('sk_test_TwTTlid3GeOG6YPydOjARw4I')

const Order = require('../db/models/order')

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.findById(req.body.orderId)
    const amount = await order.getPrice()
    let {status} = await stripe.charges.create({
      amount: amount * 100,
      currency: 'usd',
      description: 'An example charge',
      source: req.body.tokenId
    })
    if (status === 'succeeded') await order.update({isCart: false})
    res.json({status})
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})
