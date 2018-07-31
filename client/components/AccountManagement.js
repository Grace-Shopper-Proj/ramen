import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
    if (!user.id) return <h1>No logged in user to manage</h1>
    return (
      <div>
        {user.userType === 'admin' ? (
          <Link to="/admin">Go to admin page</Link>
        ) : (
          ''
        )}
        <h1 className="text-center font-weight-bold">
          Your Account Information
        </h1>
        <p className="text-justify font-weight-bold">
          Logged in with: {user.email}
        </p>
        <p className="text-justify font-weight-bold">
          User Type: {user.userType}
        </p>
        <h2 className="text-justify font-weight-bold">Order History:</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order Number ID</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map(order => (
                <tr key={order.id}>
                  <tr>
                    <th scope="row">1</th>
                    <td>{order.id}</td>
                  </tr>

                  <td>{order.createdAt.slice(0, 10)}</td>
                  <td>{order.createdAt.slice(11, 16)}</td>
                  <td>{order.status}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total}</td>
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
        {/* <button type="submit" onClick={this.handleClick}>
          Logout
        </button> */}
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
