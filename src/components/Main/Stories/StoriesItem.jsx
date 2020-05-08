import React, { Component } from 'react';
import './Stories.sass';
import {ReactComponent as DownloadIcon} from '../svg/downloadIcon.svg';
import {ReactComponent as ShareIcon} from '../svg/shareIcon.svg';
import {ReactComponent as CommentsIcon} from '../svg/commentsIcon.svg';

export default class StoriesItem extends Component {
  render() {
    return (
      <div className='story'>

        <img className='story__photo' src={this.props.url} alt='storiesImg' />
        <div className='story__info'>
          <div className='main1'>Заголовок</div>

          <span className='font1Light story__autor'>{this.props.autor}</span>
          <span className='font1Light '>{this.props.date}</span>

          <div className='story__desk font1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit. Dolor eiusmod irure deserunt voluptate irure et eu dolor qui aliqua cillum id. Mollit commodo exercitation aliquip nulla irure minim qui nulla deserunt sit id laboris. Amet quis incididunt eiusmod elit cillum sint eu ex eu labore consequat. Enim adipisicing excepteur officia cupidatat fugiat labore occaecat velit enim mollit.
          </div>
          <div className='story__icons'>
            <DownloadIcon/> <ShareIcon className='iconsMargin'/> <CommentsIcon/>
          </div>
        </div>
      </div>
    );
  }
}
