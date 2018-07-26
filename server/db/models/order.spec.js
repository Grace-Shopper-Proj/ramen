const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')
const Bowl = db.model('bowl')

describe('Order model', () => {
  beforeEach(() => db.sync({force: true}))

  describe('column definitions and validations', () => {
    it('has an isCart status', async () => {
      const order1 = await Order.create({
        isCart: false
      })

      expect(order1.isCart).to.equal(false)
    })
  })

  describe('instance method: getPrice', () => {
    it('returns the right price', async () => {
      const order2 = await Order.create({
        isCart: false
      })

      const bowl1 = await Bowl.create({
        broth: 'Shio',
        noodles: 'Udon',
        protein: 'Chicken',
        toppings: ['peanut'],
        price: 3,
        orderId: order2.id
      })

      const bowl2 = await Bowl.create({
        broth: 'Shio',
        noodles: 'Udon',
        protein: 'Chicken',
        toppings: ['peanut'],
        price: 4.2,
        orderId: order2.id
      })

      const orderPrice = await order2.getPrice()

      expect(orderPrice).to.equal(7.2)
    })
  })
})
