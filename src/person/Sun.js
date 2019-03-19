import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class Sun extends Component {
  render() {
    return (
      <OneTimeLine name="孫">
        <TimePoint windowPosition="right" timePosition={50} timeEndPosition={300} type="lover">
          LALA
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={550} timeEndPosition={600}>
          早秋
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={680} timeEndPosition={730}>
          日本
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={780}
          type="lover"
          timeEndPosition={900}
        >
          Mr.白羊
        </TimePoint>
      </OneTimeLine>
    )
  }
}
