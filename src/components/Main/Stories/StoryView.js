import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';


import './Stories.sass';

export default class StoryView extends Component {

  render() {
    console.log(this.props)

    return (
      (<PerfectScrollbar>
        <div className='storyView'>
          Здесь должно быть отображение истории
        </div>
      </PerfectScrollbar>)
    );
  };
}
