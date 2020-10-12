import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import styled from 'styled-components';

import Routes from './pages/Routes';
import Header from './components/Main/Header/Header';
import MainNav from './components/Main/mainNav/MainNav';
import Content from './components/Main/generalUi/Content';
import MainModal  from './components/Main/generalUi/modals/MainModal';
import ModalAddAlbum  from './components/Main/generalUi/modals/addAlbum';
import ModalChooseAlbum  from './components/Main/generalUi/modals/choose/ChooseAlbum';
import Landing from './pages/landing/Landing.js';

import './App.sass';

import { ReactComponent as PersonsIcon } from 'assets/Images/mainNav/personsIcon.svg';
import { ReactComponent as AlbumsIcon } from 'assets/Images/mainNav/albumsIcon.svg';
import { ReactComponent as StoryIcon } from 'assets/Images/mainNav/storyIcon.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { endpoint: 'persons', title: 'Персоны', icon: <PersonsIcon/>  },
        { endpoint: 'albums', title: 'Альбомы', icon: <AlbumsIcon />  },
        { endpoint: 'stories', title: 'Истории', icon: <StoryIcon/>   }/*,
        { endpoint: 'services', title: 'Сервисы', icon: <ServiceIcon/>   },
        { endpoint: 'learn', title: 'Обучение', icon: <EducationIcon/>   }*/
      ]
    };
  }
  render() {
    const { navItems } = this.state;
    const 
      {
        loading,
        isAuthorized,
        hasFullName,
        askedToIntroduce,
        modalAddAlbumOpened,
        modalChooseAlbumOpened
      } = this.props;

    return (
      <div className='App'>
        {
          isAuthorized ?
            (
              loading ?
              <h1>Загрузка данных</h1> :
              (hasFullName || askedToIntroduce) ?
                <MainWrapper className='Main'>
                  <Header />
                  <PerfectScrollbar component='div'>
                    <div className='central-content'>
                      <MainNav navItems={navItems}/>
                      <Content isAuthorized={isAuthorized}/>
                    </div>
                  </PerfectScrollbar>
                  <MainModal
                    modalOpened={modalAddAlbumOpened}
                    modalType={'addAlbum'}
                  >
                    <ModalAddAlbum/>
                  </MainModal>
                  <ModalChooseAlbum
                    modalOpened={modalChooseAlbumOpened}
                    modalType={'chooseAlbum'}
                  />
                </MainWrapper> : 
                <Routes />
            )
            : <Routes />
        }
      </div>
    );
  }
}

const MainWrapper = styled.div`
background-color: #F6F6F6;
display: flex;
flex-flow: column nowrap;
height: 100vh;
width: 100%;
min-width: 1340px;
overflow: hidden;
justify-content: stretch;

box-sizing: border-box;

.scrollbar-container {
  margin-left: 0
}

.central-content {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-bottom: 40px;
}
`;

const mapStateToProps = state => {
  return {
    loading: state.userInfo.loading,
    isAuthorized: state.session.isAuthorized,
    currentUser: state.userInfo.currentUser,
    hasFullName: !!(state.userInfo.currentUser.first_name || state.userInfo.currentUser.last_name),
    askedToIntroduce: state.userInfo.currentUser.asked_to_introduce,
    modalAddAlbumOpened: state.modal.addAlbumOpened,
    modalChooseAlbumOpened: state.modal.chooseAlbumOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
