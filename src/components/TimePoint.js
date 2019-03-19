import React from 'react'
import styled from 'styled-components'

class TimePoint extends React.Component {
  widthValue = 100

  render() {
    let windowStyle = {
      width: this.widthValue,
      padding: 10,
      border: '2px gray solid',
      color: 'white',
      backgroundColor: '#0840d4',
      position: 'absolute',
      left: 25,
      top: -10,
      textAlign: 'center',
      borderRadius: 5,
      boxSizing: 'border-box'
    }
    let smallWindowStyle = {
      backgroundColor: 'gray',
      height: 2,
      width: 17,
      position: 'absolute',
      left: 25 - 17
    }

    let pointColor = { borderColor: '#2f90d8' }
    if (this.props.windowPosition === 'left') {
      windowStyle.left = -25 - this.widthValue
      smallWindowStyle.left = -25
    }
    switch (this.props.type) {
      case 'lover':
        windowStyle = {
          ...windowStyle,
          borderColor: '#ca55559e',
          color: '#f10303d9',
          backgroundColor: '#ffc0cbb0'
        }
        pointColor = { borderColor: '#F93B69' }
        break
      case 'deadPast':
        windowStyle = {
          ...windowStyle,
          borderColor: '#ca55559e',
          color: '#f10303d9',
          backgroundColor: '#ffc0cbb0',
          textDecoration: 'line-through'
        }
        pointColor = { borderColor: '#F93B69' }
        break
      default:
        break
    }
    const IntervalLine = styled.div`
      width: 6px;
      height: ${this.props.timeEndPosition - this.props.timePosition}px;
      box-sizing: border-box;
      background-color: ${pointColor.borderColor};
      margin-left: -3px;
    `

    const LineEnd = styled.div`
      ${this.props.timeEndPosition ? '' : 'display: none;'}
      width: 20px;
      height: 2px;
      background-color: ${pointColor.borderColor};
      position: relative;
      left: -10px;
      top: 2px;
    `

    return (
      <div
        className="timePoint"
        style={{ top: this.props.timePosition, ...pointColor }}
      >
        <div style={windowStyle}>{this.props.children}</div>
        <div style={smallWindowStyle} />
        <IntervalLine />
        <LineEnd />
      </div>
    )
  }
}

export default TimePoint
