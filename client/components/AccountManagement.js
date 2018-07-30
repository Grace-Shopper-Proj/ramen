import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//thunks
import {getPastOrders, fetchPastOrders} from '../store/pastOrders'
import {me} from '../store/user'

class AccountManagement extends React.Component {
  constructor() {
    super()
    this.state = {}
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getUser()
    this.props.getPastOrders()
  }

  handleClick = event => {
    event.preventDefault()
    // A thunk creator for deleting user is needed to implement this method
  }
  render() {
    console.log('what is this', this)
    const {user, orders} = this.props
    if (!user.id) return <h1>No logged in user to manage</h1>
    return (
      <div>
        <h1>Your Account Information</h1>
        <p>Logged in with: {user.email}</p>
        <p>User Type: {user.userType}</p>
        <h2>Order History:</h2>
        <table>
          <tbody>
            <tr>
              <th>Order Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
            {orders &&
              orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.isCart}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <button type="submit" onClick={this.handleClick}>
          Logout
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  orders: state.pastOrders,
  reviews: state.pastReviews
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me()),
  getPastOrders: () => dispatch(fetchPastOrders()),
  getPastReviews: userId => dispatch()
})

export default connect(mapState, mapDispatch)(AccountManagement)
