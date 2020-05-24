import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Stories.sass';

import { ReactComponent as FamilySvg } from '../svg/family.svg';
import { ButtonContainer } from '../Button';

class StoriesEmpty extends Component {

  // this.props.match.params

  forwardToAddStory = () => {
    const { history } = this.props;
    // albums?
    history.push('/stories/add');
    // !albums? -> addNewAlbum
  };
  
  render() {
    return (
      <div className='emptyBlock'>
        <FamilySvg className='familySvg' />
        <div className='head2'>Здесь пока нет ни одной истории</div>
        <ButtonContainer
          className='emptyNewsBlockButton'
          onClick={this.forwardToAddStory}
        >
          Написать
        </ButtonContainer>
      </div>
    );
  };
}

export default withRouter(StoriesEmpty);