import React from 'react'

export default function SingleSelectionForm(props) {
  const {allIngredients, restrictions, type} = props
  let restrictionInEffect = []
  for (let key in restrictions) {
    if (restrictions.hasOwnProperty(key) && restrictions[key]) {
      restrictionInEffect.push(key)
    }
  }
  const filteredIngredients = allIngredients
    .filter(ingredient => ingredient.type === type)
    .filter(ingredient => {
      for (let i = 0; i < ingredient.category.length; i++) {
        if (restrictionInEffect.find(ingredient.category[i].name) > -1) {
          return true
        }
      }
    })
  return (
    <div>
      {filteredIngredients.map(ingredient => (
        <div key={ingredient.id}>
          <span>{ingredient.name}</span>
        </div>
      ))}
    </div>
  )
}
