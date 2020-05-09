import React, { Component } from 'react';
import styled from 'styled-components';

export default class Sorting extends Component {
  render() {
    return (
      <SortingContainer>
        <div className='main2 sortingTitle '>
        Сортировка
        </div>
        <div className='sortingDate'>По дате</div>
        <div className='sortingHuman'>По человеку</div> 

      </SortingContainer>
    );
  }
}

export const SortingContainer = styled.div`
display: grid;
background: #F6F6F6;
width: inherit;
grid-template-areas: "title title title" "date human view";
grid-template-rows: 1fr 1fr;
grid-template-columns: 100px 100px 1fr;
position: fixed;
z-index: 999;
.sortingDate {
grid-area: date;
text-align: left;
}
.sortingHuman {
grid-area: human;
text-align: left;
}
.sortingTitle {
  color: #000000;
}
.sortingDropdown {
  grid-area: dropdown;
}
`;
