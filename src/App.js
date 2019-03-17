import React, { Component } from 'react'
import './App.css'
import TimePoint from './components/TimePoint';

class App extends Component {
  render() {
    return (
      <main className="app">
        <div class="header">
          <div class="color-overlay">
            <div class="day-number">17</div>
            <div class="date-right">
              <div class="day-name">肥牡蠣</div>
              <div class="month">March 2019</div>
            </div>
          </div>
        </div>
        <div className="timelines">
          <div className="timeTags">
            <section style={{backgroundColor: 'rgb(218, 186, 228)'}}/>
            <section>高一</section>
            <section>高一</section>
            <section>高二</section>
            <section>高三</section>
            <section>大一二</section>
            <section>大三四</section>
            <section>22-24歲</section>
            <section>24-26歲</section>
            <section>26-28歲</section>
          </div>
          <div className="timelineBlocks">
            <section className="timeline">
              <header>暘</header>
              <div className="line" >
                <TimePoint windowPosition="right" timePosition={0}>test</TimePoint>
                <TimePoint windowPosition="left" timePosition={500}>asdsd</TimePoint>
              
              </div>
            </section>
            <section className="timeline">
              <header>旻</header>
            </section>
            <section className="timeline">
              <header>柯</header>
            </section>
            <section className="timeline">
              <header>蘇</header>
            </section>
            {/* <section>C</section>
            <section>玄</section>
            <section>慈</section>
            <section>孫</section>
            <section>郭</section>
            <section>俞</section>
            <section>鍾</section>
            <section>尹</section>
            <section>仲</section>
            <section>輝</section> */}
          </div>
        </div>
      </main>
    )
  }
}

export default App
