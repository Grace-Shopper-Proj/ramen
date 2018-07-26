import React from 'react'
import IngredientCard from './ingredientCard'

export default function SingleSelectionForm(props) {
  const {type, allIngredients, selectedRestrictions, updateSelection} = props
  // const handleIngredientChange = event => {
  //   // Identify the selected ingredient object
  //   console.log('target.value is', event.target.value)
  //   const selectedIngredient = allIngredients.find(
  //     ingredient => ingredient.id === +event.target.name
  //   )
  //   updateSelection(selectedIngredient)
  // }

  let filteredIngredients = allIngredients.filter(
    ingredient => ingredient.type === type
  )
  if (selectedRestrictions.length > 0) {
    filteredIngredients = filteredIngredients.filter(ingredient => {
      for (let i = 0; i < selectedRestrictions.length; i++) {
        let match = ingredient.category.find(
          elem => elem.name === selectedRestrictions[i].name
        )
        if (!match) break
        if (i === selectedRestrictions.length - 1) {
          return true
        }
      }
      return false
    })
  }

  return (
    <div>
      {filteredIngredients.map(ingredient => (
        <IngredientCard
          key={ingredient.id}
          ingredient={ingredient}
          updateSelection={updateSelection}
        />
      ))}
    </div>
  )
}
