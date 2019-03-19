import React, { Component } from 'react'
import TimePoint from '../components/TimePoint'
import OneTimeLine from '../components/OneTimeLine'

export default class YuMing extends Component {
  render() {
    return (
      <OneTimeLine name="旻">
        <TimePoint
          windowPosition="right"
          timePosition={150}
          type="lover"
          timeEndPosition={200}
        >
          大蒟蒻
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={370} type="lover">
          林
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={420} type="lover">
          陽明學姊
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={530} timeEndPosition={600}>
          實踐傳媒
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={650} timeEndPosition={900}>
          德國
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={720} type="lover">
          大叔
        </TimePoint>
        <TimePoint windowPosition="right" timePosition={770} type="lover">
          四川香腸
        </TimePoint>
      </OneTimeLine>
    )
  }
}
