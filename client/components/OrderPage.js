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
    selectedRestrictions: []
  }

  componentDidMount() {
    this.props.getAllIngredients()
    this.props.getRestrictions()
  }

  //submit bowl
  submitBowl = async event => {
    event.preventDefault()
    const {
      selectedBroth,
      selectedNoodles,
      selectedProtein,
      selectedToppings
    } = this.state

    const bowlIngredients = [
      selectedBroth,
      selectedNoodles,
      selectedProtein,
      ...selectedToppings
    ]

    const bowlIngredientIds = bowlIngredients.map(ingredient => ingredient.id)

    try {
      const responseOfBowl = await axios.post('/api/bowls', bowlIngredientIds)
      if (responseOfBowl) {
        this.props.history.push('/cart')
      }
    } catch (err) {
      console.log(
        "Sorry... you can't buy this bowl of ramen... please try again!"
      )
    }
  }

  //update broth, noodles, protein,toppings when add
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
    const {selectedBroth, selectedNoodles, selectedProtein} = this.state

    return (
      <form className="container-fluid">
        <h1>Order Ramen</h1>
        <div className="row">
          <div className="col">
            <h2>Dietary Restrictions</h2>
            <DietaryRestrictionForm
              restrictions={restrictions}
              selectedRestrictions={this.state.selectedRestrictions}
              updateRestrictions={this.updateRestrictions}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-7">
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
            <div className="row">
              <button
                className="btn btn-danger col-5"
                type="submit"
                disabled={
                  !selectedBroth.id ||
                  !selectedNoodles.id ||
                  !selectedProtein.id
                }
                onClick={this.submitBowl}
              >
                Add To Cart
              </button>{' '}
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <CurrentBowl currentBowl={this.state} />
          </div>
        </div>
      </form>
    )
  }
}

const mapState = state => ({
  allIngredients: state.allIngredients,
  restrictions: state.restrictions
})

const mapDispatch = dispatch => ({
  // import thunk creator for add to cart
  getAllIngredients: () => dispatch(getProducts()),
  getRestrictions: () => dispatch(getRestrictions())
})

export default withRouter(connect(mapState, mapDispatch)(OrderPage))
