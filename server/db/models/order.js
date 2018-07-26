const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('orders', {
  //true if order is still in progress (it is still a cart.) False if order is complete
  isCart: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  //this is the total price - each bowl added up. It will be calculated before validate
  totalPrice: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0
    }
  }
})

module.exports = Order
