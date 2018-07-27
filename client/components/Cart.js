import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchOrder, deleteOrder} from '../store/order'

class Cart extends Component {
  componentDidMount() {
    // Need a API GET route for cart
  }
  render() {
    if (!this.props.user.id) return <h1>No </h1>
    return <h1>HEY!!!!!!!!!!</h1>
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
