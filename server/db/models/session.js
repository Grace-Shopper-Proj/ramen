const Sequelize = require('sequelize')
const db = require('../db')

const Session = db.define('session', {
  timestamp: {
    type: Sequelize.INTEGER
  }
})

module.exports = Session
