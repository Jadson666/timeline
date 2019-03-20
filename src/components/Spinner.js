import React, { Component } from 'react'
import '../spinner.css'

export default class Spinner extends Component {
  render() {
    const show = this.props.show ? { display: 'block' } : { display: 'none' }
    return (
      <div
        className="container"
        onClick={mask}
        style={show}
      >
        <div className="spinner" />
      </div>
    )
  }
}

function mask(event){event.stopPropagation()}
