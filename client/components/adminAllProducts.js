import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

//Thunks
import {getProducts} from '../store/product'
import {getRestrictions} from '../store/restrictions'

//components
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
        <h2>Ingredients</h2>
        <h3>Add an ingredient</h3>
        <IngredientForm edit={false} />
        <h3>Edit ingredients</h3>
        {allIngredients.map(ingredient => (
          <IngredientForm
            edit={true}
            key={ingredient.id}
            ingredient={ingredient}
          />
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
