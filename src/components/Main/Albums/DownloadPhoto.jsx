import React, { Component } from 'react';
import Sorting from '../Sorting';
import EmptyBlock from '../EmptyBlock/EmptyBlock';

export default class DownloadPhoto extends Component {
  render() {
    return (
      <div className='contentContainer'>
        <Sorting/>
        <EmptyBlock/>
      </div>
    );
  }
}

