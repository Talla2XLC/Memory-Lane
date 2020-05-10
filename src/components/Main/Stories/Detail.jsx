import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './Stories.sass';
import { detailStory } from './storiesData';

function Detail() {
  return (
    <PerfectScrollbar component='div'>
      <div className='contentContainer details' >
        <img className='details__photo' src={detailStory.url} alt='detailsPhoto'/>
        <div className='details__right'>
          <div className='main1'>Заголовок</div>
          <div>тег</div>
          <div className='text3'>{detailStory.autor}</div>
          <div className='text3'>{detailStory.date}</div>
          <div>country</div>
          <div className='text1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit. </div>
          <div className='action'>
            <div>Редактировать</div>
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
}

export default Detail;


