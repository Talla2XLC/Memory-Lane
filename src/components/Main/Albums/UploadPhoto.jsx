import React, { Component } from 'react';
import {ButtonContainer} from '../Button';
import {connect} from 'react-redux';
import DropdownAlbumsList from './DropdownAlbumsList';

import {ReactComponent as DropdownIcon} from './svg/dropdownArrow.svg';
import './UploadPhoto.sass';
import axios from "axios";

class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadFileHandler = this.uploadFileHandler.bind(this);

    this.state = {
      selectedAlbum: this.props.location.state ? this.props.location.state.albumId : '',
      dropdownOpened: false,
      images: [],
      imagesToUpload: []
    };
  }

  uploadImage() {
    const { token } = this.props;
    const { imagesToUpload, selectedAlbum } = this.state;
    const data = new FormData();
    for (let x = 0; x < imagesToUpload.length; x++) {
      data.append('images[]', this.state.imagesToUpload[x]);
    }
    data.append('id_album', selectedAlbum);

    if (imagesToUpload.length > 0)
      axios
        .post(
          'http://api.memory-lane.ru/upload/images',
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `${token}`
            }
          })
        .then(res => {
          if (res.data.result) {		// res.status === 200
            console.log(123);
          } else {	// res.status !== 200
            this.setState({ errorMessage: res.data });
            alert(`${res.data.error}`);
          }
        })
        .catch(error => console.error(error));
  }

  uploadFileHandler(event) {
    event.persist();
    this.setState({
      imagesToUpload: event.target.files
    });
  }

  handleShowDropdown = () => {
    this.setState({ dropdownOpened: !this.state.dropdownOpened });
  }

  handleDropdownSelect = id => {
    this.setState({ selectedAlbum: id, dropdownOpened: false });
  }

  render() {
    const { dropdownOpened, selectedAlbum } = this.state;
    const { albums } = this.props;
    const albumName = albums[selectedAlbum] ? albums[selectedAlbum].album_name : '';

    return (
      <div className='contentContainer'>
        <div className='addPhotoWrap'>
          <div className='head1 albumTitle'>
            Загрузка фотографий
          </div>
          <div className='albumName'>
            <div className='text1 albumDesc'>
              Альбом для загрузки фото
            </div>
            <div className='albums-select text1'>
              <span className='selected-album'>{ albumName ?? 'Новый альбом' }</span>
              <button className='dropdown-list-btn' onClick={this.handleShowDropdown}>
                <DropdownIcon />
              </button>
            </div>
            {dropdownOpened ?
              <DropdownAlbumsList
                currentAlbum={albumName ?? 'Новый альбом'} albums={albums}
                handleSelect={this.handleDropdownSelect}
              /> :
              ''
            }
          </div>
          <div className='addPhoto'>
            <div className='addPhoto__border' onChange={this.uploadFileHandler}>
              <input
                className='addPhoto-input'
                type='file'
                name='file'
                multiple onChange={this.uploadFileHandler}/>
              <div className='addPhoto__border_text head3'>Перетащите фотографию сюда
              </div>
            </div>
          </div>
          <div className='choicePhoto'>
            <div className='choicePhoto__line'>
              <div className='choicePhoto__line_lineLeft'/>
              <span className='text1'>или</span>
              <div className='choicePhoto__line_lineRight'/>
            </div>
            <div className='text1'>Выберите файлы со своего компьютера</div>
            <ButtonContainer className='choicePhoto__button' onClick={this.uploadImage}>Выбрать</ButtonContainer>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums.albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhoto);

