import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import { ReactComponent as AvatarFemale } from './svg/avatarFemale.svg';
import { ReactComponent as AvatarMale } from './svg/avatarMale.svg';
import { ReactComponent as AvatarUndefined } from './svg/avatarUndefined.svg';

class AvatarButton extends Component {
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

    return (
      <AvatarWrapper>
        <Link className='avatar-button' to='/profile/'>
          {this.fetchUserAvatar(gender)}
        </Link>
      </AvatarWrapper>
    );
  }
}

const AvatarWrapper = styled.div`
margin-right: 40px;
.avatar-button{
  border: none;
  background: none;
}
.avatar-button:focus{
  outline: none;
}
`;

export default AvatarButton;
