import React from 'react';
import './MainContent.sass';
import NewsFeed from './NewsFeed';
import { ButtonContainer } from './Button.jsx';
import { ReactComponent as HeaderImg } from './svg/Image.svg';
import {Link} from "react-router-dom";

export default function MainContent() {
  return <div className='contentContainer'>

    <div className='MainContent__header'>
      <div className='MainContent__header-info'>
        <h2 className='MainContent__header-titel'>
          Здравствуйте!
        </h2>
        <p className='MainContent__header-text'>
          Давайте вместе создадим
          вашу историю, чтобы остаться
          в памяти у потомков!
        </p>
        <Link to='/photo/add'><ButtonContainer white={false}>Загрузить фото</ButtonContainer></Link>
      </div>
      <div className='MainContent__header-imj'>
        <HeaderImg />
      </div>
    </div>
    <div className='mainContainer'>
      <div className='mainContainer__item div1 basicItem' >
        <p className='head2'>Не знаете с чего начать?</p>
        <p className='mainText textPosition'>
          Наши задания помогут вам наполнить историю воспоминаниями
        </p>
        <ButtonContainer className='btn-position'>Перейти</ButtonContainer>
      </div>
      <div className='mainContainer__item div2 basicItem'>
        <p className='head2'>Пригласить друга</p>
        <p className='mainText textPosition'>
          Пригласите своего близкого человека,<br /> чтобы он стал частью вашей истории.
        </p>
        <ButtonContainer className='btn-position'> Пригласить</ButtonContainer>
      </div>
      <div className='mainContainer__item div3 basicItem' >Реклама</div>
    </div>
    <NewsFeed />
  </div>;
}
