import React from 'react'

export default function ingredientCard(props) {
  const {ingredient} = props

  return (
    <div>
      <img src={ingredient.imageUrl} />
      {ingredient.inventory < 1 ? (
        <p>Out of Stock</p>
      ) : (
        <p>${ingredient.price}</p>
      )}
      <h4>{ingredient.title}</h4>
    </div>
  )
}
