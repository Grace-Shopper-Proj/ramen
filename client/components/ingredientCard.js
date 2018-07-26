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
    console.log('We have this ingredient:', ingredient)
    updateSelection(ingredient)
  }

  render() {
    const {ingredient} = this.props
    return (
      <div>
        <img src={ingredient.imageUrl} onClick={this.togglePopup} />
        {ingredient.inventory < 1 ? (
          <p>Out of Stock</p>
        ) : (
          <p>${ingredient.price}</p>
        )}
        <h4>{ingredient.title}</h4>
        {this.state.showPopup ? (
          <SingleIngredient
            ingredient={ingredient}
            closePopup={this.togglePopup}
            selectIngredient={this.selectIngredient}
          />
        ) : null}
        <button onClick={this.selectIngredient}>choose this</button>
      </div>
    )
  }
}

export default IngredientCard
