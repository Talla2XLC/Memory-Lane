import React, { Component } from 'react';
import './Albums.sass';
import { ReactComponent as Area } from './svg/area.svg';
import { ReactComponent as Instagram } from './svg/instagram.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';
import { ReactComponent as Gmail } from './svg/gmail.svg';


export default class DownloadPhoto extends Component {
  render() {
    return (
      <div className='download'>
        <div className='download__text'> Загрузить фото </div>
        <Area className='area'/>
        <div className='download__text download__text_light'> Перетащите фотографию сюда<br/> или </div>
        <button className='download__button'>Выберете файл</button>
        <div className='import'>
          <div className='download__text download__text_light'> Импортировать </div>
          <Instagram/>
          <Facebook/>
          <Gmail/>
          <Gmail/>
        </div>
      </div>
    );
  }
}
