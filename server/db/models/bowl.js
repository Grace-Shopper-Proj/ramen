const Sequelize = require('sequelize')
const db = require('../db')

const Bowl = db.define('bowl', {
  broth: {
    type: Sequelize.STRING,
    allowNull: false
  },
  noodles: {
    type: Sequelize.STRING,
    allowNull: false
  },
  protein: {
    type: Sequelize.STRING,
    allowNull: false
  },
  toppings: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
})

module.exports = Bowl
