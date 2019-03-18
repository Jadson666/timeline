import React, { Component } from 'react'
import './App.css'
import TimePoint from './components/TimePoint'
import OneTimeLine from './components/OneTimeLine'

const Y = () => (
  <div style={{ height: 1000 }}>
    <section style={{ backgroundColor: 'rgb(218, 186, 228)' }} />
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
    
    return (
      <main className="app">
        <div className="header">
          <div className="color-overlay">
            <div className="day-number">17</div>
            <div className="date-right">
              <div className="day-name">肥牡蠣</div>
              <div className="month">March 2019</div>
            </div>
          </div>
        </div>
        <div className="timelines">
          <div className="timeTags">{caculateHowManyY(this.state.width)}</div>
          <div className="timelineBlocks">
            <OneTimeLine name="暘">
              <TimePoint windowPosition="right" timePosition={50}>
                KIKI
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={150}>
                學姊
              </TimePoint>
            </OneTimeLine>
            <section className="timeline">
              <header>旻</header>
              <div className="line">
                <TimePoint windowPosition="right" timePosition={150}>
                  大蒟蒻
                </TimePoint>
                <TimePoint windowPosition="left" timePosition={370}>
                  林
                </TimePoint>
                <TimePoint windowPosition="right" timePosition={420}>
                  陽明學姊
                </TimePoint>
              </div>
            </section>
            <section className="timeline">
              <header>柯</header>
              <div className="line" />
            </section>
            <section className="timeline">
              <header>蘇</header>
              <div className="line">
                <TimePoint windowPosition="right" timePosition={0}>
                  MIKE
                </TimePoint>
                <TimePoint windowPosition="left" timePosition={50}>
                  黃河
                </TimePoint>
                <TimePoint windowPosition="right" timePosition={100}>
                  楊正旭
                </TimePoint>
                <TimePoint windowPosition="left" timePosition={200}>
                  楊立全
                </TimePoint>
              </div>
            </section>
            <OneTimeLine name="C">
            </OneTimeLine>
            <OneTimeLine name="玄">
            </OneTimeLine>
            <OneTimeLine name="慈">
            </OneTimeLine>
            <OneTimeLine name="孫">
            </OneTimeLine>
            <OneTimeLine name="郭">
            </OneTimeLine>
            <OneTimeLine name="食">
            </OneTimeLine>
            <OneTimeLine name="叔">
            </OneTimeLine>
            <OneTimeLine name="尹">
            </OneTimeLine>
            <OneTimeLine name="仲">
            </OneTimeLine>
            <OneTimeLine name="輝">
            </OneTimeLine>
          </div>
        </div>
      </main>
    )
  }
}

const caculateHowManyY = (width) => {
  let YaxisArray = []
  let times = getTiltleRepeatNumber(width);
  for (let i = 0; i < times; i++) {
    YaxisArray[i] = <Y key={i} />
  }
  return YaxisArray
}

export default App
function getTiltleRepeatNumber(width) {
  let times = 0
  /* repeat Y axis title according to screen width */
  if (width >= 2060) {
    times = 2;
  }
  else if (width >= 1500) {
    times = 3;
  }
  else if (width >= 1220) {
    times = 4;
  }
  else if (width >= 940) {
    times = 5;
  }
  else if (width >= 660) {
    times = 7;
  }
  else {
    times = 14;
  }
  return times;
}

