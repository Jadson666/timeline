import React, { Component } from 'react'
import '../spinner.css'

export default class Spinner extends Component {
  render() {
    const show = this.props.show ? { display: 'block' } : { display: 'none' }
    return (
      <div
        class="container"
        onclick="function(event){event.stopPropagation()}"
        style={show}
      >
        <div class="spinner" />
      </div>
    )
  }
}
