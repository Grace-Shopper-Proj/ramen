const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  it('has an isCart status', async () => {
    const order1 = Order.build({
      isCart: false
    })
    expect(order1.isCart).to.equal(false)
  })
})
