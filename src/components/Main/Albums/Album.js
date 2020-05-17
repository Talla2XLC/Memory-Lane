import React, { Component } from 'react';
import {connect} from 'react-redux';


class Album extends Component {
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
