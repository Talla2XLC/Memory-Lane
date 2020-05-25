import React, { Component } from 'react';
import {connect} from 'react-redux';
import SelectNewPhoto from './SelectNewPhoto';
import { Redirect } from 'react-router-dom';

import './UploadPhoto.sass';
import axios from 'axios';

class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadFileHandler = this.uploadFileHandler.bind(this);
    this.setDropdownImages = this.setDropdownImages.bind(this);

    this.state = {
      selectedAlbum: this.props.location.state ? this.props.location.state.albumId : Object.values(this.props.albums)[0].id,
      dropdownOpened: false,
      imagesToUpload: [],
      uploadComplete: false
    };
  }

  uploadImage() {
    const { token } = this.props;
    const { imagesToUpload, selectedAlbum } = this.state;
    const data = new FormData();
    for (let x = 0; x < imagesToUpload.length; x++) {
      data.append('images[]', imagesToUpload[x]);
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
            this.setUploadComplete();
          } else {	// res.status !== 200
            console.error(res);
            alert(`${res.data.error}`);
          }
        })
        .catch(error => console.error(error));
  }

  uploadFileHandler(event) {
    this.setState({
      imagesToUpload: event.target.files
    });
  }

  setDropdownImages(files) {
    this.setState({
      imagesToUpload: files
    });
  }

  handleToggleDropdown = () => {
    this.setState({ dropdownOpened: !this.state.dropdownOpened });
  }

  handleDropdownSelect = id => {
    this.setState({ selectedAlbum: id, dropdownOpened: false });
  }

  setUploadComplete() {
    this.setState({ uploadComplete: true });
  }

  render() {
    const { dropdownOpened, selectedAlbum, imagesToUpload, uploadComplete } = this.state;
    const { albums } = this.props;

    return (
      <>
        <SelectNewPhoto
          albums={albums}
          dropdownOpened={dropdownOpened}
          selectedAlbum={selectedAlbum}
          imagesToUpload={imagesToUpload}
          toggleDropdown={this.handleToggleDropdown}
          dropdownSelect={this.handleDropdownSelect}
          setFilesToUpload={this.uploadFileHandler}
          setDropdownImages={this.setDropdownImages}
          startUpload={this.uploadImage}
        />
        { uploadComplete && <Redirect to = { `/albums/${selectedAlbum}` } /> }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums.albums,
    token: state.session.sessionID
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhoto);

