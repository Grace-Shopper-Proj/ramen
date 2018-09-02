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
          <div className="col-md">
            <img src={ingredient.imageUrl} />
          </div>
          <div className="col-md">
            <h3>
              {ingredient.title} ({ingredient.type})
            </h3>

            <p>{ingredient.description}</p>
            {ingredient.inventory < 1 ? (
              <p>Out of Stock</p>
            ) : (
              <p>${ingredient.price}</p>
            )}
            <p>
              <strong>Categories: </strong>
              {ingredient.category.map(cat => (
                <span key={cat.id}>{cat.name}, </span>
              ))}
            </p>
            <button
              className="btn btn-danger btn-block"
              onClick={selectIngredient}
            >
              ADD TO BOWL{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
