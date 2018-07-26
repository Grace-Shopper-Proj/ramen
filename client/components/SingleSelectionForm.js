import React from 'react'

export default function SingleSelectionForm(props) {
  const {type, allIngredients, selectedRestrictions, updateSelection} = props
  const handleIngredientChange = event => {
    // Identify the selected ingredient object
    const selectedIngredient = allIngredients.find(
      ingredient => ingredient.id === +event.target.name
    )
    updateSelection(selectedIngredient)
  }
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
        <div
          key={ingredient.id}
          name={ingredient.id}
          onClick={handleIngredientChange}
        >
          <h3>{ingredient.title}</h3>
        </div>
      ))}
    </div>
  )
}
