import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class Zoe extends Component {
  render() {
    return (
      <OneTimeLine name="玄">
        <TimePoint windowPosition="right" timePosition={0} type="lover">
          前男友
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={110}
          type="lover"
          timeEndPosition={900}
        >
          卓彥
        </TimePoint>
        <TimePoint
          windowPosition="right"
          timePosition={620}
          timeEndPosition={900}
        >
          Cathay
        </TimePoint>
      </OneTimeLine>
    )
  }
}
