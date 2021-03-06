const router = require('express').Router()
const {Ingredient, Category} = require('../db/models')
const authorize = require('./authorize')

//Get all
router.get('/', async (req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
          through: {attributes: []}
        }
      ]
    })
    res.json(ingredients)
  } catch (err) {
    next(err)
  }
})

router.post('/', authorize, async (req, res, next) => {
  try {
    let ingredient = await Ingredient.create(req.body)
    res.json(ingredient)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', authorize, async (req, res, next) => {
  try {
    let ingredient = await Ingredient.findById(req.params.id)
    ingredient = await ingredient.update(req.body)
    res.json(ingredient)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', authorize, async (req, res, next) => {
  try {
    let ingredient = await Ingredient.findById(req.params.id)
    ingredient = await ingredient.destroy()
    res.json(ingredient)
  } catch (err) {
    next(err)
  }
})

module.exports = router
