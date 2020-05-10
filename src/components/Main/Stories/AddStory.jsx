import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import EmptyBlock from '../EmptyBlock/EmptyBlock';

export default class AddStory extends Component {
  render() {
    return (
      <PerfectScrollbar>
        <div className='contentContainer'>
          <EmptyBlock/>
        </div>
      </PerfectScrollbar>
    );
  }
}
