import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import RegistrationForm from './components/Main/RegistrationForm';
import RegistrationCompleting from './components/Main/RegistrationCompleting';
import RegistrationFormName from './components/Main/RegistrationFormName';
import AuthorizationForm from './components/Main/AuthorizationForm';

import Main from './containers/Main';
import MainContent from './components/Main/MainContent';

import Persons from './components/Main/Persons';
import Albums from './components/Main/Albums/Albums';
import Stories from './components/Main/Stories/Stories';
import Services from './components/Main/Services';
import Learn from './components/Main/Learn';
import DownloadPhoto from './components/Main/Albums/DownloadPhoto';
import Detail from './components/Main/Stories/Detail';
import AddStory from './components/Main/Stories/AddStory';

export default class Router extends Component {

  render() {
    const { isAuthorized } = this.props;

    return (
      isAuthorized ?
        (<Switch>
          <Route exact path='/' component={ MainContent } />
          <Route exact path='/persons/' component={ Persons } />
          <Route exact path='/albums/' component={ Albums } />
          <Route exact path='/albums/add' component={ DownloadPhoto } />
          <Route exact path='/stories/' component={ Stories } />
          <Route exact path='/stories/1' component={ Detail} />
          <Route exact path='/stories/add' component={ AddStory } />
          <Route exact path='/services/' component={ Services } />
          <Route exact path='/learn/' component={ Learn } />
          <Route exact path='/register/' component={ RegistrationForm } />
          <Redirect to='/' />
        </Switch>) : (
          <Switch>
            <Route exact path='/auth/' component={ AuthorizationForm } />
            <Route exact path='/register/' component={ RegistrationForm } />
            <Redirect to='/auth' />
          </Switch>
        )
    );
  }
}
