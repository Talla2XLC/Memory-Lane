import React, { Component } from 'react';

import Router from '../../Router';
import ScrollToTop from './Router/ScrollToTop';
import styled from 'styled-components';
import Header from '../Main/Header';

export default class Content extends Component {

  render() {
    const { isAuthorized } = this.props;

    return (
      <ContentWrap>
        <Header/>
        <ScrollToTop />
        <Router isAuthorized={isAuthorized}/>  
      </ContentWrap>
    );
  }
}


export const ContentWrap = styled.div`
  flex-grow: 1;
  padding-left: 315px;
`;
