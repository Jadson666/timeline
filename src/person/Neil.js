import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class Neil extends Component {
  render() {
    return (
      <OneTimeLine name="柯">
        <TimePoint
          windowPosition="right"
          timePosition={200}
          type="lover"
          timeEndPosition={250}
        >
          學妹
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={500}
          timeEndPosition={900}
        >
          第一份工作
        </TimePoint>
      </OneTimeLine>
    )
  }
}
