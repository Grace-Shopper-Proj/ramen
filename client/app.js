import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import OrderPage from './components/OrderPage'
import AccountManagement from './AccountManagement'
import Cart from './components/Cart'

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
        <Redirect to="/home" />
      </Switch>
    </div>
  )
}

export default App
