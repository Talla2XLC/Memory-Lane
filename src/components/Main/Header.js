import React, {Component} from 'react';
import Search from './Header/Search';
import Notice from './Header/Notice';
import SettingsMenu from './Header/Settings_menu';
import AddSection from './Header/Add_section';
import AvatarButton from './Header/AvatarButton';

import styled from 'styled-components';
import {connect} from 'react-redux';

class Header extends Component {
  fetchUserName(user) {
    if (user.first_name || user.last_name) {
      return ((user.first_name ? user.first_name : '') + ' ' + (user.last_name ? user.last_name : ''));
    }
    return user.email;

  }

  render() {
    const { currentUser } = this.props;
    console.log(currentUser);

    return (
      <HeaderWrapper className='headerDiv'>
        <div className='header__top'>
          <a href='/'>
            <div className='logo logoFont'>Memory Lane</div>
            <div className='logoDot'/>
          </a>
          <Notice />
          <div className='userName'>{this.fetchUserName(currentUser)}</div>
          <AvatarButton gender={currentUser.gender}/>
          <SettingsMenu/>
        </div>
        <div className='header__bottom'>
          <Search/>
          <AddSection/>
        </div>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userInfo.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderWrapper = styled.div`
z-index: 5;
margin-left: auto;
margin-right: auto;
width: 1140px;
.logo {
  float: left;
  margin-right: 6px;
  margin-left: 45px;
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
  background: #FFD1A9;
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
