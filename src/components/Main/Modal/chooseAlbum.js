import React, { Component } from 'react';

import { modalClose } from '../../../actions/modalClose';
import { getAlbums } from '../../../actions/actionAlbums';

import { ButtonContainer } from '../Button';

import './ChooseAlbum.sass';

import { connect } from 'react-redux';

import axios from 'axios';

// const albumsItems = albums.map( album =>
//   (
//     <button
//       key={album.id}
//       className='dropdown-albums-btn'
//       onClick={openModalChooseAlbum}
//     >
//       {album.album_name}
//     </button>
//   )
// );

class ModalChooseAlbum extends Component {
  state = {
    albumName: ''
  }

  // addAlbum = () => {
  //   const { albumName } = this.state;
  //   const { downloadAlbums, closeModalChooseAlbum, sessionID } = this.props;

  //   axios
  //     .post(
  //       'http://api.memory-lane.ru/db/setAlbum',
  //       {
  //         'album_name': albumName
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `${sessionID}`
  //         }
  //       })
  //     .then(res => {
  //       if (res.data.result) {
  //         downloadAlbums();
  //         closeModalChooseAlbum('chooseAlbum');
  //       } else {
  //         console.error(res.data.error);
  //       }
  //     })
  //     .catch(error => console.error(error));
  // }

  // handleInput = e => {
  //   const { name, value } = e.target;

  //   this.setState({ [name]: value });
  // }

  render() {
    const { closeModalChooseAlbum } = this.props;
    const { albumName } = this.state;

    console.log(this.props);

    return (
      <div className='modal-choose-album-content'>
        <h1>Выберите альбом</h1>
        {/* <div className='modal-content-middle'>

        </div>
        <div className='modal-content-bottom'>
          <button
            className='cancel-btn'
            onClick={closeModalChooseAlbum}
          >
            Отмена
          </button>
          <ButtonContainer>
            Выбрать
          </ButtonContainer>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessionID: state.session.sessionID,
    albums: state.albums.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModalChooseAlbum: () => {
      dispatch(modalClose('chooseAlbum'));
    },
    downloadAlbums: () => {
      dispatch(getAlbums());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalChooseAlbum);
