import React, { Component } from 'react'
import OneTimeLine from '../components/OneTimeLine';
import TimePoint from '../components/TimePoint';

export default class DoraYin extends Component {
  render() {
    return (
      <OneTimeLine name="尹">
              <TimePoint windowPosition="right" timePosition={100}>
                媽媽
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={120} timeEndPosition={420} type="lover">
                曾耀勳
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={140}>
                北車頂樓
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={480} timeEndPosition={600} type="lover">
                鄭喬浦
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={520}>
                研究所
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={550}>
                叔家後巷
              </TimePoint>
              <TimePoint
                windowPosition="right"
                timePosition={660}
                type="lover"
                timeEndPosition={900}
              >
                阿強
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={700}>
                中秋買房
              </TimePoint>
            </OneTimeLine>
    )
  }
}
