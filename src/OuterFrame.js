import React, { Component, Fragment } from 'react'
import LoginPage from './LoginPage'
import App from './App'

export default class OuterFrame extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: LoginPage
    }
  }

  login() {
    this.setState({ currentPage: App })
  }

  render() {
    const CurrentPage = this.state.currentPage
    return (
      <Fragment>
        <CurrentPage login={this.login.bind(this)} />
      </Fragment>
    )
  }
}
