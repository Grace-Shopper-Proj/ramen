const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// router.get('/', async(req, res, next) => {
//   User.findAll({
//     attributes:["id", "email", "admin"]
//   })
// })
// router.get('/:userId/allOrders', async (req, res, next) => {
//   try{
//     const allOrders = await User.findAll({
//       include:[{all: allOrders}]
//     })

//   }catch(err){
//     next(err)
//   }
// })

// router.get('guest with session')

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    if (user) res.status(201).json(user)
    else throw new Error('Fail to create new user')
  } catch (err) {
    next(err)
  }
})
