import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Stories.sass';

import Sorting from '../generalUi/sorting/Sorting';

import { ReactComponent as GuySvg } from '../../../assets/Images/general/guy_with_magnifier.svg';
import { ButtonContainer } from '../generalUi/Button';

class StoriesEmpty extends Component {
  constructor(props) {
    super(props);

    this.forwardToAddStory = this.forwardToAddStory.bind(this);
  }

  forwardToAddStory() {
    const { history } = this.props;
    
    history.push('/stories/add');
  }
  
  render() {
    return (
      <div className='emptyBlock'>
        <Sorting
          currentPage='stories'
        />
        <GuySvg className='guySvg'/>
        <div className='head2'>Здесь пока нет ни одной истории</div>
        <ButtonContainer
          className='emptyNewsBlockButton'
          onClick={this.forwardToAddStory}
        >
          Написать
        </ButtonContainer>
      </div>
    );
  }
}

export default withRouter(StoriesEmpty);