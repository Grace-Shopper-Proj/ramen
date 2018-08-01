import React, {Component} from 'react'

export default function singleIngredient(props) {
  const {ingredient, closePopup, selectIngredient} = props

  return (
    <div className="popup">
      <div className="popup_inner">
        <button
          onClick={closePopup}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="row">
          <div className="col">
            <img src={ingredient.imageUrl} />
          </div>
          <div className="col">
            <h3>
              {ingredient.title} ({ingredient.type})
            </h3>

            <p>{ingredient.description}</p>
            {ingredient.inventory < 1 ? (
              <p>Out of Stock</p>
            ) : (
              <p>${ingredient.price}</p>
            )}
            <h4>Categories</h4>
            <ul>
              {ingredient.category.map(cat => <li key={cat.id}>{cat.name}</li>)}
            </ul>
          </div>
        </div>
        <button className="btn" onClick={selectIngredient}>
          choose me
        </button>
      </div>
    </div>
  )
}
