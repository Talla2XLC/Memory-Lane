import React, { Component } from 'react';

import ScrollToTop from '../../../utils/ScrollToTop';
// import Header from '../header/Header';
import styled from 'styled-components';

export default class Content extends Component {

  render() {
    // const { isAuthorized } = this.props;

    return (
      <ContentWrap>
        {/* <Header/> */}
        <ScrollToTop />
      </ContentWrap>
    );
  }
}


export const ContentWrap = styled.div`
  flex-grow: 1;
  padding-left: 315px;
`;
