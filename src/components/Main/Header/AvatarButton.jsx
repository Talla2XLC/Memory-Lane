import React, { Component } from 'react';
import styled from 'styled-components';


import { ReactComponent as AvatarFemale } from './svg/avatarFemale.svg';
import { ReactComponent as AvatarMale } from './svg/avatarMale.svg';
import { ReactComponent as AvatarUndefined } from './svg/avatarUndefined.svg';

class AvatarButton extends Component {
  constructor(props) {
    super(props);
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

    return (
      <AvatarWrapper>
        <button className='avatar-button'>
          {this.fetchUserAvatar(gender)}
        </button>
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
`;

export default AvatarButton;
