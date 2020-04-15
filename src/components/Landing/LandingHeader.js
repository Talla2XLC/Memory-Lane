import React from 'react';
import './LandingHeader.sass';
import { ReactComponent as HeaderSVG } from './svg/header.svg';
import { ReactComponent as HeaderArrowSVG } from './svg/header_arrow.svg';

function LandingHeader() {
  function arrowClick(e){
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
        <h3>Сервис</h3>
        <h1>Наследие</h1>
        <span>Создаем цифровой семейный <br/>архив</span>
        <button className="headerArrowBtn" onClick={ arrowClick }>
          <HeaderArrowSVG />
        </button>
    	</div>
    	<div className="headerSVG-div">
        <HeaderSVG />
      </div>
    </div>
  );
}

export default LandingHeader;