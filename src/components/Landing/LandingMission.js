import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon1 } from './svg/icon_1.svg';
import { ReactComponent as Icon2 } from './svg/icon_2.svg';
import { ReactComponent as Icon3 } from './svg/icon_3.svg';
import Background from './svg/background.svg';

export default class LandingMission extends Component {
    render() {
        return (
            <MissionWrapper>             
                <h3 className='textBasic title'>мы поможем</h3>
                <div className='mission' style={{ backgroundImage: `url(${Background})`}}>
                    <div className='missionItem'>
                        <div className='missionItem__img'>
                            <Icon1/>
                        </div>
                        <span className='description'>записать вашу историю<br/>для потомков</span>
                    </div>
                    <div className='missionItem'>
                        <div  className='missionItem__img'>
                            <Icon2/>
                        </div>
                        <span className='description'>сохранить семейные фотографии<br/>в надёжном месте</span>
                    </div>
                    <div className='missionItem'>
                        <div className='missionItem__img'>
                            <Icon3/>
                        </div>
                        <span className='description'>поделится историями<br/>и фотографиями<br/>с друзьями и родными</span>
                    </div>
                    <div className='missionItem'>
                        <div  className='missionItem__img'>
                            <Icon2/>
                        </div>
                        <span className='description'>найти конкретного<br/>человека среди всех ваших<br/> фотографий</span>
                    </div>             
                </div> 
            </MissionWrapper>
        );
    }
}

const MissionWrapper = styled.div`

.description {
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: #000000;
  text-align: center;
}

.title {
  font-family: Rubik;
  font-weight: bold;
  font-size: 44px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #0B0754;
  text-align: left;
  padding: 200px 0 0 64px;
}

.mission {
  background-repeat: no-repeat;
  height: 607px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly ;
  padding: 200px 133px 169px 133px;
  box-sizing: border-box;
}

.missionItem__img {
  max-height: 103px;
  margin-bottom: 60px;
}
`;

