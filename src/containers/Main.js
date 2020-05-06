import React, { Component } from 'react';
import Header from '../components/Main/Header';
import MainNav from '../components/Main/MainNav';
import Content from '../components/Main/Content';
import {BrowserRouter} from 'react-router-dom';
import { getUsers } from '../actions/actionUser';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as Icon } from './svg/personsIcon.svg';
import PerfectScrollbar from 'react-perfect-scrollbar';


class Main extends Component {
  constructor(props) {
    super(props);
    this.setHeaderHeight = this.setHeaderHeight.bind(this);
    this.state = {
      navItems: [
        { endpoint: 'persons', title: 'Персоны', icon: <Icon/>  },
        { endpoint: 'albums', title: 'Альбомы', icon: <Icon/>  },
        { endpoint: 'stories', title: 'Истории', icon: <Icon/>   },
        { endpoint: 'services', title: 'Сервисы', icon: <Icon/>   },
        { endpoint: 'learn', title: 'Обучение', icon: <Icon/>   }  
      ],
      headerHeight: 0
    };
  }

  setHeaderHeight(height) {
    this.setState({headerHeight: height});
  }

  render() {
    const { navItems } = this.state;
    const isLoading = this.props.loading;

    return (
      isLoading ? <h1>Загрузка данных</h1> :

        <MainWrapper className='Main' headerHeight={this.state.headerHeight}>
          <BrowserRouter className='Main'>
            <Header headerHeight={this.setHeaderHeight}/>
            <PerfectScrollbar component='div'>
            <div className='central-content'>
              <MainNav navItems={navItems}/>
              <Content/>
            </div>
            </PerfectScrollbar>
          </BrowserRouter>
        </MainWrapper>

    );
  }
}
const MainWrapper = styled.div`
background-color: #DAE2E5;
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
