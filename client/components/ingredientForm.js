import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import putProduct from '../store/product'
class IngredientForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      price: 0,
      inventory: 0,
      imageUrl: '',
      type: '',
      id: '',
      edited: false
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.ingredient.title,
      description: this.props.ingredient.description,
      price: this.props.ingredient.price,
      inventory: this.props.ingredient.inventory,
      imageUrl: this.props.ingredient.imageUrl,
      type: this.props.ingredient.type,
      id: this.props.ingredient.id
    })
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = async event => {
    event.preventDefault()
    await axios.put(`api/ingredients/${this.state.id}`, this.state)
    this.setState({edited: 'true'})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Ingredient</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="enter ingredient name"
            onChange={this.handleChange}
            value={this.state.title || ''}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.description || ''}
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
            onChange={this.handleChange}
            value={this.state.price || ''}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="inventory">Inventory</label>
          <input
            type="number"
            name="inventory"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.inventory || ''}
            required
          />
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select name="type" value={this.state.type}>
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
              placeholder="enter image Url"
              onChange={this.handleChange}
              value={this.state.imageUrl || ''}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {this.state.title ? <span>Update</span> : <span>Add</span>}
        </button>
        {this.state.edited ? <span>Updated!</span> : null}
      </form>
    )
  }
}

export default IngredientForm
