import React, { Component } from 'react';
import './App.sass';

import Landing from './pages/landing/Landing.js';

import Main from './components/main/Main.js';

export default class App extends Component {

  static path = '/';

  render() {
    return (
      <div className='App'>
        <Main/>
      </div>
    );
  }
}
