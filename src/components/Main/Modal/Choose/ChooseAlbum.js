import React, {Component} from 'react';

import {Link} from 'react-router-dom';

// import PerfectScrollbar from 'react-perfect-scrollbar';

import {connect} from 'react-redux';

import {getAlbums} from '../../../../actions/actionAlbums';
import {modalClose} from '../../../../actions/modalClose';

import Portal from '../Portal';

import {ButtonContainer} from '../../Button';
import {ReactComponent as Plus} from '../../svg/plus.svg';

import ChooseAlbumSearch from './ChooseAlbumSearch';

import AlbumItem from './ChooseAlbumItemAlbum';

import './ChooseAlbum.sass';

import axios from 'axios';

class ModalChooseAlbum extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentAlbum: null,
      goToAlbumPhotos: false
    };

    this.chooseAlbum = this.chooseAlbum.bind(this);
    this.goToAlbumContent = this.goToAlbumContent.bind(this);
  }

  chooseAlbum() {
    this.setState({currentAlbum: this.props.album.id});

    console.log(this.state)
  }

  goToAlbumContent() {
    this.state.currentAlbum === null ? alert('Выберите альбом!') : this.setState({goToAlbumPhotos: true});
  }

  render() {
    const { modalOpened, modalType, closeModal, albums } = this.props;

    const storiesAlbums = Object.values(albums).map(album =>
        <AlbumItem 
          key={album.id}
          id={album.id}
          title={album.album_name}
          picture={album.ico_url}
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
                      {!this.state.goToAlbumPhotos ? 'Выберите альбом' : 'Выберите фотографию'}
                    </div>
                    <button
                      className='modalChooseHeaderButton'
                      onClick={e => closeModal(modalType)}
                    />
                  </div>
                  {/* <PerfectScrollbar component='div' style={{ right: 0 }}> */}
                    <div className='modalChooseBody'>
                      <div className='searchAndNewAlbum'>
                        {/* DIFFERENT PROPS TO THE SEARCH FOR PLACEHOLDER */}
                        <ChooseAlbumSearch/>
                        {!this.state.goToAlbumPhotos ?
                          <div className='searchAndNewAlbumAddAlbum'>
                            <Link to={'#'}>
                              Создать альбом
                            </Link>
                            <Link to={'#'}>
                              <Plus className='searchAndNewAlbumAddAlbumPlus'/>
                            </Link>
                          </div>
                        : null}
                      </div>
                      <div className='albumsAndPhotos'>
                        {!this.state.goToAlbumPhotos ? storiesAlbums : 'Render here Album content component'}
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

                      <ButtonContainer
                        onClick={this.goToAlbumContent}
                      >
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
