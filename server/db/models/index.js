const User = require('./user')
const Ingredient = require('./ingredient')
const Category = require('./category')
const Bowl = require('./bowl')
const Order = require('./order')
const Session = require('./session')

Ingredient.belongsToMany(Category, {
  through: 'ingredient_category',
  as: 'category',
  foreignKey: 'ingredientId'
})
Category.belongsToMany(Ingredient, {
  through: 'ingredient_category',
  as: 'ingredient',
  foreignKey: 'categoryId'
})

Bowl.belongsToMany(Ingredient, {
  through: 'bowl_ingredients'
})

Ingredient.belongsToMany(Bowl, {
  through: 'bowl_ingredients'
})

//association between bowl and sessions
Session.hasMany(Bowl)
Bowl.belongsTo(Session)

//create association between bowls and orders. Each bowl belongs to only one order
Bowl.belongsTo(Order)
Order.hasMany(Bowl)

//add association between order and user here

module.exports = {
  User,
  Ingredient,
  Category,
  Bowl,
  Order,
  Session
}
