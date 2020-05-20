import React, { Component } from 'react';
import './PhotoItem.sass';
import {ReactComponent as DownloadIcon} from '../svg/downloadIcon.svg';
import {ReactComponent as ShareIcon} from '../svg/shareIcon.svg';
import {ReactComponent as CommentsIcon} from '../svg/commentsIcon.svg';
import { Link } from  'react-router-dom';


export default class AlbumsItem extends Component {
  handleItemSelect(id) {
    if (this.props.isSelected) {
      this.props.selectId(id, 'del');
    } else {
      this.props.selectId(id, 'add');
    }
  }

  render() {
    const { isDesc, isImg, gridType, url, isSelected, id, view, name, autor, date } = this.props;
    const desc = isDesc ? <div className='itemDescription text1'>Ipsum ex commodo ad ad ipsum non quis laborum adipisicing reprehenderit aliqua veniam excepteur.</div> : '';

    const img = isImg ? <img className={'img ' + gridType + '_img'} src={url} alt='gallery_pic'/> : '';

    const selectBTN =
      <button className={
        'select-button ' + gridType + '_select-button ' + (isSelected ? 'selected-button' : '')
      } onClick={() => this.handleItemSelect(id)}
      />;

    const imgDiv =
      <div className={'img-div ' + gridType + '_img-div'}>
        {img}
        {selectBTN}
      </div>;
    return (
      <div className={'albumItem ' + view}>
        <Link to={{
          pathname: '/photo/' + id,
          props: {
            isDesc: isDesc,
            isImg: isImg,
            gridType: gridType,
            url: url,
            id: id,
            view: view,
            name: name,
            autor: autor,
            date: date
          }
        }} >
          {imgDiv}
        </Link>
        <div className='contentZone flex-column'>
          <span className={gridType === 'bigColView' ? 'head3 font3' : 'head3 font2'}>
            {name}
          </span>
          <div className='AutorDate'>
            <div className='text3'>{autor}</div>
            <div className='text3'>{date}</div>
          </div>
          {desc}
          <div className='almunIcons'>
            <DownloadIcon/>
            <ShareIcon className='iconsMargin'/>
            <CommentsIcon/>
          </div>
        </div>
      </div>
    );
  }
}

