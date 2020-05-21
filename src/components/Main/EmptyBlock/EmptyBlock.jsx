import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './EmptyBlock.sass';

import { ReactComponent as FamilySvg } from '../svg/family.svg';
import { ButtonContainer } from '../Button';

class EmptyBlock extends Component {

  forwardToAddStory = () => this.props.history.push('/stories/add');

  render() {
    return (
      <div className='emptyBlock'>
        <FamilySvg className='familySvg' />
        <div className='head2'>Здесь пока нет ни одной записи</div>
        <ButtonContainer
          className='emptyNewsBlockButton'
          onClick={this.forwardToAddStory}
        >
          Перейти
        </ButtonContainer>
      </div>
    );
  };
}

export default withRouter(EmptyBlock);