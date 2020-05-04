import React from 'react';
import './MainContent.sass';



export default function MainContent() {
  return <div className='MainContent'>

    <div className='container'>

      <div className='MainContent__inner'>
        <div className='MainContent__inner-item'>
          <h3 className='MainContent__inner-titel'>
            Здравствуйте!
          </h3>
          <p className='MainContent__inner-text'>
            Давайте вместе создадим
            вашу историю, чтобы остаться
            в памяти у потомков!
          </p>

        </div>

        <div className='MainContent__inner-item'>
          <h3 className='MainContent__inner-titel'>
            Инфографика лимита
            фотографий
          </h3>
          <div className='MainContent__inner-eliipse'>
            <span>50</span> из <span>200 </span> <br/>
            фотографий
          </div>

        </div>

      </div>

      <div className='MainContent__wrap'>
        <div className='MainContent__wrap-item'>
          <span>Не знаете с чего начать?</span>
          <p className='MainContent__wrap-text'>
            Наши ежедневные задания помогут вам наполнить свою историю воспоминаниями
          </p>
          <button className='MainContent__wrap-button'> Перейти</button>
        </div>

        <div className='MainContent__wrap-item'>
          <p className='MainContent__wrap-text'>
            Пригласите своего близкого человека, чтобы он стал частью вашей истории
          </p>
          <button className='MainContent__wrap-button'> Пригласить</button>
        </div>
      </div>

      <div className='MainContent__main'/>


    </div>



  </div>;
}

