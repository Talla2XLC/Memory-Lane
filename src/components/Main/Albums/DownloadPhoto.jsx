import React, { Component } from 'react';
import {ButtonContainer} from '../Button';
import Sorting from '../Sorting';
import './DownloadPhoto.sass';

export default class DownloadPhoto extends Component {
  render() {
    return (
      <div className='contentContainer'>
        <Sorting/>
        <div className='downloadWrap'>
          <div className='main1 downloadText'>Здесь пока нет ни одной фотографии</div>
          <ButtonContainer className='downloadButton'>Загрузить</ButtonContainer>
        </div>
      </div>
    );
  }
}

