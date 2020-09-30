import React, { Component } from "react";
import { Switch, Route, Redirect, IndexRedirect } from "react-router-dom";

import UserRegistration from "./components/Main/UserRegistration";
import UserRegistrationCompleting from "./components/Main/UserRegistrationCompleting";
import UserFullName from "./components/Main/UserFullName";
import UserAuthorization from "../components/main/forms/UserAuthorization";
import Funnel from "../components/Main/Funnel";
import Persons from "../components/Main/persons/Persons";
import MainContent from "../components/main/home/MainContent";
import UsersAlbums from "../components/Main/albums/UserAlbums";
// import Persons from './components/Main/Persons';
import AddPerson from "../components/Main/persons/AddPerson";
import Person from "../components/Main/persons/Person";
// import Albums from './components/Main/Albums/Photos';
import Album from "../components/Main/albums/Album";
import Photo from "../components/Main/albums/photoFull/PhotoFull";
import Stories from "../components/Main/stories/Stories";
import Services from "../components/main/services/Services";
import Learn from "../components/main/learn/Learn";
import DownloadPhoto from "../components/Main/albums/uploadPhoto/UploadPhoto";
// import StoryEdit from './components/Main/Stories/StoryEdit';
import StoryView from "../components/Main/stories/StoryView";
import Profile from "../components/Main/userProfile/UserProfile";
import SearchResult from "../components/Main/Search/SearchResult";
import PageNotFound from "./components/Main/pageNotFound";
import StoryNew from "../components/Main/stories/StoryNew";
import EditPerson from "../components/Main/persons/EditPerson";
import Landing from "./landing/Landing";

export default class Routers extends Component {
  render() {
    const { isAuthorized, hasFullName } = this.props;

    if (isAuthorized) {
      return (
        <Switch>
          <Redirect from="/" to="/home" />
          <Route exact path="/home">
            {<MainContent />}
          </Route>

          <Route
            exact
            path="/search/:query"
            render={(props) => <SearchResult key={props.match.params.query} />}
          />
          <Route exact path="/persons/" component={Persons} />
          <Route exact path="/persons/add/" component={AddPerson} />
          <Route exact path="/albums/" component={UsersAlbums} />
          <Route exact path="/photo/add/" component={DownloadPhoto} />
          <Route exact path="/albums/:id" component={Album} />
          <Route exact path="/persons/:id" component={Person} />
          <Route exact path="/persons/edit/:id" component={EditPerson} />
          <Route exact path="/photo/:id" component={Photo} />
          <Route exact path="/stories/" component={Stories} />
          <Route exact path="/stories/add/" component={StoryNew} />
          <Route path="/stories/:id" component={StoryView} />
          <Route exact path="/services/" component={Services} />
          <Route exact path="/learn/" component={Learn} />
          <Route exact path="/profile/" component={Profile} />

          {/* <Route path="*" component={PageNotFound} /> */}
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/auth/" component={UserAuthorization} />
          <Route exact path="/register/" component={UserRegistration} />
          <Route
            exact
            path="/check/auth-email/"
            component={UserRegistrationCompleting}
          />
          <Route exact path="/funnel/" component={Funnel} />
          <Route exact path="/userfullname/" component={UserFullName} />
          <Route exact path="/" component={Landing} />

          <Route path="*"> 
            <IndexRedirect to="/404/" />
            <Route path="/404/" component={PageNotFound} />
          </Route>
        </Switch>
      );
    }
  }
}
