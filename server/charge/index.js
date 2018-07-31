const router = require('express').Router()
const stripe = require('stripe')('sk_test_TwTTlid3GeOG6YPydOjARw4I')

const Order = require('../db/models/order')
const Bowl = require('../db/models/bowl')
const Ingredient = require('../db/models/ingredient')

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.body.orderId
      },
      include: [
        {
          model: Bowl,
          include: [Ingredient]
        }
      ]
    })
    const amount = await order.getPrice()
    let {status} = await stripe.charges.create({
      amount: amount * 100,
      currency: 'usd',
      description: 'An example charge',
      source: req.body.tokenId
    })
    if (status === 'succeeded') {
      await order.update({isCart: false})
      const {bowls} = order
      bowls.forEach(bowl => {
        let {ingredients} = bowl
        ingredients.forEach(async ingredient => {
          await ingredient.decreaseOne()
        })
      })
    }
    res.json({status})
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})
