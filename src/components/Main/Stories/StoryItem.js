import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Stories.sass';

import { ReactComponent as DownloadIcon } from '../svg/downloadIcon.svg';
import { ReactComponent as ShareIcon } from '../svg/shareIcon.svg';
import { ReactComponent as CommentsIcon } from '../svg/commentsIcon.svg';

export default class StoriesItem extends Component {
  render() {
    const { id, title, author, date, content, picture } = this.props;
    const dateReadable = new Date(date).toLocaleString();

    return (
      <div className='story'>
        <Link className='storyPictureLink' to={`/stories/${id}`}>
          <img className='story__photo' src={picture} alt='storyPicture'/>
        </Link>
        
        <div className='story__info'>
          <Link className='storyLink' to={`/stories/${id}`}>
            <div className='head2'>{title}</div>
            <span className='text3 story__author'>{author}</span>
            <span className='text3 '>{dateReadable}</span>
            <div className='story__desk text1'>{content}</div>
          </Link>

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
