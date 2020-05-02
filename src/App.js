import React, { Component } from 'react';
import './App.sass';
import Landing from './containers/Landing.js';
import Main from './containers/Main.js';

import RegistrationForm from './components/Main/RegistrationForm';
import RegistrationFormName from './components/Main/RegistrationFormName';
import AuthorizationForm from './components/Main/AuthorizationForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showLanding: false};
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.showLanding ? <Landing/> : <Main/>} */}
        {/* <Landing /> */}
        <RegistrationForm />
        <RegistrationFormName />
        <AuthorizationForm />
      </div>
    );
  }
}

export default App;
