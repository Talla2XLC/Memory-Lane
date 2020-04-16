import React, { Component }             from 'react';
import styled                           from 'styled-components';
import { ReactComponent as FamilySVG }  from './svg/about_picture.svg';

const LandingAbout = () => {
  return (
    <AboutWrapper>
      <h2 className='textBasic title'>о проекте</h2>
      <div className='about'>

        <div className='aboutItem__img'>
          <FamilySVG />
        </div>

        <div className='aboutItem__desc'>
          <div className='descItem__text1 textBasic'>
            Большинство людей знают информацию максимум<br />
            о двух поколениях своих предков. Знают о<br />
            родителях, немного о бабушках, дедушках и очень<br />
            мало о более глубоких корнях.
            
            <span className='descItem__text1span textBasic'>
              Как исправить эту грустную тенденцию?
            </span>
            
            Для этого мы предлагаем свой сервис,<br />
            ознакомиться с ним можно ниже.
          </div>

          <div className='descItem__text2 textBasic'>
            MEMORY LANE  позволяет оцифровать семейный архив и сохранить историю своей жизни<br /> 
            на долгие годы
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
background: #FFFFFF;
width: 1440px;

.textBasic {
  font-style: normal;
  line-height: 150%;
}

.title {
  width: 703px;
  height: 46px;
  margin-left: 64px;
  text-align: left;
  font-family: Rubik;
  font-weight: bold;
  font-size: 44px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #0B0754;
}

.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 156px;
}

.aboutItem__img {
  width: 643px;
  height: 436px;
  margin-left: 64px;
}

.aboutItem__desc {
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 460px;
  width: 640px;
  margin-left: 31px;
}

.descItem__text1 {
  height: 284px;
  font-family: Roboto;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 0.05em;
  color: #000000;
  margin-top: 28px;
}

.descItem__text1span {
  display: block;
  margin: 12px 0;
}

.descItem__text2 {
  height: 106px;
  font-family: Rubik;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.04em;
  color: #0B0754;
  margin-top: 52px;
  margin-left: 2px
}
`;

export default LandingAbout;