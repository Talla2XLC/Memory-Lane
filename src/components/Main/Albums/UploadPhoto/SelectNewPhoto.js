import React, { Component } from 'react';
import {ButtonContainer} from '../../generalUi/Button';
import DropdownAlbumsList from './DropdownAlbumsList';
import FileDropzone from './FileDropzone';
import FileInput from './FileInput';

import {ReactComponent as DropdownIcon} from '../../../../assets/Images/Album/dropdownArrow.svg';
import './SelectNewPhoto.sass';

class SelectNewPhoto extends Component {

  handleToggleDropdown = () => {
    this.props.toggleDropdown();
  }

  handleDropdownSelect = id => {
    this.props.dropdownSelect(id);
  }

  handleInputButton = e => {
    e.persist();
    this.props.setFilesToUpload(e);
  }

  handleDrop = files => {
    this.props.setDropdownImages(files);
  }

  handleUploadButton = e => {
    e.persist();
    this.props.startUpload(e);
  }

  render() {
    const { albums, dropdownOpened, selectedAlbum, imagesToUpload } = this.props;
    const albumName = selectedAlbum ? selectedAlbum.album_name : '';

    return (
      <div className='contentContainer'>
        <div className='addPhotoWrap'>
          <div className='head1 albumTitle'>
            Загрузка фотографий
          </div>
          <div className='upload-albumName'>
            <div className='text1 albumDesc'>
              Альбом для загрузки фото
            </div>
            <div className='albums-select text1'>
              <span className='selected-album'>{ albumName ?? 'Новый альбом' }</span>
              <button className='dropdown-list-btn' onClick={this.handleToggleDropdown}>
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
            <FileDropzone
              imagesToUpload={imagesToUpload}
              setFilesToUpload={this.handleDrop}
            />
          </div>
          <div className='choicePhoto'>
            <div className='choicePhoto__line'>
              <div className='choicePhoto__line_lineLeft'/>
              <span className='text1'>или</span>
              <div className='choicePhoto__line_lineRight'/>
            </div>
            <div className='text1'>Выберите файлы со своего компьютера</div>

            <FileInput
              imagesToUpload={imagesToUpload}
              setFilesToUpload={this.handleDrop}
            />

            {(imagesToUpload ? imagesToUpload.length : false) > 0 && selectedAlbum ?
              (<ButtonContainer className='choicePhoto__button' onClick={this.handleUploadButton}>Загрузить</ButtonContainer>) : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectNewPhoto;

