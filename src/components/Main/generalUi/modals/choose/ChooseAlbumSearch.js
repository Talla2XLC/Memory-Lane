import React, { Component } from 'react';
import { ReactComponent as IconSearch } from './svg/searchIcon.svg';

import './ChooseAlbumSearch.sass';

export default class ChooseAlbumSearch extends Component {

  render() {
    return (
      <div className='searchWrapper'>
        <div className='search'>
          <button className='search__submit'>
            <IconSearch />
          </button>
          <input
            className='search__input'
            type='search'
            placeholder='Поиск альбомов'
          />
        </div>
      </div>
    );
  };
}
