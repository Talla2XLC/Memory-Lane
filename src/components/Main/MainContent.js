import React from 'react';
import './MainContent.sass';
import NewsFeed from './NewsFeed';
import {ButtonContainer} from './Button.jsx';

export default function MainContent() {
  return  <div className='contentContainer'>
    <div className='mainContainer'>

      <div className='mainContainer__item div1 basicItem'>
        <div className='mainContainer__item_left'>
          <p className='main2'>Здравствуйте!</p>
          <p className='mainText textPosition'>
            Давайте вместе создадим<br/>
            вашу историю, чтобы остаться<br/>
            в памяти у потомков!
          </p>
        </div>
        <div className='mainContainer__item_right'>
          <p className='mainText textPosition'>
            Чтобы увеличить<br/> лимит фотографий,<br/> измените тариф
          </p>
          <ButtonContainer>Перейти</ButtonContainer>
        </div>
      </div>

      <div className='mainContainer__item div2 basicItem' >
        <p className='main1'>Не знаете с чего начать?</p>
        <p className='mainText textPosition'>
            Наши задания помогут вам наполнить историю воспоминаниями
        </p>
        <ButtonContainer>Перейти</ButtonContainer>
      </div>

      <div className='mainContainer__item div3 basicItem'>
        <p className='main1'>Пригласить друга</p>
        <p className='mainText textPosition'>
            Пригласите своего близкого человека,<br/> чтобы он стал частью вашей истории.
        </p>
        <ButtonContainer> Пригласить</ButtonContainer>
      </div>

      <div className='mainContainer__item div4 basicItem' />
    </div>
    <NewsFeed/>
   </div>;
}
