import React, { Component } from 'react';

// import PerfectScrollbar from 'react-perfect-scrollbar';

import { connect } from 'react-redux';

import { getAlbums } from '../../../../actions/actionAlbums';
import { modalClose } from '../../../../actions/modalClose';

import Portal from '../Portal';

import { ButtonContainer } from '../../Button';

import ChooseAlbumSearch from './ChooseAlbumSearch';
import AlbumItem from './ChooseAlbumItemAlbum';

import './ChooseAlbum.sass';

import axios from 'axios';

class ModalChooseAlbum extends Component {

  render() {
    const { modalOpened, modalType, closeModal, albums } = this.props;

    console.log('ChooseAlbum props', this.props);

    // const albumItems = albums.map(album =>
    //   <button
    //     key={album.id}
    //     className='dropdown-albums-btn'
    //     onClick={openModalChooseAlbum}
    //   >
    //     {album.album_name}
    //   </button>
    // );

    const storiesAlbums = Object.values(albums).map(album =>
        <AlbumItem 
          key={album.id}
          id={album.id}
          title={album.album_name}
          // picture={album.ico_url}
        />
      )
    
    return (
      <>
        { 
          modalOpened &&
            <Portal>
              <div className='modalChooseOverlay'>
                <div className='modalChooseWindow'>
                  <div className='modalChooseHeader'>
                    <div className='head3 modalChooseTitle'>
                      Выберите альбом
                    </div>
                    <button
                      className='modalChooseHeaderButton'
                      onClick={e => closeModal(modalType)}
                    />
                  </div>
                  {/* <PerfectScrollbar component='div' style={{ right: 0 }}> */}
                    <div className='modalChooseBody'>
                      <div className='searchAndNewAlbum'>
                        <ChooseAlbumSearch/>
                      </div>
                      <div className='albums'>
                        {storiesAlbums}
                      </div>
                    </div>
                  {/* </PerfectScrollbar> */}
                  <div className='modalChooseFooter'>
                    <div className='modaChooseContentBottom'>
                      <button
                        className='modaChooseCancelBtn'
                        onClick={e => closeModal(modalType)}
                      >
                        Отмена
                      </button>

                      <ButtonContainer>
                        Выбрать
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </Portal>
        }
      </>
    );
  };
}

const mapStateToProps = state => {
  return {
    sessionID: state.session.sessionID,
    albums: state.albums.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: type => {
      dispatch(modalClose(type));
    },
    downloadAlbums: () => {
      dispatch(getAlbums());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalChooseAlbum);
