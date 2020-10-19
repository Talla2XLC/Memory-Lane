import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import { ReactComponent as AvatarFemale } from '../../../assets/Images/header/avatarFemale.svg';
import { ReactComponent as AvatarMale } from '../../../assets/Images/header/avatarMale.svg';
import { ReactComponent as AvatarUndefined } from '../../../assets/Images/header/avatarUndefined.svg';
import { ReactComponent as Profile } from '../../../assets/Images/header/Profile.svg';
import { ReactComponent as Setting } from '../../../assets/Images/header/Setting.svg';
import { ReactComponent as Reference } from '../../../assets/Images/header/Reference.svg';
import { ReactComponent as Exit } from '../../../assets/Images/header/Exit.svg';

class AvatarButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  fetchUserAvatar(gender) {
    switch (gender) {
    case 'male':
      return <AvatarMale/>;
    case 'female':
      return <AvatarFemale/>;
    default:
      return <AvatarUndefined/>;
    }
  }

  render() {
    const { gender } = this.props;

    return ( <>
      <AvatarWrapper onClick={this.showMenu}>
        {/* <Link className='avatar-button' to='/profile/'> */}
        {this.fetchUserAvatar(gender)}
        {/* </Link> */}
      </AvatarWrapper>
      {
        this.state.showMenu ? (
          <DropdownList>
            <Link to='/profile/' className='dropdownLink'>
              <Profile/>
              <button className='dropdownButton-add'>Учетная запись</button>
            </Link>
            <span className='dropdownLink'>
              <Setting/>
              <button className='dropdownButton-add'>Настройки</button>
            </span>
            <Link to='#' className='dropdownLink'>
              <Reference/>
              <button className='dropdownButton-add'>Справка</button>
            </Link>
            <Link to='#' className='dropdownLink'>
              <Exit/>
              <button className='dropdownButton-add'>Выход</button>
            </Link>
          </DropdownList>
        ) :
          null
      }
    </>
    );
  }
}

const AvatarWrapper = styled.div`
.avatar-button{
  border: none;
  background: none;
}
.avatar-button:focus{
  outline: none;
}
`;

const DropdownList = styled.div`
position: absolute;
top: 39px;
display: flex;
z-index: 10;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: flex-start;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
border-radius: 10px;
background: #FFFFFF;
overflow: hidden;
padding: 10px 0;
.dropdownLink {
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 30px 6px 14px;
  width: 100%;
  background: none;
  border: none;
  color: #3B3E3C;
  text-decoration: none;
  &:hover {
    background: #BDE1CA;
  }
  &:active {
    background: ##2795FB;
    color: white;
    >svg>path {
      fill: white;
    }
    >button {
      color: white;
    }
  }
  > svg {
    margin-right: 16px;
  }
}
.dropdownButton-add {
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  &:focus {
    outline: none;
  }
}
`;

export default AvatarButton;

