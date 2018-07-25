import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DietaryRestrictionForm from './DietaryRestrictionForm'
import SingleSelectionForm from './SingleSelectionForm'
import MultiSelectionForm from './MultiSelectionForm'

class OrderPage extends Component {
  state = {
    selectedBroth: {},
    selectedNoodles: {},
    selectedProtein: {},
    selectedToppings: [],
    selectedRestrictions: []
  }
  handleClick = event => {
    // Implement button behavior later when we implement cart
    event.preventDefault()
  }
  updateSelection = ingredient => {
    if (ingredient.type === 'broth') {
      this.setState({selectedBroth: ingredient})
    } else if (ingredient.type === 'noodles') {
      this.setState({selectedNoodles: ingredient})
    } else if (ingredient.type === 'protein') {
      this.setState({selectedProtein: ingredient})
    } else {
      this.setState({selectedToppings: ingredient})
    }
  }
  updateRestrictions = selectedRestrictions => {
    this.setState({selectedRestrictions})
  }
  render() {
    const {allIngredients, restrictions} = this.props
    return (
      <div>
        <h1>Order Ramen</h1>
        <h2>Dietary Restriction</h2>
        <DietaryRestrictionForm
          restrictions={restrictions}
          selectedRestrictions={this.state.selectedRestrictions}
          updateRestrictions={this.updateRestrictions}
        />
        <h2>Select broth</h2>
        <SingleSelectionForm
          type="broth"
          allIngredients={allIngredients}
          selectedRestrictions={this.state.selectedRestrictions}
          updateSelection={this.updateSelection}
        />
        <h2>Select noodles</h2>
        <SingleSelectionForm
          type="noodles"
          allIngredients={allIngredients}
          selectedRestrictions={this.state.selectedRestrictions}
          updateSelection={this.updateSelection}
        />
        <h2>Select protein</h2>
        <SingleSelectionForm
          type="protein"
          allIngredients={allIngredients}
          selectedRestrictions={this.state.selectedRestrictions}
          updateSelection={this.updateSelection}
        />
        <h2>Select toppings</h2>
        <MultiSelectionForm
          allIngredients={allIngredients}
          selectedRestrictions={this.state.selectedRestrictions}
          updateSelection={this.updateSelection}
        />
        <button type="submit" onClick={this.handleClick}>
          Add To Cart
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  allIngredients: state.allIngredients,
  restrictions: state.restrictions
})

const mapDispatch = dispatch => ({
  // import action creator for add to cart
  getAllIngredients: () => dispatch(getAllIngredients()),
  getRestrictions: () => dispatch(getRestrictions())
})

export default withRouter(connect(mapState, mapDispatch)(OrderPage))
