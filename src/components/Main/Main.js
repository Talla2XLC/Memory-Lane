import React, { Component } from 'react';
import Header from './Header';
import MainNav from './MainNav';
import Content from './Content';
import { BrowserRouter, Redirect } from 'react-router-dom';
import Routes from '../../pages/Routes';
import { connect } from 'react-redux';
import Routers from '../Router';

import PerfectScrollbar from 'react-perfect-scrollbar';
import styled from 'styled-components';
import { ReactComponent as PersonsIcon } from './svg/personsIcon.svg';
import { ReactComponent as AlbumsIcon } from './svg/albumsIcon.svg';
import { ReactComponent as StoryIcon } from './svg/storyIcon.svg';
// import { ReactComponent as ServiceIcon } from './svg/serviceIcon.svg';
// import { ReactComponent as EducationIcon } from './svg/educationIcon.svg';

import MainModal  from '../components/Main/modals/MainModal';
import ModalAddAlbum  from '../components/Main/modals/addAlbum';
import ModalChooseAlbum  from '../components/Main/modals/choose/ChooseAlbum';

class Main extends Component {
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

  // static propTypes = {
  //   children: PropTypes.any.isRequired  
  // };

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

      // console.log(this.props);
     
    return (
      <Switch>

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
                // <Routers isAuthorized={isAuthorized} hasFullName={hasFullName} />
                <Routes isAuthorized={isAuthorized} hasFullName={hasFullName} />
                
                // <Redirect to="/404/" />
            )

            // : <Routers isAuthorized={isAuthorized}/>
            : <Routes isAuthorized={isAuthorized}/>
        }
      </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
