import React from 'react';
import './LandingHeader.sass';
import { ReactComponent as HeaderSVG } from './svg/header.svg';
import { ReactComponent as HeaderArrowSVG } from './svg/header_arrow.svg';

function LandingHeader() {
  return (
    <div className="landing-header">
    	<div className="header-content">
        <h3>Сервис</h3>
        <h1>Наследие</h1>
        <span>Создаем цифровой семейный <br/>архив</span>
        <button class="headerArrowBtn">
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