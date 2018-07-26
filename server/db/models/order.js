const Sequelize = require('sequelize')
const db = require('../db')
const Bowl = require('./bowl')

const Order = db.define('order', {
  //true if order is still in progress (it is still a cart.) False if order is complete
  isCart: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

//method to calculate price
Order.prototype.getPrice = async function() {
  //find all bowls with this order
  try {
    const bowls = await Bowl.findAll({
      where: {orderId: this.id}
    })
    const price = bowls.reduce(
      (totalPrice, currentBowl) => totalPrice + Number(currentBowl.price),
      0
    )
    console.log('We should get this: ', price)
    return price
  } catch (error) {
    console.log(error)
  }

  //add price
}

module.exports = Order
