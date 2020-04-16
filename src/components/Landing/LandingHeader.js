import React from 'react';
import './LandingHeader.sass';
import landingHeaderImg from './png/landing-header.png';
import { ReactComponent as HeaderArrowSVG } from './svg/header_arrow.svg';

function LandingHeader() {
  function toForm(e){
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }

  return (
    <div className="landing-header">
    	<div className="header-content">
        <h1>оцифруйте свой <br/>семейный архив! <br/>Создайте свое наследие!</h1>
        <span>Online сервис по сохранению семейной истории</span>
        <button className="headerArrowBtn" onClick={ toForm }>
          <HeaderArrowSVG />
        </button>
    	</div>
    	<div className="headerSVG-div">
        <img src={landingHeaderImg} alt="header picture"/>
      </div>
    </div>
  );
}

export default LandingHeader;