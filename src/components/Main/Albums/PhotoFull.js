import React, { Component } from 'react';
import './PhotoFull.sass';
import {ReactComponent as DownloadIcon} from '../svg/downloadIcon.svg';
import {ReactComponent as ShareIcon} from '../svg/shareIcon.svg';
import {ReactComponent as CommentsIcon} from '../svg/commentsIcon.svg';


export default class PhotoFull extends Component {

  render() {
    const { isDesc, isImg, gridType, url, id, view, name, autor, date } = this.props.location.props;
    const desc = isDesc ? <div className='itemDescription text1'>Ipsum ex commodo ad ad ipsum non quis laborum adipisicing reprehenderit aliqua veniam excepteur.</div> : '';

    const img = isImg ? <img className={'img ' + gridType + '_img'} src={url} alt='gallery_pic'/> : '';

    const imgDiv =
      <div className={'img-div ' + gridType + '_img-div'}>
        {img}
      </div>;
    return (
      <div className={'albumItem ' + view}>
        {imgDiv}
        <div className='contentZone flex-column'>
          <span className='bigColView'>
            {name}
          </span>
          <div className='AuthorDate'>
            <div className='text3'>{autor}</div>
            <div className='text3'>{date}</div>
          </div>
          {desc}
          <div className='albumIcons'>
            <DownloadIcon/>
            <ShareIcon className='iconsMargin'/>
            <CommentsIcon/>
          </div>
        </div>
      </div>
    );
  }
}
