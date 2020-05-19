import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


class Album extends Component {
  state = {
    loading: true,
    images: []
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const { albumId } = this.props;

    this.setState({ loading: true });

    axios
      .post(
        'http://api.memory-lane.ru/get/images',
        {
          'id_album': albumId
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      .then(res => {
        if (res.data.result) {		// res.status === 200
          this.setState({ images: res.data });
          this.setState({ loading: false });
        } else {	// res.status !== 200
          console.error(res.data.error);
          alert(`${res.data.error}`);
        }
      })
      .catch(error => console.error(error));
  }

  render() {
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
        </div>
        <button>
          Добавить фото
        </button>
      </>
    );
  }
}


const mapStateToProps = (state, props) => {
  // console.log(props.match.params.id)
  return {
    album: Object.values(state.albums.albums.content),
    albumId: props.match.params.id
  };
};

export default connect(mapStateToProps)(Album);
