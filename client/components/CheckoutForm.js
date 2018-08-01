// from Stripe doc
// https://stripe.com/docs/recipes/elements-react

import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: false,
      isLoggedIn: this.props.user.id && true
    }
    this.submit = this.submit.bind(this)
  }

  async submit(event) {
    event.preventDefault()
    let {token} = await this.props.stripe.createToken()
    const {data} = await axios.post('/charge', {
      tokenId: token.id,
      orderId: this.props.cart.id
    })
    if (data.status === 'succeeded') {
      this.setState({complete: true})
    }
  }

  render() {
    if (this.state.complete)
      return (
        <h1 className="text-center font-weight-bold">Purchase completed!</h1>
      )
    const style = {
      base: {
        color: '#303238',
        fontSize: '20px',
        // fontFamily: '"Open Sans", sans-serif',
        // fontSmoothing: 'antialiased',
        margin: '5px',
        '::placeholder': {
          color: '#CFD7DF'
        }
      },
      invalid: {
        color: '#e5424d',
        ':focus': {
          color: '#303238'
        }
      }
    }
    return (
      <div className="checkout">
        <h1>Check Out</h1>
        <div className="checkout-form">
          <div className="element">
            <CardElement style={style} />
          </div>
          <button
            type="button"
            className="btn-outline-dark"
            onClick={this.submit}
            disabled={!this.state.isLoggedIn}
          >
            {this.state.isLoggedIn
              ? 'Pay for your order now'
              : 'Please log in first'}
          </button>
        </div>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
