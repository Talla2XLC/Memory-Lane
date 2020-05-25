import React, {Component} from 'react';
import './DropdownAlbumsList.sass';
import {ReactComponent as CurrentAlbumIco} from '../svg/currentAlbum.svg';
import {ReactComponent as NewAlbumIco} from '../svg/newAlbum.svg';
import {modalOpen} from 'actions/modalOpen';
import {connect} from 'react-redux';

class DropdownAlbumsList extends Component {
  handleItemSelect(id) {
    this.props.handleSelect(id);
  }

  render() {
    const { openModalAddAlbum } = this.props;
    const albums = typeof this.props.albums === 'object' ? Object.values(this.props.albums) : [];

    const newAlbumsItem =
      <button
        className='dropdown-albums-btn new-album-btn'
        onClick={openModalAddAlbum}
      >
        <NewAlbumIco className='dropdown-albums-svg' />
        Создать новый альбом
      </button>

    const albumsItems = albums.map( album =>
      (
        <button
          key={album.id}
          className='dropdown-albums-btn'
          onClick={() => this.handleItemSelect(album.id)}
        >
          <CurrentAlbumIco className='dropdown-albums-svg' />
          {album.album_name}
        </button>
      )
    );

    return (
      <div className='dropdown-albums text1'>
        { newAlbumsItem }
        { albumsItems }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModalAddAlbum: () => {
      dispatch(modalOpen('addAlbum'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownAlbumsList);
