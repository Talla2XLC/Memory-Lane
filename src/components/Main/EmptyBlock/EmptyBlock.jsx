import React, { Component } from 'react';
import './EmptyBlock.sass';
import {ReactComponent as FamilySvg} from '../svg/family.svg';
import {ButtonContainer} from '../Button';

export default class EmptyBlock extends Component {
  render() {
    return (
      <div className='emptyBlock'>
        <FamilySvg className='familySvg' />
        <div className='head2'>Здесь пока нет ни одной записи</div>
        <ButtonContainer className='emptyNewsBlockButton' >Перейти</ButtonContainer>
      </div>
    );
  }
}
