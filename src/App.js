import React, { Component } from 'react';
import './App.sass';
import Landing from './containers/Landing.js';
import Main from './containers/Main.js';
import setUserAction from './actions/actionUser';

import { connect } from 'react-redux';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showLanding: false };
  }

  /*getUsers() {
    axios
      .post(
        'http://api.memory-lane.ru/db/getUsers/all',
        {
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => {
        const USERS_ARR = response.data.result[0];
        return USERS_ARR;
      });
  }*/

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
