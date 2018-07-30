import React, {Component} from 'react'

export default function singleIngredient(props) {
  const {ingredient, closePopup, selectIngredient} = props

  return (
    <div className="popup">
      <div className="popup_inner">
        <button onClick={closePopup}>close me</button>
        <h2>
          {ingredient.title} ({ingredient.type})
        </h2>
        <img src={ingredient.imageUrl} />

        <p>{ingredient.description}</p>
        {ingredient.inventory < 1 ? (
          <p>Out of Stock</p>
        ) : (
          <p>${ingredient.price}</p>
        )}
        <h4>Category</h4>
        <ul>
          {ingredient.category.map(cat => <li key={cat.id}>{cat.name}</li>)}
        </ul>
        <button onClick={selectIngredient}>choose me</button>
      </div>
    </div>
  )
}
