const Sequelize = require('sequelize')
const db = require('../db')

const Ingredient = db.define('ingredient', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  type: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['broth', 'noodles', 'toppings', 'protein']]
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://images-na.ssl-images-amazon.com/images/I/71D4cSXNBEL._UX466_.jpg'
  }
})

module.exports = Ingredient
