import React, { Component } from 'react';
import './AlbumsItem.sass';
import {ReactComponent as DownloadIcon} from '../svg/downloadIcon.svg';
import {ReactComponent as ShareIcon} from '../svg/shareIcon.svg';
import {ReactComponent as CommentsIcon} from '../svg/commentsIcon.svg';


export default class AlbumsItem extends Component {
  handleItemSelect(id) {
    if (this.props.isSelected) {
      this.props.selectId(id, 'del');
    } else {
      this.props.selectId(id, 'add');
    }
  }

  render() {
    const checkMark = '\u2713';

    const desc = this.props.isDesc ? <div className='itemDescription text1'>Ipsum ex commodo ad ad ipsum non quis laborum adipisicing reprehenderit aliqua veniam excepteur.</div> : '';

    const img = this.props.isImg ? <img className={'img ' + this.props.gridType + '_img'} src={this.props.url} alt='gallery_pic'/> : '';

    const selectBTN =
      <button className={
        'select-button ' + this.props.gridType + '_select-button ' + (this.props.isSelected ? 'selected-button' : '')
      } onClick={() => this.handleItemSelect(this.props.id)}
      />;

    const imgDiv =
      <div className={'img-div ' + this.props.gridType + '_img-div'}>
        {img}
        {selectBTN}
      </div>;
    return (
      <div className={'albumItem ' + this.props.view}>
        {imgDiv}
        <div className='contentZone flex-column'>
          <span className={this.props.gridType === 'bigColView' ? 'head3 font3' : 'head3 font2'}>
            {this.props.name}
          </span>
          <div className='AutorDate'>
            <div className='text3'>{this.props.autor}</div>
            <div className='text3'>{this.props.date}</div>
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

