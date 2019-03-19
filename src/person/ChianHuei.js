import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class ChianHuei extends Component {
  render() {
    return (
      <OneTimeLine name="輝">
        <TimePoint windowPosition="right" timePosition={50} type="lover">
          泡泡
        </TimePoint>
      </OneTimeLine>
    )
  }
}
