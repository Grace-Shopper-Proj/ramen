import React, {Component} from 'react'
import {connect} from 'react-redux'

//thunks
import {getOrder, getUser} from '../store/order'
import {me} from '../store/user'

class AccountManagement extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  handleClick = event => {
    event.preventDefault()
    // A thunk creator for deleting user is needed to implement this method
  }
  render() {
    const {user} = this.props
    if (!user.id) return <h1>No logged in user to manage</h1>
    return (
      <div>
        <h1>Your Account Information</h1>
        <p>Logged in with: {user.email}</p>
        <p>User Type: {user.userType}</p>
        <h2>Past Order:</h2>
        <h3>Current Order Status:</h3>
        <h3>Bowls:</h3>
        <p>
          ...view my list of previous orders, so that I can find and individual
          order I made in the past and review it(current order status)
        </p>

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
