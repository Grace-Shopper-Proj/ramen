const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.DECIMAL(10, 1),
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5
    }
  },
  content: {
    type: Sequelize.TEXT
  }
})

module.exports = Review
