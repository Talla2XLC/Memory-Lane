import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './Stories.sass';
// import { detailStory } from './storiesData';

export default class Detail extends Component {

  // /db/updateHistory

  render() {

    return (
      <PerfectScrollbar component='div'>
        <div className='contentContainer details'>
          <img className='details__photo' src='' alt='detailsPhoto'/>
          <div className='details__right'>
            <div className='main1'>Заголовок</div>
            <div>тег</div>
            <div className='text3'></div>
            <div className='text3'></div>
            <div>country</div>
            <div className='text1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit. </div>
            <div className='action'>
              <button>Редактировать</button>
            </div>
          </div>
          <div className='details__left'>
            <div className='details__title main1'>Заголовок</div>
            <div />
            <div className='desk text1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.</div>
          </div>
        </div>
      </PerfectScrollbar>
    );
  };
}
