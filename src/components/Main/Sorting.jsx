import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from './Albums/Dropdown';

export default class Sorting extends Component {
  render() {
    return (
      <SortingContainer>
        <div className="left-sorting">
          <div className='sortingDate'>По дате</div>
          <div className='sortingHuman'>По человеку</div>
        </div>
        <div className="right-sorting">
          <div className='sortingAction'>Действие</div>
          <Dropdown gridId={this.props.gridId}/>
        </div>

      </SortingContainer>
    );
  }
}

export const SortingContainer = styled.div`
height: 72px;
z-index: 2;
width: 100%;
position:sticky;
top: 0;
display: flex;
flex-flow: row nowrap;
align-items: center;
background: #F6F6F6;

.left-sorting {
  display: flex;
  flex-flow: row nowrap;
}

.sortingDate {
  margin-right: 30px;
}

.right-sorting {
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto
}

.sortingAction {
  margin-right: 30px;
}
`;
