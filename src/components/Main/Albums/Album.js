import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Album extends Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadFileHandler = this.uploadFileHandler.bind(this);
    this.state = {
      loading: true,
      images: [],
      isEmpty: true,
      imagesToUpload: []
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const { albumId, token } = this.props;

    this.setState({ loading: true });

    axios
      .post(
        'http://api.memory-lane.ru/get/images',
        {
          'id_album': albumId
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        })
      .then(res => {
        if (res.data.result) {		// res.status === 200
          this.setState({ loading: false });
          console.log(res.data);
          if (res.data.content) {
            this.setState({ images: res.data.content });
            this.setState({ isEmpty: false });
            console.log(true);
          } else {
            console.log(false);
            this.setState({ isEmpty: true });
          }
        } else {	// res.status !== 200
          console.error(res.data.error);
          alert(`${res.data.error}`);
        }
      })
      .catch(error => console.error(error));
  }

  uploadImage() {
    const { albumId, token } = this.props;
    const { imagesToUpload } = this.state;
    const data = new FormData()
    for (let x = 0; x < imagesToUpload.length; x++) {
      data.append('images[]', this.state.imagesToUpload[x]);
    }
    data.append('id_album', albumId);
    
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
            this.getImages();
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

  render() {
    const { isEmpty } = this.state;
    const { albumId } = this.props;
    const userAlbum = this.props.album;
    const albumItem = userAlbum.find( item => item.id === albumId);

    return (
      <>
        <div>
          Название альбома:
          {albumItem.album_name}
        </div>
        <div>
          Описание альбома: 
          {albumItem.description}
        </div>
        <div className='photoContainer'>
          {
            isEmpty ?
              <span>В данном альбоме ещё нет фото</span>
              :
              <span>Картинки</span>
          }
        </div>
        <input type='file' name='file' multiple onChange={this.uploadFileHandler}/>
        <button onClick={this.uploadImage}>
          Загрузить фото
        </button>
      </>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    album: Object.values(state.albums.albums.content),
    albumId: props.match.params.id,
    token: state.session.sessionID
  };
};

export default connect(mapStateToProps)(Album);
