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
      <div className="col-sm-6 col-md-3 ingredient-card ml-0">
        <div className="card">
          <img
            className="card-img-top"
            src={ingredient.imageUrl}
            onClick={this.togglePopup}
          />

          <div className="row card-body">
            <h5 className="col">{ingredient.title}</h5>
            {ingredient.inventory < 1 ? (
              <h5 className="col">Out of Stock</h5>
            ) : (
              <h5 className="col">${ingredient.price}</h5>
            )}{' '}
            <button type="button" className="btn" id="infoButton">
              info
            </button>
          </div>
          {this.state.showPopup ? (
            <SingleIngredient
              ingredient={ingredient}
              closePopup={this.togglePopup}
              selectIngredient={this.selectIngredient}
            />
          ) : null}
          <button className="btn" onClick={this.selectIngredient}>
            CHOOSE
          </button>
        </div>
      </div>
    )
  }
}

export default IngredientCard
