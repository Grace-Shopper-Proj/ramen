import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Path from 'path'

const Navbar = ({handleClick, isLoggedIn}) => (
  <nav className="navbar">
    <Link className="nav-link" to="/home">
      <img src={Path.join(__dirname, '/img/small-logo.png')} />
    </Link>

    <Link className="nav-link" to="/reviews">
      <img src={Path.join(__dirname, '/img/reviews.png')} />
    </Link>

    <Link className="nav-link" to="/cart">
      <img src={Path.join(__dirname, '/img/cart.png')} />
    </Link>

    <Link className="nav-link" to="/account">
      <img src={Path.join(__dirname, 'img/user.png')} />
    </Link>

    {isLoggedIn ? (
      <span>
        {/* The navbar will show these links after you log in */}
        <a className="nav-link" href="#" onClick={handleClick}>
          Logout
        </a>
      </span>
    ) : (
      <span>
        {/* The navbar will show these links before you log in */}
        <Link to="/login">Login </Link>
        {'  '} | {'  '}
        <Link to="/signup">Sign Up</Link>
      </span>
    )}
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
