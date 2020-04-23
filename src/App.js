import React, { Component } from 'react';
import './App.sass';
import Landing from './containers/Landing.js';
import Main from './containers/Main.js';
import { getUsers } from './actions/actionUser';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showLanding: false};
  }

  render() {
    const isLoading = this.props.loading;
    return (
      <div className="App">
        {isLoading ? <h1>Загрузка данных</h1> : this.state.showLanding ? <Landing/> : <Main/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.userInfo.loading,
    users: state.userInfo.users,
    error: state.userInfo.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    startGetUsers: users => {
      dispatch(getUsers(users));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
