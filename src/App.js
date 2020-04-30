import React, { Component } from 'react';
import './App.sass';
import Landing from './containers/Landing.js';
import Main from './containers/Main.js';
import AuthorizationForm from './components/Main/AuthorizationForm';
import RegistrationForm from './components/Main/RegistrationForm';
import RegistrationFormName from './components/Main/RegistrationFormName';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showLanding: false};
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.showLanding ? <Landing/> : <Main/>} */}
        <RegistrationForm /> 
        <AuthorizationForm />
        <RegistrationFormName />
        {/* <Landing /> */}
      </div>
    );
  }
}

export default App;
