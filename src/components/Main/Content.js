import React, { Component } from 'react';
import './Content.sass';

import Router from '../../Router';

export default class Content extends Component {

  render() {
    const { isAuthorized } = this.props;

    return (
      <div className='Content'>
        <Router isAuthorized={isAuthorized}/>  
      </div>
    )
  }
}
