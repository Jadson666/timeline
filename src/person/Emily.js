import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class Emily extends Component {
  render() {
    return (
      <OneTimeLine name="慈">
        <TimePoint windowPosition="right" timePosition={0} type="lover">
          張銘佑
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={320}
          type="lover"
          timeEndPosition={530}
        >
          賴
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={550}>
          NY
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={650}
          type="lover"
          timeEndPosition={740}
        >
          套
        </TimePoint>
        <TimePoint
          windowPosition="right"
          timePosition={760}
          timeEndPosition={900}
        >
          上海
        </TimePoint>
      </OneTimeLine>
    )
  }
}
