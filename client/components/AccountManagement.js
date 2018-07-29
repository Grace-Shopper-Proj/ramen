import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//thunks
import {getPastOrder, getUser} from '../store/order'
import {me} from '../store/user'

class AccountManagement extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getUser()
  }

  handleClick = event => {
    event.preventDefault()
    // A thunk creator for deleting user is needed to implement this method
  }
  render() {
    console.log('what is this', this.props)
    const {user, order} = this.props
    if (!user.id) return <h1>No logged in user to manage</h1>
    return (
      <div>
        <h1>Your Account Information</h1>
        <p>Logged in with: {user.email}</p>
        <p>User Type: {user.userType}</p>
        <h2>Order History:</h2>
        <thead>
          <tr>
            <th>Order Number {order.id}</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <button type="submit" onClick={this.handleClick}>
          Logout
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  getUser: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(AccountManagement)
