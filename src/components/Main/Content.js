import React, { Component } from 'react';

import Router from '../../Router';
import styled from 'styled-components';

export default class Content extends Component {

  render() {
    const { isAuthorized } = this.props;

    return (
      <div className='Content'>
        <Router isAuthorized={isAuthorized}/>  
      </div>
    )
  }
}


export const ContentWrap = styled.div`
width: 1140px;
`;
