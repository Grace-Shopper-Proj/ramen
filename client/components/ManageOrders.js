import React, {Component} from 'react'
import axios from 'axios'

import OrderItem from './OrderItem'

export default class ManageOrders extends Component {
  state = {
    orders: [],
    selectedCat: 'creating'
  }
  async componentDidMount() {
    const {selectedCat} = this.state
    const {data} = await axios.get(`/api/orders/status/${selectedCat}`)
    this.setState({orders: data})
  }
  completeOrder = async orderId => {
    await axios.put(`/api/orders/${orderId}`)
    const {selectedCat} = this.state
    const {data} = await axios.get(`/api/orders/status/${selectedCat}`)
    this.setState({orders: data})
  }
  changeSelection = async event => {
    event.preventDefault()
    const selectedCat = event.target.name
    this.setState({selectedCat})
    const {data} = await axios.get(`/api/orders/status/${selectedCat}`)
    this.setState({orders: data})
  }
  render() {
    const orders = this.state.orders
    return (
      <div>
        <h1>Manage order status</h1>
        <button type="submit" name="creating" onClick={this.changeSelection}>
          Show active orders (default)
        </button>
        <button type="submit" name="ready" onClick={this.changeSelection}>
          Show inactive orders
        </button>
        {orders.length === 0 ? (
          <p>No order to manage</p>
        ) : (
          <ul>
            {orders.map(order => (
              <OrderItem
                key={order.id}
                order={order}
                completeOrder={this.completeOrder}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
