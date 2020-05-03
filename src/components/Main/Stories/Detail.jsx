import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ReactComponent as Download } from '../Albums/svg/download.svg';
import { ReactComponent as Forward } from '../Albums/svg/forward.svg';
import './Stories.sass';
import { storyData, detailStory } from './storiesData'
function Detail() {
  return (
<PerfectScrollbar component='div'>
        <div className='details' >
          <img className='details__photo' src={detailStory.url} />
          <div className='details__right'>
            <div className='font3'>Заголовок</div>
            <div>тег</div>
            <div className='font1Light'>{detailStory.autor}</div>
            <div className='font1Light'>{detailStory.date}</div>
            <div>country</div>
            <div className='font1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit. </div>
            <div className='action'>
              <div>Редактировать</div>
              <Download />
              <Forward />
            </div>
          </div>
          <div className='details__left'>
            <div className='details__title font3'>Заголовок</div>
            <div />
            <div className='desk font1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.</div>
          </div>
        </div>
      </PerfectScrollbar>
  )
}

export default Detail



