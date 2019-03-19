import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine'
import TimePoint from '../components/TimePoint'

export default class ChunWei extends Component {
  render() {
    return (
      <OneTimeLine name="仲">
        <TimePoint windowPosition="right" timePosition={650} type="lover">
          翁Fish
        </TimePoint>
      </OneTimeLine>
    )
  }
}
