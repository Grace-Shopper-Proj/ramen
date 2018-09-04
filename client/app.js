import React from 'react'
import {Navbar, Toast, Footer} from './components'
import Routes from './routes'
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Link to="/home">
        <header />
      </Link>
      <Routes />
      <Toast />
      <Footer />
    </div>
  )
}

export default App
