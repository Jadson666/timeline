import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class CC extends Component {
  render() {
    return (
      <OneTimeLine name="C">
        <TimePoint
          windowPosition="right"
          timePosition={250}
          type="lover"
          timeEndPosition={330}
        >
          Eric
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={500} type="lover">
          挪威阿腸
        </TimePoint>
        <TimePoint
          windowPosition="right"
          timePosition={550}
          type="lover"
          timeEndPosition={670}
        >
          拉亞
        </TimePoint>
        <TimePoint
          windowPosition="left"
          timePosition={710}
          timeEndPosition={900}
        >
          中醫
        </TimePoint>
      </OneTimeLine>
    )
  }
}
