// from Stripe doc
// https://stripe.com/docs/recipes/elements-react

import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {complete: false}
    this.submit = this.submit.bind(this)
  }

  async submit(event) {
    event.preventDefault()
    let {token} = await this.props.stripe.createToken({name: 'Name'})
    let response = await fetch('/charge', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: {
        tokenId: token.id,
        orderId: this.props.cart.id
      }
    })
    console.log('response', response)
    if (response.ok) {
      this.setState({complete: true})
    }
  }

  render() {
    if (this.state.complete) return <h1>purchase completed!</h1>
    return (
      <div className="checkout">
        <h2>Check Out</h2>
        <CardElement />
        <button onClick={this.submit}>Pay for order</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
