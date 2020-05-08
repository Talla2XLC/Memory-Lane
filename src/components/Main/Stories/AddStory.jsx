import React, { Component } from 'react';
import './Stories.sass';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default class AddStory extends Component {
  render() {
    return (
      <PerfectScrollbar>
        <div className='contentContainer'>
          <div className='addStory__desk'>
            <div className='font1Light'>Добавьте заголовок к вашей истории</div>
            <div>тег</div>
            <div className='font1Light'>{this.props.autor}</div>
            <div className='font1Light'>{this.props.date}</div>
            <div>country</div>
          </div>
          <div className='addStory__photo'>
            <img className='addPhotoItem' src='https://picsum.photos/168/168' />
            <img className='addPhotoItem' src='https://picsum.photos/168/168' />
            <img className='addPhotoItem' src='https://picsum.photos/168/168' />
            <img className='addPhotoItem' src='https://picsum.photos/168/168' />
            <img className='addPhotoItem' src='https://picsum.photos/168/168' />
          </div>
          <textarea className='addStory__textArea' />
          <button>Опубликовать</button>
        </div>
      </PerfectScrollbar>
    );
  }
}
