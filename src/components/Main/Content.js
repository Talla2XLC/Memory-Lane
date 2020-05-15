import React, { Component } from 'react';

import Router from '../../Router';
import styled from 'styled-components';

export default class Content extends Component {

  render() {
    const { isAuthorized } = this.props;

    return (
      <ContentWrap>
        <Router isAuthorized={isAuthorized}/>  
      </ContentWrap>
    )
  }
}


export const ContentWrap = styled.div`
  flex-grow: 1;
  padding-left: 315px;
`;
