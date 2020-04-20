import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import App from '../../App'

import Persons from './Persons'
import Albums from './Albums'
import Stories from './Stories'
import Services from './Services'
import Learn from './Learn'

export default class Router extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={ App } />
        <Route exact path='/persons/' component={ Persons } />
        <Route exact path='/albums/' component={ Albums } />
        <Route exact path='/stories/' component={ Stories } />
        <Route exact path='/services/' component={ Services } />
        <Route exact path='/learn/' component={ Learn } />
      </Switch>
    )
  }
}
