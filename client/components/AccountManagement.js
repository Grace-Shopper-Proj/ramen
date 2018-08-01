import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {parseItem} from './Cart'

//component
import SingleReview from './reviews/SingleReview'

//thunks
import {fetchPastOrders} from '../store/pastOrders'
import {getPastReviews} from '../store/pastReviews'
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
    this.props.fetchPastReviews()
  }

  handleClick = event => {
    event.preventDefault()
    // A thunk creator for deleting user is needed to implement this method
  }
  render() {
    const {user, orders, reviews} = this.props
    const prices = orders.map(order =>
      order.bowls.reduce((acc, val) => acc + Number(val.price), 0).toFixed(2)
    )
    if (!user.id) return <h1>No logged in user to manage</h1>
    return (
      <div>
        {user.userType === 'admin' ? (
          <Link to="/admin">Go to admin page</Link>
        ) : (
          ''
        )}
        <h1>Your Account Information</h1>
        <p id="email">Logged in with: {user.email}</p>
        <p id="user-type">User Type: {user.userType}</p>
        <h2>Order History:</h2>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Item</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
            {orders &&
              orders.map((order, i) => (
                <tr key={order.id}>
                  <td>{order.createdAt.slice(0, 10)}</td>
                  <td>{order.createdAt.slice(11, 16)}</td>
                  <td>
                    <ol>
                      {order.bowls.map(bowl => (
                        <li key={bowl.id}>{parseItem(bowl)}</li>
                      ))}
                    </ol>
                  </td>
                  <td>{order.status}</td>
                  <td>${prices[i]}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div>
          <h2>Past Reviews:</h2>
          {!reviews.length ? (
            <p>You didn't not submit any review</p>
          ) : (
            reviews.map(review => {
              //
              const indexOfAt = review.user.email.indexOf('@')
              const userName = review.user.email.slice(0, indexOfAt)
              return (
                <SingleReview
                  key={review.id}
                  userName={userName}
                  review={review}
                />
              )
            })
          )}
        </div>
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
  fetchPastReviews: () => dispatch(getPastReviews())
})

export default connect(mapState, mapDispatch)(AccountManagement)
