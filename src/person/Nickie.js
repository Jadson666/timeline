import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class Nickie extends Component {
  render() {
    return (
      <OneTimeLine name="食">
        <TimePoint windowPosition="right" timePosition={50} type="lover">
          ㄊ月（誰啦！）
        </TimePoint>
        <TimePoint windowPosition="left" timePosition={230} type="lover">
          古麥
        </TimePoint>
      </OneTimeLine>
    )
  }
}
