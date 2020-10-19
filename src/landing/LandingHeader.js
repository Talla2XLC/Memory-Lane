import React from 'react';
import './LandingHeader.sass';
import LandingNav from './LandingNav.js';
import landingHeaderImg from './jpg/header-img.jpg';

function LandingHeader() {
  function toForm(e){
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 6000, 
      behavior: "smooth"
    });
  }

  return (
    <div className="landing-header">
      <div className="header-shape" />
      <LandingNav />
    	<div className="header-content">
        <div className="header-content-txt">
          <h1>оцифруйте свой <br/>семейный архив!</h1>
          <span>СОХРАНЯЙТЕ САМЫЕ ВАЖНЫЕ МОМЕНТЫ ЖИЗНИ<br/> с ОНлайн-сервисОМ по ХРАНЕНИЮ семейной истории</span>
          <button className="btn btn-danger header-btn" onClick={ toForm }>
            Создать
          </button>
        </div>
        <div className="header-content-img">
          <img src={landingHeaderImg} alt="header_img"/>
        </div>
    	</div>    	
    </div>
  );
}

export default LandingHeader;
