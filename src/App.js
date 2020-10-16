import React, { Component } from "react";
import { connect } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import styled from "styled-components";

import Routes from "./pages/Routes";
import Header from "./components/main/header/Header";
import MainNav from "./components/main/mainNav/MainNav";
import MainModal from "./components/main/generalUi/modals/MainModal";
import ModalAddAlbum from "./components/main/generalUi/modals/addAlbum";
import ModalChooseAlbum from "./components/main/generalUi/modals/choose/ChooseAlbum";
// import ScrollToTop from "./utils/ScrollToTop";

import "./App.sass";

import { ReactComponent as PersonsIcon } from "assets/Images/mainNav/personsIcon.svg";
import { ReactComponent as AlbumsIcon } from "assets/Images/mainNav/albumsIcon.svg";
import { ReactComponent as StoryIcon } from "assets/Images/mainNav/storyIcon.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
      navItems: [
        { endpoint: "persons", title: "Персоны", icon: <PersonsIcon /> },
        { endpoint: "albums", title: "Альбомы", icon: <AlbumsIcon /> },
        {
          endpoint: "stories",
          title: "Истории",
          icon: <StoryIcon />,
        } /*,
        { endpoint: 'services', title: 'Сервисы', icon: <ServiceIcon/>   },
        { endpoint: 'learn', title: 'Обучение', icon: <EducationIcon/>   }*/,
      ],
    };
  }

  render() {
    const { navItems } = this.state;
    const {
      // isAuthorized,
      modalAddAlbumOpened,
      sessionID,
      modalChooseAlbumOpened,
    } = this.props;

    console.log(this.props);
    return (
      <>
      {/* (isAuthorized || currentUser ) */}
        {(sessionID ) && (
          <div className="App">
            <MainWrapper className="Main">
              <Header />
              <PerfectScrollbar component="div">
                <div className="central-content">
                  <MainNav navItems={navItems} />
                  <div className="central-contentItem">
                    {/* <ScrollToTop /> */}
                    <Routes sessionID={sessionID} />
                  </div>
                </div>
              </PerfectScrollbar>
              <MainModal
                modalOpened={modalAddAlbumOpened}
                modalType={"addAlbum"}
              >
                <ModalAddAlbum />
              </MainModal>
              <ModalChooseAlbum
                modalOpened={modalChooseAlbumOpened}
                modalType={"chooseAlbum"}
              />
            </MainWrapper>
          </div>
        )}
        {(!sessionID ) && (
          <div className="App">
            <Routes sessionID={sessionID} />
          </div>
        )}
      </>
    );
  }
}

const MainWrapper = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-flow: column nowrap;
  // height: 100vh;
  width: 100%;
  min-width: 1340px;
  overflow: hidden;
  justify-content: stretch;

  box-sizing: border-box;

  .scrollbar-container {
    margin-left: 0;
  }

  .central-content {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-bottom: 40px;
  }
  
  .central-contentItem {
    flex-grow: 1;
    padding-left: 315px;
  }
  .
`;

const mapStateToProps = (state) => {
  return {
    // loading: state.session.loading, // then inject before checking authorization
    // isAuthorized: state.session.isAuthorized,
    sessionID: state.session.sessionID,
    modalAddAlbumOpened: state.modal.addAlbumOpened,
    modalChooseAlbumOpened: state.modal.chooseAlbumOpened,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
