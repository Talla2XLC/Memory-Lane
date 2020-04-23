import React, { Component } from 'react';
import './Main.sass';
import Header from '../components/Main/Header';
import MainNav from '../components/Main/MainNav';
import Content from '../components/Main/Content';
import {BrowserRouter} from 'react-router-dom';
import { getUsers } from '../actions/actionUser';
import { connect } from 'react-redux';

class Main extends Component {
  state = {
    navItems: [
      { endpoint: 'persons', title: 'Персоны' },
      { endpoint: 'albums', title: 'Альбомы' },
      { endpoint: 'stories', title: 'Истории' },
      { endpoint: 'services', title: 'Сервисы' },
      { endpoint: 'learn', title: 'Обучение' }
    ]
  }

  render() {
    const { navItems } = this.state;
    const isLoading = this.props.loading;

    return (
      isLoading ? <h1>Загрузка данных</h1> :
        <div className='Main'>
          <BrowserRouter>
            <Header/>
            <div className='central-content'>
              <MainNav navItems={navItems}/>
              <Content/>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.userInfo.loading,
    users: state.userInfo.users,
    error: state.userInfo.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startGetUsers: users => {
      dispatch(getUsers(users));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
