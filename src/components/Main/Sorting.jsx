import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from './Albums/Dropdown';
import DropdownForAlbums from './Albums/DropdownForAlbums';

export default class Sorting extends Component {
  render() { 
    const album  = this.props.album;
    return (
      album ? 
        <SortingContainer>
          <div className='left-sorting'>
            <div className='sortingItem'>По алфавиту</div>
            <div className='sortingItem'>По дате</div>
            <div className='sortingItem'>По заполненности</div>
          </div>
          <div className='right-sorting-album'>
            <DropdownForAlbums styleId={this.props.styleId}/>
          </div>
        </SortingContainer> 

        : 
        <SortingContainer>
          <div className='left-sorting'>
            <div className='sortingItem'>По алфавиту</div>
            <div className='sortingItem'>По дате</div>
            <div className='sortingItem'>По заполненности</div>
          </div>
          <div className='right-sorting-album'>
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

.sortingItem {
  margin-right: 10px;
}

.right-sorting-album {
  display: 'flex';
  flex-flow: row nowrap;
  margin-left: auto;
}


`;
