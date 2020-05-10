import React, { Component } from 'react';
import Header from '../components/Main/Header';
import MainNav from '../components/Main/MainNav';
import Content from '../components/Main/Content';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Router from '../Router';

import styled from 'styled-components';

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
      headerHeight: 0
    };
  }

  setHeaderHeight(height) {
    this.setState({ headerHeight: height });
  }

  render() {
    const { navItems } = this.state;
    const { loading, isAuthorized, headerHeight, hasFullName } = this.props;

    return (
      <BrowserRouter>
        {
          isAuthorized ?
            (loading ?
              <h1>Загрузка данных</h1> :
              hasFullName ?
                (<MainWrapper className='Main' headerHeight={headerHeight}>
                  <Header headerHeight={this.setHeaderHeight}/>
                  <div className='central-content'>
                    <MainNav navItems={navItems}/>
                    <Content isAuthorized={isAuthorized}/>
                  </div>
                </MainWrapper>) :
                // :

                <Router isAuthorized={isAuthorized} hasFullName={hasFullName}/>
            )

            : <Router isAuthorized={isAuthorized}/>
        }
      </BrowserRouter>
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
    error: state.userInfo.error,
    isAuthorized: state.session.isAuthorized,
    currentUser: state.userInfo.currentUser,
    hasFullName: !!(state.userInfo.currentUser.first_name || state.userInfo.currentUser.last_name)
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
