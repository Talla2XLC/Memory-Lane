import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from './Albums/Dropdown';
import DropdownForAlbums from './Albums/DropdownForAlbums';
import {ReactComponent as Arrow} from './svg/arrow.svg';
import {ReactComponent as Plus} from './svg/plus.svg';
import { Link } from  'react-router-dom';

export default class Sorting extends Component {
  render() { 
    const album  = this.props.album;
    return (
      album ? 
        <SortingContainer>
          <div className='left-sorting'>
            <div className='sortingItem'>По алфавиту
            <Arrow className='arrow'/>
            </div>
            <div className='sortingItem'>По дате
            <Arrow className='arrow'/>
            </div>
            <div className='sortingItem'>По заполненности
            <Arrow className='arrow'/>
            </div>
          </div>
          <div className='right-sorting-album'>
            <DropdownForAlbums styleId={this.props.styleId}/>
            <Link className='sortingLink' to='/albums/add/'>
            <span className='createAlbum'>Cоздать альбом</span>
              <Plus className='plus'/>
            </Link>


          </div>
        </SortingContainer> 

        : 
        <SortingContainer>
          <div className='left-sorting'>
          <div className='sortingItem'>По алфавиту
            <Arrow className='arrow'/>
            </div>
            <div className='sortingItem'>По дате
            <Arrow className='arrow'/>
            </div>
            <div className='sortingItem'>По заполненности
            <Arrow className='arrow'/>
            </div>
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
  margin-right: 20px;
}

.right-sorting-album {
  display: flex;

  flex-flow: row nowrap;
  margin-left: auto;
}
.arrow {
  margin-left: 4px;
}
.plus {
  margin-left: 12px;
}
.createAlbum {
  margin-left: 12px;
}
.sortingLink {
  color: #3B3E3C;
}
`;
