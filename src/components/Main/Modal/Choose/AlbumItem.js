import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './AlbumItem.sass'

import { connect } from 'react-redux';

import { getAlbums } from '../../../../actions/actionAlbums';
import { modalClose } from '../../../../actions/modalClose';


export default class AlbumItem extends Component {
  render() {
    const { id, title, author, date, content, picture, modalOpened, modalType, closeModal, albums } = this.props;

    return (
      <div className='albumItem'>
        <div className='albumItem__picture'>
          {/* <img src={picture} alt='storyPicture'/>
           */}
           
         




        </div>

        <Link className='albumItem__title' to={`/albums/${id}`}>
          {title}
        </Link>
      </div>
    );
  }
}
