import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class Wendy extends Component {
  render() {
    return (
      <OneTimeLine name="郭">
        <TimePoint windowPosition="right" timePosition={170} timeEndPosition={400} type="lover">
          張潮
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={520}>
          日愣
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={625} timeEndPosition={670}>
          法國
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={640} type="lover">
          哥斯大香腸
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={780} type="lover">
          天使
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={820}
          type="lover"
          timeEndPosition={900}
        >
          朱國
        </TimePoint>
      </OneTimeLine>
    )
  }
}
