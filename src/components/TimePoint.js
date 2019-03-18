import React from 'react'

class TimePoint extends React.Component {
  widthValue = 75

  render() {
    let windowStyle = {
      width: this.widthValue,
      border: '2px gray solid',
      color: 'white',
      backgroundColor: '#0840d4',
      position: 'absolute',
      left: 25,
      top: -10,
      textAlign: 'center',
      borderRadius: 5
    }
    let smallWindowStyle = {
      backgroundColor: 'gray',
      height: 2,
      width: 17,
      position: 'absolute',
      left: 25 - 17
    }

    let pointColor = {}
    if (this.props.windowPosition === 'left') {
      windowStyle.left = -25 - this.widthValue - 4
      smallWindowStyle.left = -25
    }
    switch (this.props.type) {
      case 'lover':
        windowStyle = {
          ...windowStyle,
          borderColor: '#ca55559e',
          color: '#f10303d9',
          backgroundColor: '#ffc0cbb0',
        }
        pointColor = {borderColor: '#F93B69'}
        break
      case 'deadPast':
        windowStyle = {
          ...windowStyle,
          borderColor: '#ca55559e',
          color: '#f10303d9',
          backgroundColor: '#ffc0cbb0',
          textDecoration: 'line-through'
        }
        pointColor = {borderColor: '#F93B69'}
        break
      default:
        break
    }
    return (
      <div className="timePoint" style={{ top: this.props.timePosition, ...pointColor }}>
        <div style={windowStyle}>{this.props.children}</div>
        <div style={smallWindowStyle} />
      </div>
    )
  }
}

export default TimePoint
