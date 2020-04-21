import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContent from './components/Main/MainContent';
import Persons from './components/Main/Persons';
import Albums from './components/Main/Albums/Albums';
import Stories from './components/Main/Stories';
import Services from './components/Main/Services';
import Learn from './components/Main/Learn';

export default class Router extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={ MainContent } />
        <Route exact path='/persons/' component={ Persons } />
        <Route exact path='/albums/' component={ Albums } />
        <Route exact path='/stories/' component={ Stories } />
        <Route exact path='/services/' component={ Services } />
        <Route exact path='/learn/' component={ Learn } />
      </Switch>
    )
  }
}
