import React, { Component } from 'react';
import './App.sass';
import Landing from './containers/Landing.js';
import Main from './containers/Main.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showLanding: false};
  }

  render() {
    return (
      <div className="App">
        {this.state.showLanding ? <Landing/> : <Main/>}
      </div>
    );
  }
}

export default App;
