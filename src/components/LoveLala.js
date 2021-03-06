import React, { Component, Fragment } from 'react'

export default class LoveLala extends Component {

  render() {
    let heartStyle = {
      top: this.props.position -57,
      left: -68,
    }

    let eventStyle = {
      position: 'absolute',
      top: this.props.position - 24,
      left:-48,
      width: 100,
      textAlign:'center',
      fontSize: '1.5em',
      color: 'white'
    }

    return (
      <Fragment>
        <div className="heart" style={heartStyle}></div>
        <div style={eventStyle}>拉拉</div>
        <div className="cut-diamond" style={{top: this.props.position + 30, left: -40} }></div>
        <div className="cut-diamond" style={{top: this.props.position -70, left: -120} }></div>
        <div className="cut-diamond" style={{top: this.props.position - 100, left: 50} }></div>
      </Fragment>
    )
  }
}
