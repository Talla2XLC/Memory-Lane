import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UserRegistration from './components/Main/UserRegistration';
import UserRegistrationCompleting from './components/Main/UserRegistrationCompleting';
import UserFullName from './components/Main/UserFullName';
import UserAuthorization from './components/Main/UserAuthorization';
import Funnel from './components/Main/Funnel';
import Persons from './components/Main/Persons/Persons';
import MainContent from './components/Main/MainContent';
import UsersAlbums from './components/Main/Albums/UserAlbums';
// import Persons from './components/Main/Persons';
import AddPerson from './components/Main/Persons/AddPerson';
import Person from './components/Main/Persons/Person';
// import Albums from './components/Main/Albums/Photos';
import Album from './components/Main/Albums/Album';
import Photo from './components/Main/Albums/PhotoFull/PhotoFull';
import Stories from './components/Main/Stories/Stories';
import Services from './components/Main/Services';
import Learn from './components/Main/Learn';
import DownloadPhoto from './components/Main/Albums/UploadPhoto/UploadPhoto';
// import StoryEdit from './components/Main/Stories/StoryEdit';
import StoryView from './components/Main/Stories/StoryView';
import Profile from './components/Main/UserProfile/UserProfile';
import SearchResult from './components/Main/Search/SearchResult';
// import PageNotFound from './components/Main/PageNotFound';
import StoryNew from './components/Main/Stories/StoryNew';
import EditPerson from './components/Main/Persons/EditPerson';

export default class Router extends Component {
  render() {
    const { isAuthorized, hasFullName } = this.props;

    return (
      isAuthorized ?
        (
          <Switch>
            <Route exact path='/'>
              { hasFullName === false ? <Redirect to='/userfullname/' /> : <MainContent />}
            </Route>
            <Route exact path='/search/:query' render={ props => <SearchResult key={props.match.params.query} /> } />
            <Route exact path='/persons/' component={ Persons } />
            <Route exact path='/persons/add/' component={ AddPerson } />
            <Route exact path='/albums/' component={ UsersAlbums } />
            <Route exact path='/photo/add/' component={ DownloadPhoto } />
            <Route exact path='/albums/:id' component={ Album } />
            <Route exact path='/persons/:id' component={ Person } />
            <Route exact path='/persons/edit/:id'component={ EditPerson }/>
            {/* <Route exact path='/albums/addalbums/' component={ UsersAlbums } /> */}
            <Route exact path='/photo/:id' component={ Photo } />
            <Route exact path='/stories/' component={ Stories } />
            <Route exact path='/stories/add/' component={ StoryNew } />
            <Route path='/stories/:id' component={ StoryView } />
            <Route exact path='/services/' component={ Services } />
            <Route exact path='/userfullname/' >
              { hasFullName === false ? <UserFullName /> : <Redirect to='/' />}
            </Route>
            <Route exact path='/learn/' component={ Learn } />
            <Route exact path='/profile/' component={ Profile } />
            <Route exact path='/register/' component={ UserRegistration } />
            {/* <Route exact path='*' component={ PageNotFound } /> */}

            <Redirect to='/'/>

          </Switch>) : (
          <Switch>
            <Route exact path='/auth/' component={ UserAuthorization } />
            <Route exact path='/register/' component={ UserRegistration } />
            <Route exact path='/check/auth-email/' component={ UserRegistrationCompleting } />
            <Route exact path='/funnel/' component={ Funnel } />

            <Redirect to='/auth' />
          </Switch>
        )
    );
  }
}
