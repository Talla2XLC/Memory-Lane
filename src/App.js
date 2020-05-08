import React, { Component } from 'react'
import './App.sass'

import Landing from './containers/Landing.js'

import RegistrationForm from './components/Main/RegistrationForm'
import AuthorizationForm from './components/Main/AuthorizationForm'
import Main from './containers/Main.js'

import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './Router'

import axios from 'axios'

export default class App extends Component {

  state = {
    showLanding: false,
    isAuthenticated: false
  }

  componentWillMount() {
    const token = localStorage.getItem('token')

    axios
      .post(
        'http://api.memory-lane.ru/checkToken',
        {

        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        })
        .then(res => {
          if (res.data.result) {	// res.status === 200
            this.setState({ isAuthenticated: true })

          } else {	// res.status !== 200
            localStorage.removeItem('token')
            this.setState({ isAuthenticated: false })
          }
        })
        .catch(error => console.error(error))
  }

  render() {
    const { isAuthenticated, showLanding } = this.state
    
    console.log(this.state)

    const routes = useRoutes(isAuthenticated)

    return (
      <div className="App">
          {/* { showLanding ? <Landing/> : <Main/> } */}
          {/* { isAuthenticated ? <Main/> : <AuthorizationForm/> } */}
        <BrowserRouter>
          {routes}
        </BrowserRouter>
        </div>
    )
  }
}
