import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Stories.sass';

import { ReactComponent as DownloadIcon } from '../svg/downloadIcon.svg';
import { ReactComponent as ShareIcon } from '../svg/shareIcon.svg';
import { ReactComponent as CommentsIcon } from '../svg/commentsIcon.svg';

export default class StoriesItem extends Component {
  render() {
    const { id, title, author, date, content, picture } = this.props;

    let options = {
      dateStyle: 'medium',
      timeStyle: 'short'
    };

    const dateReadable = new Date(date).toLocaleString('en-US', options);

    return (
      <div className='story'>
        <img className='story__photo' src={picture} alt='storyPicture'/>
        <div className='story__info'>
          <div className='head2 story__title'>{title}</div>
          <div className='text3 story__authorDateContainer'>
            <div className='story__author'>{author}</div>
            <div className='story__date'>{dateReadable}</div>
          </div>
          <div className='text1 story__content'>{content}</div>
          <div className='story__icons'>
            <DownloadIcon/>
            <ShareIcon className='iconsMargin'/>
            <CommentsIcon/>
          </div>
        </div>
      </div>
    );
  }
}
