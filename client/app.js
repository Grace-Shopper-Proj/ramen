import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import OrderPage from './components/OrderPage'
import AccountManagement from './components/AccountManagement'
import Cart from './components/Cart'

import {Navbar} from './components'
import Routes from './routes'
import adminPage from './components/adminPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Switch>
        <Route exact path="/home" component={OrderPage} />
        <Route exact path="/account" component={AccountManagement} />
        <Route exact path="/cart" component={Cart} />
        {/* Need to add logic to only allow logged in admins to view this page */}
        <Route exact path="/admin" component={adminPage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  )
}

export default App
