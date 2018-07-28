const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  content: {
    type: Sequelize.TEXT
  }
})

module.exports = Review
