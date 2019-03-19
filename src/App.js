import React, { Component } from 'react'
import './App.css'
import './heart.css'
import Jason from './person/Jason'
import YuMing from './person/YuMing'
import Neil from './person/Neil'
import Su from './person/Su'
import CC from './person/CC'
import Zoe from './person/Zoe'
import Emily from './person/Emily'
import Wendy from './person/Wendy'
import Sun from './person/Sun'
import Nickie from './person/Nickie'
import BigDickUncle from './person/BigDickUncle'
import DoraYin from './person/DoraYin'
import ChunWei from './person/ChunWei'
import ChianHuei from './person/ChianHuei'
import { getToday, getCountDay } from './Utils'

/* all the time frame */
const Y = () => (
  <div style={{ height: 1000 }}>
    <section style={{ backgroundColor: '#d0c8d8', borderWidth: 0 }} />
    <section>高一</section>
    <section>高二</section>
    <section>高三</section>
    <section>大一二</section>
    <section>大三四</section>
    <section>22-24歲</section>
    <section>24-26歲</section>
    <section>26-28歲</section>
    <section />
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0 }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    this.setState({ width: document.body.scrollWidth })
  }
  render() {
    const today = getToday()
    const daysCount = getCountDay()
    window.console.log(daysCount)
    return (
      <main className="app">
        <div className="header">
          <div className="color-overlay">
            <div className="day-number">{today.day}</div>
            <div className="date-right">
              <div className="day-name">肥牡蠣</div>
              <div className="month">
                {today.month} {today.year}
              </div>
            </div>
            <div className="day-count">
              <span>{daysCount}</span> days past since the day
            </div>
          </div>
        </div>
        <div className="timelines">
          <div className="timeTags">{caculateHowManyY(this.state.width)}</div>
          <div className="timelineBlocks">
            <Jason />
            <YuMing />
            <Neil />
            <Su />
            <CC />
            <Zoe />
            <Emily />
            <Sun />
            <Wendy />
            <Nickie />
            <BigDickUncle />
            <DoraYin />
            <ChunWei />
            <ChianHuei />
          </div>
        </div>
      </main>
    )
  }
}

const caculateHowManyY = (width) => {
  let YaxisArray = []
  let times = getTiltleRepeatNumber(width)
  for (let i = 0; i < times; i++) {
    YaxisArray[i] = <Y key={i} />
  }
  return YaxisArray
}

function getTiltleRepeatNumber(width) {
  let times = 0
  /* repeat Y axis title according to screen width */
  if (width >= 2060) {
    times = 2
  } else if (width >= 1500) {
    times = 3
  } else if (width >= 1220) {
    times = 4
  } else if (width >= 940) {
    times = 5
  } else if (width >= 660) {
    times = 7
  } else {
    times = 14
  }
  return times
}

export default App
