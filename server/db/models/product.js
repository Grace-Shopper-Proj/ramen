const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
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
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    validate: {
      isFoodPreference(array) {
        array.forEach(foodPreference => {
          if (
            ['meat', 'nuts', 'dairy', 'gluten', 'fish', 'soy'].indexOf(
              foodPreference
            ) === -1
          ) {
            throw new Error('no food preference selected')
          }
        })
      }
    }
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

module.exports = Product
