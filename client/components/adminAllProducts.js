import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import axios from 'axios'

//Thunks
import {getProducts} from '../store/product'
import {getRestrictions} from '../store/restrictions'
import IngredientForm from './ingredientForm'

class adminAllProducts extends Component {
  componentDidMount() {
    this.props.getAllIngredients()
    this.props.getRestrictions()
  }
  render() {
    const {allIngredients} = this.props
    return (
      <div>
        <h2>All Ingredients</h2>
        {allIngredients.map(ingredient => (
          <IngredientForm key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  //import thunks
  getAllIngredients: () => dispatch(getProducts()),
  getRestrictions: () => dispatch(getRestrictions())
})

const mapState = state => ({
  allIngredients: state.allIngredients,
  restrictions: state.restrictions
})

export default withRouter(connect(mapState, mapDispatch)(adminAllProducts))

//see list of ingredients
//be able to add ingredient
//be able to edit ingredient
