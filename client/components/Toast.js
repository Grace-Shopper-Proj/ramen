import React, {Component} from 'react'
import {connect} from 'react-redux'

class Toast extends Component {
  render() {
    return (
      <div className="toast">
        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}

const mapState = state => {
  return {
    msg: state.message
  }
}

export default connect(mapState, null)(Toast)
