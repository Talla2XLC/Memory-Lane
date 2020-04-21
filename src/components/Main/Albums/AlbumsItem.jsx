import React, { Component } from 'react';
import './Albums.sass';
import { ReactComponent as Download } from './svg/download.svg';
import { ReactComponent as Forward } from './svg/forward.svg';

export default class AlbumsItem extends Component {
  render() {
    return (
      <div>
        <img className='img' src={this.props.url} />
        <span className='itemName'>{this.props.name}</span>
        <div className='icons'>
          <Download className='download' />
          <Forward/>
        </div>
        <div className='itemAutor'>{this.props.autor}</div>
        <div className='itemDate'>{this.props.date}</div>
        <div className='itemDescription'>Ipsum ex commodo ad ad ipsum non quis laborum adipisicing reprehenderit aliqua veniam excepteur. Sint dolor Lorem cupidatat et adipisicing anim adipisicing velit. Ullamco mollit occaecat nisi amet pariatur ad labore reprehenderit est aute.</div>
      </div>
    );
  }
}

