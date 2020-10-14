import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Stories.sass';

import { ReactComponent as DownloadIcon } from '../../../assets/Images/dropdownAction/downloadIcon.svg';
import { ReactComponent as ShareIcon } from '../../../assets/Images/dropdownAction/shareIcon.svg';
import { ReactComponent as CommentsIcon } from '../../../assets/Images/general/commentsIcon.svg';

export default class StoriesItem extends Component {
  render() {
    
    const { 
      id,
      content,
      date,
      title,
      author,
      city,
      tags,
      picture
    } = this.props;


    let options = {
      dateStyle: 'medium',
      timeStyle: 'short'
    };

    const dateReadable = new Date(date).toLocaleString('en-US', options);

    return (
      <div className='story'>
        <Link
          className='story__photo'
          to={{ 
            pathname: `/stories/${id}`,
            state: {
              id: {id},
              content: {content},
              date: {date},
              title: {title},
              author: {author},
              city: {city},
              tags: {tags},
              picture: {picture}
            }
          }}
        >
          <img src={picture} alt='storyPicture'/>
        </Link>
        <div className='story__info'>
          <Link
            className='head2 story__title'
            to={{
              pathname: `/stories/${id}`,
              state: {
                id: {id},
                content: {content},
                date: {date},
                title: {title},
                author: {author},
                city: {city},
                tags: {tags},
                picture: {picture}
              }
            }}
          >
            {title}
          </Link>
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
