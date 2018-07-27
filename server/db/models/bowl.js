const Sequelize = require('sequelize')
const db = require('../db')
const ingredient = require('./ingredient')

const Bowl = db.define('bowl', {
  price: {
    type: Sequelize.DECIMAL(10, 2)
  }
})

Bowl.beforeValidate(async bowlInstance => {
  try {
    const ingredients = await ingredient.findAll({
      where: {bowlId: bowlInstance.id}
    })
    const price = ingredients.reduce(
      (totalPrice, currentIngredient) =>
        totalPrice + Number(currentIngredient.price),
      0
    )
    bowlInstance.price = price
  } catch (error) {
    console.log(error)
  }
})

module.exports = Bowl
