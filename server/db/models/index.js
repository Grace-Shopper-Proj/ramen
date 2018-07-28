const User = require('./user')
const Ingredient = require('./ingredient')
const Category = require('./category')
const Bowl = require('./bowl')
const Order = require('./order')

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

//user has many orders
Order.belongsTo(User)
User.hasMany(Order)

//create association between bowls and orders. Each bowl belongs to only one order
Bowl.belongsTo(Order)
Order.hasMany(Bowl)

module.exports = {
  User,
  Ingredient,
  Category,
  Bowl,
  Order
}
