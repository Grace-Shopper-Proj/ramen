const User = require('./user')
const Ingredient = require('./ingredient')
const Category = require('./category')
const Bowl = require('./bowl')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

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

module.exports = {
  User,
  Ingredient,
  Category,
  Bowl
}
