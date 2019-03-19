import React, { Component } from 'react'
import styled from 'styled-components'
import FacebookLogin from 'react-facebook-login'

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
  'Nickie Yue'
]

export default class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      isLoggin: false
    }
  }

  responseFacebook = (response) => {
    if(response.email && userList.includes(response.name)){
      this.setState({isLoggin: true})
    }
  }

  componentClicked = () => console.log('clicked')

  render() {
    const login = this.props.login

    if (this.state.isLoggin) {
      login()
    }
    return (
      <Hello>
        <Center>
          <FacebookLogin
            appId="2334215200169291"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </Center>
      </Hello>
    )
  }
}
