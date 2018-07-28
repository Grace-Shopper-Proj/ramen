import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {axios} from 'axios'

import {fetchOrder, deleteOrder} from '../store/order'

// dummy data
const dummyUser = {
  id: 1,
  email: 'cody@email.com',
  userType: 'customer'
}
const dummyCart = {
  id: 1,
  bowls: [
    {
      id: 1,
      price: '10.00',
      ingredients: [
        {
          id: 1,
          title: 'shio',
          type: 'broth'
        },
        {
          id: 2,
          title: 'udon',
          type: 'noodles'
        },
        {
          id: 3,
          title: 'pork',
          type: 'protein'
        },
        {
          id: 4,
          title: 'soft boil egg',
          type: 'toppings'
        },
        {
          id: 5,
          title: 'nori',
          type: 'toppings'
        }
      ]
    }
  ]
}

class Cart extends Component {
  componentDidMount() {
    this.props.fetchOrder(this.props.user.id)
  }

  // parseItem is a helper function that parses a bowl object into a string that describes the bowl
  parseItem = bowl => {
    const {ingredients} = bowl
    const brothStr = ingredients.find(ingredient => ingredient.type === 'broth')
      .title
    const noodlesStr = ingredients.find(
      ingredient => ingredient.type === 'noodles'
    ).title
    const proteinStr = ingredients.find(
      ingredient => ingredient.type === 'protein'
    ).title
    const toppings = ingredients.filter(
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
    const toppingStr = parseToppings(toppings)
    return `${brothStr} ramen with ${noodlesStr}, ${proteinStr}, ${toppingStr}`
  }
  deleteBowl = async event => {
    const bowlId = event.target.getAttribute('name')
    await axios.delete(`/api/bowls/${bowlId}`)
    this.props.fetchOrder()
  }
  handleCheckout = event => {
    event.preventDefault()
    // Will move to Strip page; not implemented yet
    console.log('Trying to checkout!')
  }
  render() {
    const {bowls} = this.props.cart
    return (
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
                <td>{this.parseItem(bowl)}</td>
                <td>${bowl.price}</td>
                <td onClick={this.deleteBowl} name={bowl.id}>
                  remove
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" onClick={this.handleCheckout}>
          Check Out
        </button>
        <Link to="/home">Add another bowl</Link>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  fetchOrder: userId => dispatch(fetchOrder(userId)),
  deleteOrder: orderId => dispatch(deleteOrder(orderId))
})

export default withRouter(connect(mapState, mapDispatch)(Cart))
