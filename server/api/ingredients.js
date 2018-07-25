const router = require('express').Router()
const {Ingredient, Category} = require('../db/models')

//Get all
router.get('/', async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({
      include: [
        {
          model: Category,
          as: 'category'
        }
      ]
    })
    res.json(ingredients)
  } catch (err) {
    next(err)
  }
})

router.get('/category', async (req, res, next) => {
  try {
    const category = await Category.findAll()
    res.json(category)
  } catch (err) {
    next(err)
  }
})

module.exports = router
