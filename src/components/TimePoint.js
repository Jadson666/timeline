import React from 'react'

class TimePoint extends React.Component {
  widthValue = 75

  render() {
    let windowStyle = {
      width: this.widthValue,
      border: '3px gray solid',
      position: 'absolute',
      left: 25,
      top: -10
    }
    let smallWindowStyle = {
      backgroundColor: 'gray',
      height: 2,
      width: 17,
      position: 'absolute',
      left: 25 - 17
    }
    if (this.props.windowPosition === 'left') {
      windowStyle.left = -25 - this.widthValue - 6
      smallWindowStyle.left = -25
    }
    return (
      <div className="timePoint" style={{ top: this.props.timePosition }}>
        <div style={windowStyle}>{this.props.children}</div>
        <div style={smallWindowStyle} />
      </div>
    )
  }
}

export default TimePoint
