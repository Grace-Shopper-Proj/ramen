import React, {Component} from 'react'
import SingleIngredient from './singleIngredient'
class IngredientCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false
    }
    this.togglePopup = this.togglePopup.bind(this)
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
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
          />
        ) : null}
      </div>
    )
  }
}

export default IngredientCard
