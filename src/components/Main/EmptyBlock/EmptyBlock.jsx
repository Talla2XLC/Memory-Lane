import React, { Component } from 'react';

import './EmptyBlock.sass';

import { ReactComponent as FamilySvg } from '../svg/family.svg';
import { ButtonContainer } from '../generalUi/Button';
import {Link} from 'react-router-dom';

export default class EmptyBlock extends Component {
  render() {
    const { albumId } = this.props;

    return (
      <div className='emptyBlock'>
        <FamilySvg className='familySvg' />
        <div className='head2'>Здесь пока нет ни одной записи</div>
        <Link className='dropdownLink' to={{ pathname: '/photo/add', state: { albumId: albumId} }} >
          <ButtonContainer className='emptyNewsBlockButton'>
            Загрузить
          </ButtonContainer>
        </Link>
      </div>
    );
  };
}
