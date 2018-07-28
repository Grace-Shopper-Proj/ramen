import React, {Component} from 'react'
class IngredientForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {ingredient} = this.props
    return (
      <form
        id="ingredientForm"
        // onSubmit={props.handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="title">Ingredient</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="enter ingredient name"
            // onChange={props.handleChange}
            value={ingredient.title || ''}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Campus Description</label>
          <textarea
            name="description"
            className="form-control"
            id="description"
            // onChange={props.handleChange}
            value={ingredient.description || ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            min="0"
            name="price"
            className="form-control"
            id="price"
            // onChange={props.handleChange}
            value={ingredient.price || ''}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inventory">Inventory</label>
          <input
            type="number"
            name="inventory"
            className="form-control"
            id="inventory"
            // onChange={props.handleChange}
            value={ingredient.inventory || ''}
            required
          />
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select>
              <option value="broth">broth</option>
              <option value="noodles">noodles</option>
              <option value="toppings">toppings</option>
              <option value="protein">protein</option>
            </select>
          </div>
          {/* need to add functionality for categories/tags - a multi select or something. or checkboxes */}
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              className="form-control"
              id="image"
              placeholder="enter image Url"
              // onChange={props.handleChange}
              value={ingredient.imageUrl || ''}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {ingredient ? <span>Edit</span> : <span>Add</span>}
        </button>
      </form>
    )
  }
}

export default IngredientForm
