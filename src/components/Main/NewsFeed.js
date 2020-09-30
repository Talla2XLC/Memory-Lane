import React, { Component } from 'react';
import './MainContent.sass';
import EmptyBlock from './emptyBlock/EmptyBlock';
export default class NewsFeed extends Component {
  render() {
    return (
      <div className='NewsBlock'>
        <p className='NewsBlock__title head1'>Ваша Лента</p>
        <EmptyBlock/>
      </div>
    );
  }
}
