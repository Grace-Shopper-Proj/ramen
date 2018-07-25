import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getAllIngredients, getAllCategories} from '../store/index'
import {SingleSelectionForm} from './SingleSelectionForm'

class OrderPage extends Component {
  componentDidMount() {
    this.props.getAllIngredients()
    this.props.getAllRestrictions()
  }
  handleRestrictionChange = event => {
    const newRestrictions = {
      ...this.state.restrictions,
      [event.target.name]: event.target.checked
    }
    this.setState({
      restrictions: newRestrictions
    })
  }
  // selectBroth =
  render() {
    const {restrictions} = this.props
    return (
      <div>
        <h1>Order Ramen</h1>
        <form>
          <p>Dietary Restrictions</p>
          {/* Generate the checkboxes for dietary restrictions */}
          {restrictions.map(restriction => {
            return (
              <div key={restriction.id}>
                <label htmlFor={restriction.name}>{restriction.name}</label>
                <input
                  type="checkbox"
                  name={restriction.name}
                  checked={this.state.restrictions}
                  onChange={this.handleRestrictionChange}
                />
              </div>
            )
          })}
        </form>
        <h2>Select broth</h2>
        <SingleSelectionForm
          type="broth"
          allIngredients={this.props.allIngredients}
          restrictions={this.state.restrictions}
        />
        <h2>Select noodles</h2>
        <SingleSelectionForm
          type="noodles"
          allIngredients={this.props.allIngredients}
          restrictions={this.state.restrictions}
        />
        <h2>Select protein</h2>
        <SingleSelectionForm
          type="protein"
          allIngredients={this.props.allIngredients}
          restrictions={this.state.restrictions}
        />
      </div>
    )
  }
}

const mapState = state => ({
  allIngredients: state.allIngredients,
  restrictions: state.categories
})

const mapDispatch = dispatch => ({
  getAllIngredients: () => dispatch(getAllIngredients()),
  getAllRestrictions: () => dispatch(getAllCategories())
})

export default withRouter(connect(mapState, mapDispatch)(OrderPage))
