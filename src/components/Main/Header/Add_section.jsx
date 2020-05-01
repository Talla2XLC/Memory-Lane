import React, { Component } from 'react';
import { ReactComponent as IconAddSection } from './svg/add_section.svg';
import styled from 'styled-components';
import {Link} from "react-router-dom";

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
          {/*<button className='button__notice'>
            <IconAddSection />
          </button>*/}
          <Link to='/albums/add'><IconAddSection /></Link>
        </AddSectionWrapper>
      );
    }
}

const AddSectionWrapper = styled.div`

.button__notice {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    background: 50% no-repeat;
    width: 40px;
    height: 40px;
    padding: 0;
}

`;
