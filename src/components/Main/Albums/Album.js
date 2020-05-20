import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
    const { album, token } = this.props;

    this.setState({ loading: true });

    axios
      .post(
        'http://api.memory-lane.ru/get/images',
        {
          'id_album': album.id
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
            this.setState({ images: Object.values(res.data.content) });
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
    const { album, token } = this.props;
    const { imagesToUpload } = this.state;
    const data = new FormData();
    for (let x = 0; x < imagesToUpload.length; x++) {
      data.append('images[]', this.state.imagesToUpload[x]);
    }
    data.append('id_album', album.id);
    
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
    const { isEmpty, images } = this.state;
    const { album } = this.props;

    const imagesItem = images.map(image =>
      (
        <Link className={'image-link'} key={image.id} to={`/image/${image.id}`}>
          <img src={image.urls} alt={album.album_name + '_' + image.photo_name}/>
          <div>
            {image.photo_name}
          </div>
        </Link>
      )
    );

    return (
      <>
        <div>
          Название альбома:&nbsp;
          {album.album_name}
        </div>
        <div>
          Описание альбома:&nbsp;
          {album.description}
        </div>
        {
          isEmpty ?
            <span>В данном альбоме ещё нет фото</span>
            :
            <div className='photoContainer'>
              { imagesItem }
            </div>
        }
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
    album: state.albums.albums[props.match.params.id],
    token: state.session.sessionID
  };
};

export default connect(mapStateToProps)(Album);
