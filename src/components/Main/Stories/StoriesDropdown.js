import React, { Component } from 'react';

import { modalOpen } from '../../../actions/modalOpen';
import { connect } from 'react-redux';

import './StoriesDropdown.sass';

class StoriesDropdownAlbumsList extends Component {
  render() {
    
    const { openModalChooseAlbum } = this.props;

    return (
      <div className='text3 stories-drop-down'>
        <button>
          Загрузить
        </button>
        <button
          onClick={openModalChooseAlbum}
         >
          Выбрать из альбомов
        </button>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModalChooseAlbum: e => {
      e.preventDefault();

      dispatch(modalOpen('chooseAlbum'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoriesDropdownAlbumsList);
