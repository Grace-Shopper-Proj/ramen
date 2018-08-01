import React, {Component} from 'react'
import AdminAllProducts from './adminAllProducts'
import ManageUsers from './ManageUsers'
import ManageReviews from './ManageReviews'
import ManageOrders from './ManageOrders'
import {connect} from 'react-redux'

class AdminPage extends Component {
  render() {
    // if (this.props.userType === 'admin') {
    return (
      <div className="container">
        <h1>Welcome Admin</h1>
        <AdminAllProducts />
        <ManageUsers />
        <ManageReviews />
        <ManageOrders />
      </div>
    )
    //   } else {
    //     return <p>You do not have admin privileges</p>
    //   }
  }
}
const mapState = state => {
  return {
    userType: state.user.userType || 'none'
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default connect(mapState)(AdminPage)
