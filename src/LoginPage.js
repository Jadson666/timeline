import React, { Component } from 'react'
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login'
import Spinner from './components/Spinner'

const Hello = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: white;
`

const Center = styled.div`
  align-self: center;
`

const Alert = styled.div`
  font-size: 5em;
  color: #e06f60;
  @media (max-width: 895px) {
    font-size: 3em;
  }
  @media (max-width: 555px) {
    font-size: 2em;
  }
  @media (max-width: 375px) {
    font-size: 1.5em;
  }
`

const userList = [
  '林子暘',
  'Nancy Liang',
  '鍾濰宇',
  'Hsiang Chun Sun',
  '郭宇文',
  '李念祖',
  'Zoé Yin',
  '蔡育旻',
  '尹韻慈',
  '陶仲威',
  '林建輝',
  'Agnes Yu Hsin Su',
  'Emily Hsing-Tzu Chang',
  'Nickie Yue',
  'Huei-Hsin Chung',
]

export default class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      isLoggin: false,
      clicked: false,
      spinner: false,
      inGroup: undefined
    }
  }

  responseFacebook = (response) => {
    if (response.name && this.state.clicked) {
      console.log(response)
      if (userList.includes(response.name)) {
        this.setState({ isLoggin: true , inGroup: true})
      } else {
        this.setState({ inGroup: false, spinner: false })
      }
    }
  }

  componentClicked = () => {
    this.setState({ clicked: true, spinner: true })
    console.log(this.state)
  }

  render() {
    const login = this.props.login

    if (this.state.isLoggin === true && this.state.clicked === true) {
      console.log(this.state)
      login()
    }

    const centerElement = this.state.inGroup !== false ? (
      <FacebookLogin
        appId="2334215200169291"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        disableMobileRedirect={true}
        language='zh-tw'
      />
    ) : (
      <Alert>Sorry, this is not for you</Alert>
    )
    return (
      <Hello style={{ position: 'relative' }}>
        <Center>
          {centerElement}
        </Center>
        <Center />
        <Spinner show={this.state.spinner} />
      </Hello>
    )
  }
}
