const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// How we actually GET with user will depend on how we implement login
// But for now lets just do this
router.get('/:username', async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.params.username})
    if (user) res.json(user)
    else res.sendStatus(404)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    if (user) res.status(201).json(user)
    else throw new Error('Fail to create new user')
  } catch (err) {
    next(err)
  }
})

// How we actually DELETE with user will depend on how we implement login
// But for now lets just do this
router.delete('/:username', async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.params.username})
    if (user) {
      await user.destroy()
      res.sendStatus(204)
    } else res.sendStatus(404)
  } catch (err) {
    next(err)
  }
})
