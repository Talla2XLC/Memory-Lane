import React from 'react';
import Router from '../../Router';
import styled from 'styled-components';

export default function Content() {
  return (
    <ContentWrap>
      <Router />
    </ContentWrap>
  );
}


export const ContentWrap = styled.div`
width: 1140px;
`;
