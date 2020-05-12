import React, { Component } from 'react';
import './App.sass';

import Landing from './containers/Landing.js';

import Main from './containers/Main.js';

export default class App extends Component {
  state = {
    showLanding: false
  }

  render() {
    const { showLanding } = this.state;

    return (
      <div className='App'>
        { showLanding ? <Landing/> : <Main/> }
      </div>
    );
  }
}
