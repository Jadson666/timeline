import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class Su extends Component {
  render() {
    return (
      <OneTimeLine name="蘇">
        <TimePoint windowPosition="right" timePosition={0} type="lover">
          MIKE
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={50} type="lover">
          黃河
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={100} type="lover">
          楊正旭
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={200}
          type="lover"
          timeEndPosition={480}
        >
          楊立全
        </TimePoint>
        <TimePoint
          windowPosition="right"
          timePosition={500}
          timeEndPosition={530}
        >
          EN
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={550} type="lover">
          XieXie
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={600} timeEndPosition={900}>
          德國
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={640}
          type="lover"
          timeEndPosition={800}
        >
          西班牙香腸
        </TimePoint>
      </OneTimeLine>
    )
  }
}
