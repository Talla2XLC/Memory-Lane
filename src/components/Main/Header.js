import React, {Component} from 'react';
import Search from './Header/Search.jsx';
import Notice from './Header/Notice.jsx';
import SetingsMenu from './Header/Settings_menu.jsx';
import AddSection from './Header/Add_section.jsx';

import styled from 'styled-components';

export default class Header extends Component {
  // componentDidMount(){
  //   this.props.headerHeight(document.querySelector('.headerDiv').offsetHeight);
  // }

  render() {
    return (
      <HeaderWrapper className='headerDiv'>
        <div className='header__top'>
          <a href='/'>
            <div className='logo logoFont'>Memory Lane</div>
            <div className='logoDot'/>
          </a>
          <Notice />
          <div className='userName'>Иван Иванов</div>
          <div className='userAvatar'/>
          <SetingsMenu/>
        </div>
        <div className='header__bottom'>
          <Search/>
          <AddSection/>
        </div>
      </HeaderWrapper>
    );
  }
}  

const HeaderWrapper = styled.div`
z-index: 5;
margin-left: auto;
margin-right: auto;
width: 1140px;
.logo {
  float: left;
  margin-right: 6px;
}
.logoDot {
  width: 7px;
  height: 7px;
  background: #5DB07B;
  border-radius: 10px;
  float: left;
  margin-top: 24px;
}

.header__top {
  border-bottom: 1px solid rgba(130, 132, 130, 0.3);
  margin-bottom: 30px;
  display: flex;
  padding: 12px 0;
  box-sizing: border-box;
}


.userAvatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFD1A9;
}

.userName {
  margin: 0 30px 0 15px;
}


.header__bottom {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  height: 70px;
}

.header__top div, 
header__bottom div {
  align-self: center;
  justify-content: space-evenly;
}

.header__top div:nth-child(2) {
  margin-left: auto
}

.header__bottom div:nth-child(2) {
  padding: 0 4px;
  position: fixed;
}

`;
