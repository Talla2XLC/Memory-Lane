import React, { Component } from 'react';
import { ReactComponent as Download } from '../Albums/svg/download.svg';
import { ReactComponent as Forward } from '../Albums/svg/forward.svg';
import './Stories.sass';

export default class StoriesItem extends Component {
  render() {

    return (
      <div className='story'>

        <img className='story__photo' src={this.props.url} alt='storiesImg' />
        <div className='istory__info'>
          <div className='font3'>Заголовок</div>
          <div className='story__action'>
            <Download />
            <Forward />
          </div>
          <div className='font1Light'>{this.props.autor}</div>
          <div className='font1Light'>{this.props.date}</div>

          <div className='desk font1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit. Dolor eiusmod irure deserunt voluptate irure et eu dolor qui aliqua cillum id. Mollit commodo exercitation aliquip nulla irure minim qui nulla deserunt sit id laboris. Amet quis incididunt eiusmod elit cillum sint eu ex eu labore consequat. Enim adipisicing excepteur officia cupidatat fugiat labore occaecat velit enim mollit.</div>
        </div>
      </div>
    );
  }
}
