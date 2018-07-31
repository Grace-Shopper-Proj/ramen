import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

import axios from 'axios'

import {fetchOrder, deleteOrder} from '../store/order'
import {me} from '../store/user'

import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

// parseItem is a helper function that parses a bowl object into a string that describes the bowl
export const parseItem = bowl => {
  const {ingredients} = bowl
  const brothStr = ingredients.find(ingredient => ingredient.type === 'broth')
    .title
  const noodlesStr = ingredients.find(
    ingredient => ingredient.type === 'noodles'
  ).title
  const proteinStr = ingredients.find(
    ingredient => ingredient.type === 'protein'
  ).title
  const topping = ingredients.filter(
    ingredient => ingredient.type === 'toppings'
  )
  const parseToppings = toppings => {
    if (toppings.length === 0) return 'and no toppings'
    if (toppings.length === 1) return `and ${toppings[0].title}`
    else {
      let result = ''
      for (let i = 0; i < toppings.length - 1; i++) {
        result += `${toppings[i].title}, `
      }
      result += `and ${toppings[toppings.length - 1].title}`
      return result
    }
  }
  const toppingStr = parseToppings(topping)
  return `${brothStr} ramen with ${noodlesStr}, ${proteinStr}, ${toppingStr}`
}

class Cart extends Component {
  componentDidMount() {
    if (!this.props.user.id) this.props.fetchMe()
    this.props.fetchOrder(this.props.user.id)
  }
  deleteBowl = async event => {
    const bowlId = event.target.getAttribute('name')
    await axios.delete(`/api/bowls/${bowlId}`)
    this.props.fetchOrder(this.props.user.id)
  }
  render() {
    const {bowls} = this.props.cart
    if (!bowls) return <p>loading...</p>
    return (
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <div>
          <h1>Your order</h1>
          <table>
            <tbody>
              <tr>
                <td>Item</td>
                <td>Price</td>
                <td>Click to remove item from order</td>
              </tr>
              {bowls.map(bowl => (
                <tr key={bowl.id}>
                  <td>{parseItem(bowl)}</td>
                  <td>${bowl.price}</td>
                  <td onClick={this.deleteBowl} name={bowl.id}>
                    remove
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/home">Add another bowl</Link>
          <Elements>
            <CheckoutForm cart={this.props.cart} />
          </Elements>
        </div>
      </StripeProvider>
    )
  }
}

const mapState = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  fetchOrder: userId => dispatch(fetchOrder(userId)),
  deleteOrder: orderId => dispatch(deleteOrder(orderId)),
  fetchMe: () => dispatch(me())
})

export default withRouter(connect(mapState, mapDispatch)(Cart))
