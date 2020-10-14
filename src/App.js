import React, { Component } from 'react';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import styled from 'styled-components';

import Routes from './pages/Routes';
import Header from './components/Main/header/Header';
import MainNav from './components/Main/mainNav/MainNav';
import Content from './components/Main/generalUi/Content';
import MainModal  from './components/Main/generalUi/modals/MainModal';
import ModalAddAlbum  from './components/Main/generalUi/modals/addAlbum';
import ModalChooseAlbum  from './components/Main/generalUi/modals/choose/ChooseAlbum';

import './App.sass';

import { ReactComponent as PersonsIcon } from 'assets/Images/mainNav/personsIcon.svg';
import { ReactComponent as AlbumsIcon } from 'assets/Images/mainNav/albumsIcon.svg';
import { ReactComponent as StoryIcon } from 'assets/Images/mainNav/storyIcon.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
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
        isAuthorized, 
        modalAddAlbumOpened,
        modalChooseAlbumOpened
      } = this.props;

      // console.log(this.props);
      return (
        <>
        { isAuthorized &&
        <div className='App'>
      <MainWrapper className='Main'>
        <PerfectScrollbar component='div'>
        <Header />
        <div className='central-content'>
        <MainNav navItems={navItems} />
        <Content />     
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
      </MainWrapper>
      <Routes isAuthorized={isAuthorized} />
            
        </div>} 
        { !isAuthorized && <div className='App'><Routes isAuthorized={isAuthorized} /></div>}
      </>
      ); 
  }
}

const MainWrapper = styled.div`
background-color: #F6F6F6;
display: flex;
flex-flow: column nowrap;
// height: 100vh;
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
    isAuthorized: state.session.isAuthorized,
    modalAddAlbumOpened: state.modal.addAlbumOpened,
    modalChooseAlbumOpened: state.modal.chooseAlbumOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
