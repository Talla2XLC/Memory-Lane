import React, { Component } from 'react';
import styled from 'styled-components';

export default class Sorting extends Component {
  render() {
    return (
      <SortingContainer>
        <div className='font3'>
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
grid-template-areas: "title title title" "date human view";
grid-template-rows: 1fr 1fr;
grid-template-columns: 100px 100px 1fr;
.sortingDate {
grid-area: date;
text-align: left;
}
.sortingHuman {
grid-area: human;
text-align: left;
}
`;
