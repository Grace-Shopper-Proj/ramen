import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import OrderPage from './components/OrderPage'
import AccountManagement from './components/AccountManagement'
import Cart from './components/Cart'
import ReviewList from './components/reviews/ReviewList'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Switch>
        <Route exact path="/home" component={OrderPage} />
        <Route exact path="/account" component={AccountManagement} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/reviews" component={ReviewList} />
        <Redirect to="/home" />
      </Switch>
    </div>
  )
}

export default App
