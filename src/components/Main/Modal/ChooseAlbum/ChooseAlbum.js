import React, { Component } from 'react';

import styled from 'styled-components';

import { connect } from 'react-redux';

import { getAlbums } from '../../../../actions/actionAlbums';
import { modalClose } from '../../../../actions/modalClose';

import FormPortal from '../../UserRegistrationPortal';
import { ButtonContainer } from '../../Button';

import ChooseAlbumSearch from './ChooseAlbumSearch';
import AlbumItem from './AlbumItem';

import './ChooseAlbum.sass';

import axios from 'axios';

class ModalChooseAlbum extends Component {

  render() {
    const { modalOpened, modalType, closeModal, albums } = this.props;

    console.log(this.props);

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
        { modalOpened &&
          <FormPortal>

              <div className='modalOverlay'>

                <div className='modalWindow'>

                  <div className='modalHeader'>
                  <h1>Выберите альбом</h1>
                    <button
                      className='times'
                      onClick={e => closeModal(modalType)}
                    />
                  </div>



                  <div className='modalBody'>
                    <div className='searchAndNewAlbum'>
                      <ChooseAlbumSearch/>
                    </div>
                    <div className='albums'>
                      {storiesAlbums}
                    </div>

                      

                      <div className='modal-content-bottom'>
                        <button
                          className='cancel-btn'
                          onClick={closeModal}
                        >
                          Отмена
                        </button>

                        <ButtonContainer>
                          Выбрать
                        </ButtonContainer>
                      </div>

                  </div>
                  <div className='modalFooter' />
                </div>
              </div>

          </FormPortal>
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
