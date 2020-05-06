import React from 'react';
import './MainContent.sass';
import NewsFeed from './NewsFeed';

export default function MainContent() {
  return  <div className='MainContent'>
    <div className='MainContainer'>
      <div className='MainContent__inner basicItem'>

        <div className='MainContent__inner-item'>
          <p className='main2'>Здравствуйте!</p>
          <p className='mainText'>
            Давайте вместе создадим
            вашу историю, чтобы остаться
            в памяти у потомков!
          </p>
        </div>

        <div className='MainContent__inner-item'>
          <p className='mainText'>
            Чтобы увеличить лимит фотографий, измените тариф
          </p>
          <button className='mainButton'>Перейти</button>
        </div>

      </div>

      <div className='MainContent__wrap '>

        <div className='MainContent__wrap-item basicItem'>
          <p className='main1'>Не знаете с чего начать?</p>
          <p className='mainText'>
            Наши ежедневные задания помогут вам наполнить свою историю воспоминаниями
          </p>
          <button className='mainButton'>Перейти</button>
        </div>

        <div className='MainContent__wrap-item basicItem'>
          <p className='main1'>Пригласить друга</p>
          <p className='mainText'>
            Пригласите своего близкого человека, чтобы он стал частью вашей истории.
          </p>
          <button className='mainButton'> Пригласить</button>
        </div>

      </div>

      <div className='MainContent__inner basicItem'/>

      <div className='MainContent__main'/>
    </div>
    <NewsFeed/>;
  </div>;

}

