import React from 'react'
import OrderPage from './components/OrderPage'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <OrderPage />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
