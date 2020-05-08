import React, { Component } from 'react';
import Header from '../components/Main/Header';
import MainNav from '../components/Main/MainNav';
import Content from '../components/Main/Content';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { getUsers } from '../actions/actionUser';
import { connect } from 'react-redux';
import styled from 'styled-components';

import axios from 'axios'

class Main extends Component {
  constructor(props) {
    super(props);
    this.setHeaderHeight = this.setHeaderHeight.bind(this);
    this.state = {
      navItems: [
        { endpoint: 'persons', title: 'Персоны' },
        { endpoint: 'albums', title: 'Альбомы' },
        { endpoint: 'stories', title: 'Истории' },
        { endpoint: 'services', title: 'Сервисы' },
        { endpoint: 'learn', title: 'Обучение' }
      ],
      headerHeight: 0,
      isAuthenticated: false
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    axios
      .post(
        'http://api.memory-lane.ru/checkToken',
        {

        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        })
        .then(res => {
          if (res.data.result) {	// res.status === 200
            this.setState({ isAuthenticated: true })

          } else {	// res.status !== 200
            localStorage.removeItem('token')
            this.setState({ isAuthenticated: false })
          }
        })
        .catch(error => console.error(error))
  }

  setHeaderHeight(height) {
    this.setState({ headerHeight: height });
  }

  render() {
    const { isAuthenticated, navItems } = this.state
    const { loading } = this.props

    return (
      // !isAuthenticated ? Router :
        loading ? <h1>Загрузка данных</h1> :
          <MainWrapper className='Main' headerHeight={this.state.headerHeight}>
            <BrowserRouter className='Main'>
              <Header headerHeight={this.setHeaderHeight}/>
              <div className='central-content'>
                <MainNav navItems={navItems}/>
                <Content/>
              </div>
            </BrowserRouter>
          </MainWrapper>
    );
  }
}
const MainWrapper = styled.div`
display: flex;
flex-flow: column nowrap;
height: 100vh;
overflow: hidden;
justify-content: stretch;

.central-content {
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  height: calc(100vh - ${props => props.headerHeight}px);
}
`;

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
