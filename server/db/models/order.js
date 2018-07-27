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
  // promoCode: {
  //   type: Sequelize.STRING,
  //   allowNull: true
  // }
})

//method to calculate price
Order.prototype.getPrice = async function() {
  //find all bowls with this order
  try {
    // let totalValue = 0
    // let promo = 50
    // let promoCode = "(brunoLovesRamen)"
    //table get all current promocodes.

    const bowls = await Bowl.findAll({
      where: {orderId: this.id}
    })
    const price = bowls.reduce(
      (totalPrice, currentBowl) => totalPrice + Number(currentBowl.price),
      0
    )

    // if(promoCode === ""){
    //   totalValue = price - (price * (Number(Bowl.getElemebById(promoCode).value)/100))
    // }

    console.log('We should get this: ', price)
    return price
  } catch (error) {
    console.log(error)
  }

  //add price
}

module.exports = Order
