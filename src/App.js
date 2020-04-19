import React, { Component } from 'react';
import './App.sass';
import Landing from './components/Landing.js';

import setUserAction from "./actions/actionUser"

import { connect } from "react-redux";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}
  

function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUserFunction: user => {
      dispatch(setUserAction(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
