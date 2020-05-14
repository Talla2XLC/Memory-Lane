import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UserRegistration from './components/Main/UserRegistration';
import UserRegistrationCompleting from './components/Main/UserRegistrationCompleting';
import UserFullName from './components/Main/UserFullName';
import UserAuthorization from './components/Main/UserAuthorization';

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
    const { isAuthorized, hasFullName } = this.props;

    return (
      isAuthorized ?
        (<Switch>
          <Route exact path='/'>
            { hasFullName === false ? <Redirect to='/userfullname/' /> : <MainContent />}
          </Route>
          <Route exact path='/persons/' component={ Persons } />
          <Route exact path='/albums/' component={ Albums } />
          <Route exact path='/albums/add/' component={ DownloadPhoto } />
          <Route exact path='/stories/' component={ Stories } />
          <Route path='/stories/:id' component={ Detail } />
          <Route exact path='/stories/add/' component={ AddStory } />
          <Route exact path='/services/' component={ Services } />
          <Route exact path='/userfullname/' >
            { hasFullName === false ? <UserFullName /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/learn/' component={ Learn } />
          <Route exact path='/register/' component={ UserRegistration } />

          <Redirect to='/'/>
        </Switch>) : (
          <Switch>
            <Route exact path='/auth/' component={ UserAuthorization } />
            <Route exact path='/register/' component={ UserRegistration } />
            <Route exact path='/check/auth-email/' component={ UserRegistrationCompleting } />

            <Redirect to='/auth' />
          </Switch>
        )
    );
  }
}


