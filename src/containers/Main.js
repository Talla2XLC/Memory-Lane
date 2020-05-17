import React, { Component } from 'react';
import Header from '../components/Main/Header';
import MainNav from '../components/Main/MainNav';
import Content from '../components/Main/Content';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Router from '../Router';

import PerfectScrollbar from 'react-perfect-scrollbar';
import styled from 'styled-components';
import { ReactComponent as PersonsIcon } from './svg/personsIcon.svg';
import { ReactComponent as AlbumsIcon } from './svg/albumsIcon.svg';
import { ReactComponent as StoryIcon } from './svg/storyIcon.svg';
import { ReactComponent as ServiceIcon } from './svg/serviceIcon.svg';
import { ReactComponent as EducationIcon } from './svg/educationIcon.svg';

class Main extends Component {
  constructor(props) {
    super(props);
    this.setHeaderHeight = this.setHeaderHeight.bind(this);
    this.state = {
      navItems: [
        { endpoint: 'persons', title: 'Персоны', icon: <PersonsIcon/>  },
        { endpoint: 'albums', title: 'Альбомы', icon: <AlbumsIcon />  },
        { endpoint: 'stories', title: 'Истории', icon: <StoryIcon/>   },
        { endpoint: 'services', title: 'Сервисы', icon: <ServiceIcon/>   },
        { endpoint: 'learn', title: 'Обучение', icon: <EducationIcon/>   }
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
                  
                  <PerfectScrollbar component='div'>
                    <div className='central-content'>
                      <MainNav navItems={navItems}/>
                      <Content isAuthorized={isAuthorized}/>


                    </div>
                  </PerfectScrollbar>
                </MainWrapper>) :

                <Router isAuthorized={isAuthorized} hasFullName={hasFullName}/>
            )

            : <Router isAuthorized={isAuthorized}/>
        }
      </BrowserRouter>
    );
  }
}
const MainWrapper = styled.div`
background-color: #F6F6F6;
display: flex;
flex-flow: column nowrap;
height: 100vh;
overflow: hidden;
justify-content: stretch;

box-sizing: border-box;


.central-content {
  margin-left: auto;
  margin-right: auto;
  width: 1140px;
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
