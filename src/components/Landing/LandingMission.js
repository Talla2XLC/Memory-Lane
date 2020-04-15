import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon1 } from './svg/icon_1.svg';
import { ReactComponent as Icon2 } from './svg/icon_2.svg';
import { ReactComponent as Icon3 } from './svg/icon_3.svg';

export default class LandingMission extends Component {
    render() {
        return (
            <MissionWrapper>
                <h3 className='textBasic title'>мы поможем вам</h3>
                <div className='mission'>
                    <div className='missionItem'>
                        <div className='missionItem__img'>
                            <Icon1/>
                        </div>
                        <span className='missionItem__desc textBasic'>записать свою историю <br/> для потомков</span>
                    </div>
                    <div className='missionItem'>
                        <div  className='missionItem__img'>
                            <Icon2/>
                        </div>
                        <span className='missionItem__desc textBasic'>хранить семейные фотографии<br/> в удаленном доступе</span>
                    </div>
                    <div className='missionItem'>
                        <div className='missionItem__img'>
                            <Icon3/>
                        </div>
                        <span className='missionItem__desc textBasic'>поделится историями <br/> и фотографиями с друзьями и родными</span>
                    </div>
                </div>
                <div className='application'>
                    <div className='leftContent'>
                        <h3 className='textBasic title title_application'>оставьте заявку</h3>
                        <div className='textBasic applicationDesc'>Чтобы быть первым пользователем<br/>   на нашем сервисе</div>
                    </div>
                    <button className='textBasic button'> заявка</button>
                </div>
            </MissionWrapper>
        );
    }
}

const MissionWrapper = styled.div`
background: #FFFFFF;
width: 1440px;
.textBasic {
  font-family: Rubik;
  font-weight: normal;
  font-size: 32px;
}

.title {
  font-weight: normal;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  &_application {
    text-align: left;
    margin-bottom: 40px;
  }
}

.mission {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 62px 133px 169px 133px;
  box-sizing: border-box;
}

.missionItem {
  max-width: 360px;
}

.missionItem__img {
  max-height: 103px;
  margin-bottom: 60px;
}

.missionItem__desc {
  text-align: center;
  color: #000000;
}

.application {
  height: 424px;
  background-color: #DEEAF0;
  padding: 120px 140px
}

.applicationDesc {
  @extend .text;
  text-align: left;
  color: #000000;
}

.leftContent {
  float: left
}

.button {
  width: 300px;
  height: 80px;
  float: right;
  margin-top: 114px;
  background: #3441B2;
  border-radius: 100px;
  letter-spacing: 0.04em;
  color: #FFFFFF;
}

.application {
  height: 277px;
  background-color: #DEEAF0;
  padding: 120px 140px
}
`;

