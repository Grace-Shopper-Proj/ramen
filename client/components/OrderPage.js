import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

//Our components
import DietaryRestrictionForm from './DietaryRestrictionForm'
import SingleSelectionForm from './SingleSelectionForm'
import MultiSelectionForm from './MultiSelectionForm'
import CurrentBowl from './CurrentBowl'
//Thunks
import {getProducts} from '../store/product'
import {getRestrictions} from '../store/restrictions'

class OrderPage extends Component {
  state = {
    selectedBroth: {},
    selectedNoodles: {},
    selectedProtein: {},
    selectedToppings: [],
    selectedRestrictions: [],
    price: 0
  }

  componentDidMount() {
    this.props.getAllIngredients()
    this.props.getRestrictions()
  }

  // //submit bowl
  // submitBowl = async event => {
  //   event.preventDefault();
  //   const {
  //     selectedBroth,
  //     selectedNoodles,
  //     selectedProtein,
  //     selectedToppings
  //   } = this.state
  //   try{
  //   const responseOfBowl = await axios.post('/api/bowls', {
  //     broth: selectedBroth,
  //     noodles: selectedNoodles,
  //     protein: selectedProtein,
  //     toppings: selectedToppings,
  //   });

  //   }
  //   catch (err) {
  //     console.log("Sorry... you can't buy this bowl of ramen... please try again!")
  //   }
  // }

  //update broth, noodles, protein,toppings when add
  updateSelection = ingredient => {
    if (ingredient.type === 'broth') {
      this.setState({selectedBroth: ingredient, price: ingredient.price})
    } else if (ingredient.type === 'noodles') {
      this.setState({selectedNoodles: ingredient, price: ingredient.price})
    } else if (ingredient.type === 'protein') {
      this.setState({selectedProtein: ingredient, price: ingredient.price})
    } else {
      this.setState({
        selectedToppings: ingredient,
        price: ingredient.reduce(
          (totalPrice, eachTop) => totalPrice + eachTop,
          0
        )
      })
    }
  }

  updateRestrictions = selectedRestrictions => {
    this.setState({selectedRestrictions})
  }
  render() {
    const {allIngredients, restrictions} = this.props
    const {selectedBroth, selectedNoodles, selectedProtein} = this.state

    console.log('CHOSEN INGREDIENT', this.state)
    return (
      <form>
        <h1>Order Ramen</h1>
        <CurrentBowl currentBowl={this.state} />
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
          selectedToppings={this.state.selectedToppings}
          updateSelection={this.updateSelection}
        />
        <button
          type="submit"
          disabled={
            !selectedBroth.id && !selectedNoodles.id && !selectedProtein.id
          }
          onClick={this.handleClick}
        >
          Add To Cart
        </button>
      </form>
    )
  }
}

const mapState = state => ({
  allIngredients: state.allIngredients,
  restrictions: state.restrictions
})

const mapDispatch = dispatch => ({
  // import action creator for add to cart
  getAllIngredients: () => dispatch(getProducts()),
  getRestrictions: () => dispatch(getRestrictions())
})

export default withRouter(connect(mapState, mapDispatch)(OrderPage))
