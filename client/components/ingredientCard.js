import React, {Component} from 'react'
import SingleIngredient from './singleIngredient'
class IngredientCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false
    }
    this.togglePopup = this.togglePopup.bind(this)
    this.selectIngredient = this.selectIngredient.bind(this)
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  selectIngredient(event) {
    event.preventDefault()
    const {ingredient, updateSelection} = this.props
    updateSelection(ingredient)
  }

  render() {
    const {ingredient} = this.props
    return (
      <div className="col-sm-6 col-md-4 ingredient-card ml-0 mr-0">
        <div className="card">
          <h2 className="add" onClick={this.selectIngredient}>
            <i className="fas fa-plus-circle" />
            <br /> Add
          </h2>
          <div
            className="overlay ml-0 mr-0 mb-0 mt-0"
            onClick={this.selectIngredient}
          />
          <img className="card-img-top" src={ingredient.imageUrl} />

          <div className="row card-body">
            <h5 className="col">{ingredient.title}</h5>
            {ingredient.inventory < 1 ? (
              <h5 className="col">Out of Stock</h5>
            ) : (
              <h5 className="col">${ingredient.price}</h5>
            )}{' '}
            <i
              className="fas fa-info-circle info-button"
              onClick={this.togglePopup}
            />
          </div>
          {this.state.showPopup ? (
            <SingleIngredient
              ingredient={ingredient}
              closePopup={this.togglePopup}
              selectIngredient={this.selectIngredient}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default IngredientCard
