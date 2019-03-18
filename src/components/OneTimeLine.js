import React, { Component } from 'react'

export default class OneTimeLine extends Component {
  render() {
    return (
      <section className="timeline">
        <header>{this.props.name}</header>
        <div className="line">
          {this.props.children}
        </div>
      </section>
    )
  }
}
