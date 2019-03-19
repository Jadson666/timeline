import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class BigDickUncle extends Component {
  render() {
    return (
      <OneTimeLine name="叔">
        <TimePoint windowPosition="right" timePosition={100}>
          爸爸
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={150} type="lover">
          Bamboo
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={230} timeEndPosition={450} type="lover">
          黃奕安
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={550}>
          阿妹公司
        </TimePoint>
        <TimePoint
          windowPosition="right"
          timePosition={600}
          type="lover"
          timeEndPosition={900}
        >
          何品璇
        </TimePoint>
      </OneTimeLine>
    )
  }
}
