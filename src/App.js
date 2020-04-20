import React, { Component } from 'react';
import './App.sass';
import Landing from './containers/Landing.js';
import Main from './containers/Main.js';

import setUserAction from './actions/actionUser';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showLanding: true };
  }

  render(){
    return (
      <div className="App">
        {this.state.showLanding ? <Landing /> : <Main />}
      </div>
    );
  }
}
  

function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUserFunction: user => {
      dispatch(setUserAction(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
