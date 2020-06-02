import React, { Component } from 'react';
import styled from 'styled-components';
import AddDropdown from './AddDropdown';

export default class addSection extends Component {
  state = {
    interview: '',
    photo: '',
    album: '',
    history: ''
  }

  render() {
    return (
      <AddSectionWrapper>
        <AddDropdown/>  
      </AddSectionWrapper>
    );
  }
}

const AddSectionWrapper = styled.div`
cursor: pointer;
position: relative;
`;
