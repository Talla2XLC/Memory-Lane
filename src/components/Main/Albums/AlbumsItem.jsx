import React, { Component } from 'react';
import './AlbumsItem.sass';
import { ReactComponent as Download } from './svg/download.svg';
import { ReactComponent as Forward } from './svg/forward.svg';

export default class AlbumsItem extends Component {
  render() {
    const desc = this.props.isDesc ? <div className='itemDescription'>Ipsum ex commodo ad ad ipsum non quis laborum adipisicing reprehenderit aliqua veniam excepteur. Sint dolor Lorem cupidatat et adipisicing anim adipisicing velit. Ullamco mollit occaecat nisi amet pariatur ad labore reprehenderit est aute.</div> : '';
    const img = this.props.isImg ? <img className={'img ' + this.props.view + '_img'} src={this.props.url} alt='gallery_pic'/> : '';
    return (
      <div className={'albumItem ' + this.props.view}>
        {img}
        <div className='contentZone flex-column'>
          <span className='itemName'>{this.props.name}</span>
          <div className='icons'>
            <Download className='downloadIcon' />
            <Forward/>
          </div>
          <div className='itemAutor'>{this.props.autor}</div>
          <div className='itemDate'>{this.props.date}</div>
          {desc}
        </div>
      </div>
    );
  }
}

