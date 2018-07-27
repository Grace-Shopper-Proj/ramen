const Sequelize = require('sequelize')
const db = require('../db')
const Ingredient = require('./ingredient')

const Bowl = db.define('bowl', {
  price: {
    type: Sequelize.DECIMAL(10, 2)
  }
})

Bowl.prototype.setPrice = async function() {
  //find all ingredients with this bowl
  try {
    const ingredientList = await this.getIngredient()
    console.log('ingredient list', ingredientList)
    const price = ingredientList.reduce(
      (totalPrice, currentIngredient) =>
        totalPrice + Number(currentIngredient.price),
      0
    )
    console.log('We should get this: ', price)
    this.price = price
  } catch (error) {
    console.log(error)
  }
}

module.exports = Bowl
