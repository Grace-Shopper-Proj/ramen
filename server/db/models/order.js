const Sequelize = require('sequelize')
const db = require('../db')
const {Bowl} = require('./index')

const Order = db.define('orders', {
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
    bowls.reduce((totalPrice, currentBowl) => totalPrice + currentBowl.price, 0)
  } catch (error) {
    console.log(error)
  }

  //add price
}

module.exports = Order
