import React, { Component } from 'react'
import LoveLala from '../components/LoveLala'
import TimePoint from '../components/TimePoint'
import OneTimeLine from '../components/OneTimeLine'

export default class Jason extends Component {
  render() {
    return (
      <OneTimeLine name="暘">
        <TimePoint
          windowPosition="right"
          timePosition={50}
          timeEndPosition={70}
          type="deadPast"
        >
          KIKI
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={150}
          timeEndPosition={315}
          type="deadPast"
        >
          學姊
        </TimePoint>
        <TimePoint
          windowPosition="right"
          timePosition={330}
          timeEndPosition={470}
          type="deadPast"
        >
          段薇
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={540} type="deadPast">
          原妹
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={630} type="deadPast">
          KI再來
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={680} type="deadPast">
          楊婷
        </TimePoint>
        <LoveLala position={780} />
      </OneTimeLine>
    )
  }
}
