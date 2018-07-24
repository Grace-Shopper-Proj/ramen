const Sequelize = require('sequelize')
const db = require('../db')


const Product = db.define('product', {
  title:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  description:{
    type: Sequelize.TEXT
  },
  inventory:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  category:{
    type: Sequelize.ARRAY(Sequelize.STRING),
    // isIn:[['vegetarian', 'meat']]
  },
  imageUrl:{
    type: Sequelize.TEXT,
    defaultValue: 'https://images-na.ssl-images-amazon.com/images/I/71D4cSXNBEL._UX466_.jpg'
  }
})


module.exports = Product
