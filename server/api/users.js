// import {truncateSync} from 'fs'

const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'admin']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId/allOrders', async (req, res, next) => {
  try {
    const allOrders = await User.findAll({
      include: [{all: true}]
    })
    res.json(allOrders)
  } catch (err) {
    next(err)
  }
})

// router.get(':userId/currentOrder', async (req, res, next) => {
//   try{

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
