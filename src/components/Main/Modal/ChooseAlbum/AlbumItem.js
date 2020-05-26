import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StoriesItem extends Component {
  render() {
    const { id, title, author, date, content, picture } = this.props;

    console.log(8, this.props)

    let options = {
      dateStyle: 'medium',
      timeStyle: 'short'
    };

    const dateReadable = new Date(date).toLocaleString('en-US', options);

    return (
      <div className='story' style={{width: '50px', height: '50px', border: '1px solid black'}}>
        <Link className='story__photo' to={`/stories/${id}`}>
          {/* <img src={picture} alt='storyPicture'/> */}
        </Link>
        {/* <div className='story__info'>
          <Link className='head2 story__title' to={`/stories/${id}`}>
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
        </div> */}
      </div>
    );
  }
}
