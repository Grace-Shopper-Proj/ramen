import React, {Component} from 'react'

export default function singleIngredient(props) {
  const {ingredient, closePopup, selectIngredient} = props

  return (
    // <div className="popup">
    //   <div className="popup_inner">
    //     <button onClick={closePopup}>close me</button>
    <div
      className="modal fade"
      id={`modal${ingredient.id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={selectIngredient}
            >
              CHOOSE
            </button>
          </div>
        </div>
      </div>
    </div>

    //   </div>
    // </div>
  )
}
