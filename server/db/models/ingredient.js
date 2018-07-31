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
    validate: {notEmpty: true},
    defaultValue:
      'https://images-na.ssl-images-amazon.com/images/I/71D4cSXNBEL._UX466_.jpg'
  }
})

//decrease one from inventory
Ingredient.prototype.decreaseOne = async function() {
  try {
    const newInventory = this.inventory - 1
    const updatedIngredient = await this.update({inventory: newInventory})
    console.log('What is this', updatedIngredient)
    return updatedIngredient
  } catch (error) {
    console.log(error)
  }
}

//check if there's any more of this ingredient
Ingredient.prototype.hasAny = function() {
  return this.inventory > 0
}

// //if imageUrl is an empty string add default image
// Ingredient.beforeValidate(ingredientInstance => {
//   if (!ingredientInstance.imageUrl) {
//     ingredientInstance.imageUrl =
//       'https://images-na.ssl-images-amazon.com/images/I/71D4cSXNBEL._UX466_.jpg'
//   }
// })

module.exports = Ingredient
