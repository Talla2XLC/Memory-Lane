import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from './Albums/Dropdown';
import DropdownForAlbums from './Albums/DropdownForAlbums';
import {ReactComponent as Arrow} from './svg/arrow.svg';
import {ReactComponent as Plus} from './svg/plus.svg';
import { Link } from  'react-router-dom';
import {connect} from 'react-redux';
import {modalOpen} from '../../actions/modalOpen';

class Sorting extends Component {
  render() {
    const { album, openModalAddAlbum } = this.props;

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
            <button className='sortingBtn' onClick={ openModalAddAlbum }>
              <span className='createAlbum'>Cоздать альбом</span>
              <Plus className='plus'/>
            </button>
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
background: #F6F6F6;
height: 76px;
z-index: 2;
width: 100%;
position:sticky;
top: 0;
display: flex;
flex-flow: row nowrap;
align-items: center;


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

.createAlbum {
  margin-left: 12px;
}

.sortingBtn {
  color: #3B3E3C;
  background: none;
  border: none;  
  &:focus {
    outline: none;
  }
  &:hover .plus > path{
    fill: #5DB07B;
  }
  &:active .plus{
    transform: rotate(45deg);
    > path{
      fill: #278147;
    }
  }
}
.plus {
  margin-left: 12px;
}
`;

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModalAddAlbum: () => {
      dispatch(modalOpen('addAlbum'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
