import React, { Component } from 'react';
import './EmptyBlock.sass';
import {ReactComponent as FamilySvg} from '../svg/family.svg';
import {ButtonContainer} from '../Button';

export default class EmptyBlock extends Component {
  render() {
    return (
      <div>
        <div className='emptyBlock'>
          <FamilySvg className='familySvg' />
          <div className='head2 white'>Здесь пока нет ни одной записи</div>
          <ButtonContainer className='emptyNewsBlockButton' white={true}>Перейти</ButtonContainer>
        </div>
      </div>
    );
  }
}
