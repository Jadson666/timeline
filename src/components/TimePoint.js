import React from 'react'

function TimePoint(props) {
  const widthValue = 75
  let windowStyle = {
    width: widthValue,
    border: '3px gray solid',
    position: 'absolute',
    left: 25,
    top: -10,
  }
  let smallWindowStyle = {
    backgroundColor : 'gray',
    height: 2,
    width: 17,
    position: 'absolute',
    left: 25 - 17

  }
  if (props.windowPosition === 'left') {
    windowStyle.left = -25 - widthValue - 6
    smallWindowStyle.left = - (25)
  }

  
  return (
    <div className="timePoint" style={{top:props.timePosition}}>
      <div style={windowStyle}>{props.children}</div>
      <div style={smallWindowStyle}></div>
    </div>
  )
}

export default TimePoint
