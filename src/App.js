import React, { Component } from 'react'
import './App.css'
import './heart.css'
import TimePoint from './components/TimePoint'
import OneTimeLine from './components/OneTimeLine'
import LoveLala from './components/LoveLala';

const Y = () => (
  <div style={{ height: 1000 }}>
    <section style={{ backgroundColor: '#f1f1f1', borderWidth: 0 }} />
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
              <TimePoint windowPosition="right" timePosition={330}>
                段薇
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={540}>
                原妹
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={630}>
                KI再來
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={680}>
                楊婷
              </TimePoint>
              <LoveLala position={780}/>
              
            </OneTimeLine>
            <OneTimeLine name="旻">
              <TimePoint windowPosition="right" timePosition={150}>
                大蒟蒻
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={370}>
                林
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={420}>
                陽明學姊
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={530}>
                實踐傳媒
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={650}>
                德國
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={720}>
                大叔
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={770}>
                四川香腸
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="柯" />
            <OneTimeLine name="蘇">
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
              <TimePoint windowPosition="right" timePosition={500}>
                EN
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={550}>
                XieXie
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={640}>
                西班牙香腸
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="C">
              <TimePoint windowPosition="right" timePosition={250}>
                Eric
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={500}>
                挪威阿腸
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={550}>
                拉亞
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={750}>
                中醫
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="玄">
              <TimePoint windowPosition="right" timePosition={0}>
                前男友
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={110}>
                卓彥
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={620}>
                Cathay
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="慈">
              <TimePoint windowPosition="right" timePosition={0}>
                張銘佑
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={320}>
                賴
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={550}>
                NY
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={650}>
                套
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={760}>
                上海
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="孫">
              <TimePoint windowPosition="right" timePosition={50}>
                LALA
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={550}>
                早秋
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={680}>
                日本
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={780}>
                Mr.白羊
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="郭">
              <TimePoint windowPosition="right" timePosition={170}>
                張潮
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={520}>
                日愣
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={625}>
                法國
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={640}>
                哥斯大香腸
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={780}>
                天使
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={820}>
                朱國
              </TimePoint>
            </OneTimeLine> 
            <OneTimeLine name="食">
            <TimePoint windowPosition="right" timePosition={50}>
                ㄊ月（誰啦！）
            </TimePoint>
            <TimePoint windowPosition="left" timePosition={230}>
                古麥
              </TimePoint> 
            </OneTimeLine>
            <OneTimeLine name="叔">
            <TimePoint windowPosition="right" timePosition={100}>
                爸爸
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={150}>
                Bamboo
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={230}>
                黃奕安
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={550}>
                阿妹公司
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={600}>
                何品璇
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="尹">
            <TimePoint windowPosition="right" timePosition={100}>
                媽媽
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={120}>
                曾耀勳
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={140}>
                北車頂樓
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={480}>
                鄭喬浦
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={520}>
                研究所
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={550}>
                叔家後巷
              </TimePoint>
              <TimePoint windowPosition="right" timePosition={660}>
                阿強
              </TimePoint>
              <TimePoint windowPosition="left" timePosition={700}>
                中秋買房
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="仲">
            <TimePoint windowPosition="right" timePosition={650}>
                翁Fish
              </TimePoint>
            </OneTimeLine>
            <OneTimeLine name="輝">
            <TimePoint windowPosition="right" timePosition={50}>
                泡泡
              </TimePoint>
            </OneTimeLine>
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

export default App
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
