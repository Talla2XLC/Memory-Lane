import React                            from 'react';
import styled                           from 'styled-components';
import { ReactComponent as FamilySVG }  from './svg/about_picture.svg';

const LandingAbout = () => {
  return (
    <AboutWrapper>
      <h2 className='textBasic title about-title'>о проекте</h2>
      <div className='about'>

        <div className='aboutItem__img'>
          <FamilySVG />
        </div>

        <div className='aboutItem__desc'>
          <div className='descItem__text1 textBasic'>
            Большинство людей знают информацию <br />
            максимум о двух поколениях своих предков. <br />
            Знают о родителях, немного о бабушках, дедушках <br />
            и очень мало о более глубоких корнях.
            
            <span className='descItem__text1span textBasic'>
              Как исправить эту грустную тенденцию?
            </span>
            
            Для этого мы предлагаем свой сервис,<br />
            ознакомиться с ним можно ниже.
          </div>

          <div className='descItem__text2 textBasic'>
            MEMORY LANE позволяет оцифровать семейный архив и сохранить историю своей жизни<br /> 
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
padding: 0 60px 0 65px;

.textBasic {
  font-style: normal;
  line-height: 150%;
}

.title {
  width: 703px;
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
}

.aboutItem__desc {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 640px;
  margin-left: 31px;
}

.descItem__text1 {
  font-family: Roboto;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.05em;
  color: #000000;
  margin-top: 28px;
}

.descItem__text1span {
  display: block;
  margin: 18px 0;
}

.descItem__text2 {
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