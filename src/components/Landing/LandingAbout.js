import React, { Component }             from 'react';
import styled                           from 'styled-components';
import { ReactComponent as FamilySVG }  from './svg/about_family_icon.svg';

export default class LandingAbout extends Component {
  render() {
    return (
      <AboutWrapper>
        <h2 className='about-title'>о проекте</h2>
        <div className='about'>
          <div className='about-icon'>
            <FamilySVG />
          </div>
          <div className='about-desc'>
            Большинство людей знают информацию только о 1,5-2х поколениях своих предков.<br />
            Знают о родителях, немного бабушках, дедушках<br /> и очень мало о прадедах.<br />
            Столько же будут знать о нас следующие поколения, если ничего не менять?
          </div>
        </div>
      </AboutWrapper>
    );
  }
}

const AboutWrapper = styled.div`
background: #FFFFFF;
width: 1440px;

.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
}

.about-title {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 150%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000000;
}

.about-icon {
  // width: 934.45px;
  // height: 700px;
  margin-left: -73px;
}

.about-desc {
  align-self: center;
  width: 560px;
  height: 429px;
  margin-right: 138px;
  text-align: left;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: #000000;
}
`;