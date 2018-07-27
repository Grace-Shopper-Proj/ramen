const Sequelize = require('sequelize')
const db = require('../db')

const Bowl = db.define('bowl', {
  price: {
    type: Sequelize.DECIMAL(10, 2)
  }
})

Bowl.prototype.setPrice = async function() {
  //find all ingredients with this bowl
  try {
    const ingredientList = await this.getIngredients()

    const price = ingredientList.reduce(
      (totalPrice, currentIngredient) =>
        totalPrice + Number(currentIngredient.price),
      0
    )
    console.log('We should get this price: ', price)
    const updatedBowl = await this.update({price})
    return updatedBowl
  } catch (error) {
    console.log(error)
  }
}

module.exports = Bowl
