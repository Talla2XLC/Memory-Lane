import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import {
  Home,
  UserAuthorization,
  Album,
  AlbumItem,
  Photo,
  DownloadPhoto,
  Persons,
  Profile,
  UserRegistration,
  UserFullName,
  Stories,
  Services,
  PageNotFound,
  SearchResult
} from "./Main.jsx";

class Routers extends Component {
  render() {
    const { isAuthorized, hasFullName } = this.props;

    if (isAuthorized) {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Redirect from="/" to="/home" /> */}
          <Route exact path="/home" component={Home} />

          <Route
            exact
            path="/search/:query"
            render={(props) => <SearchResult key={props.match.params.query} />}
          />
          <Route exact path="/persons/" component={Persons} />
          <Route exact path="/albums/" component={Album} />
          <Route exact path="/albums/:id" component={AlbumItem} />
          <Route exact path="/photo/add/" component={DownloadPhoto} /> 
          <Route exact path="/photo/:id" component={Photo} />
          <Route exact path="/profile/" component={Profile} />
          {/* <Route exact path="/persons/add/" component={AddPerson} /> */}
          {/* <Route exact path="/persons/:id" component={Persons} /> */}
          {/* <Route exact path="/persons/edit/:id" component={EditPerson} />
          <Route exact path="/stories/" component={Stories} />
          <Route exact path="/stories/add/" component={StoryNew} />
          <Route path="/stories/:id" component={StoryView} />
          <Route exact path="/services/" component={Services} />
          <Route exact path="/learn/" component={Learn} /> */}

          {/* <Route path="*" component={PageNotFound} /> */}
          <Route path="*">
            <Redirect to="/404/" />
            <Route path="/404/" component={PageNotFound} />
          </Route>
        </Switch>
      );
    } 
    
    else {
      return (
        <Switch>
          <Route exact path="/" component={UserAuthorization} />
          <Route exact path="/auth/" component={UserAuthorization} />
          <Route exact path="/register/" component={UserRegistration} />
          {/* <Route
            exact
            path="/check/auth-email/"
            component={UserRegistrationCompleting}
          /> */}
          {/* <Route exact path="/funnel/" component={Funnel} /> */}
          <Route exact path="/userfullname/" component={UserFullName} />
          {/* <Route exact path="/" component={Landing} /> */}

          {/* <Route path="*">
            <Redirect to="/404/" />
            <Route path="/404/" component={PageNotFound} />
          </Route> */}
        </Switch>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.userInfo.loading,
    isAuthorized: state.session.isAuthorized,
    currentUser: state.userInfo.currentUser,
    hasFullName: !!(state.userInfo.currentUser.first_name || state.userInfo.currentUser.last_name),
    askedToIntroduce: state.userInfo.currentUser.asked_to_introduce,
    modalAddAlbumOpened: state.modal.addAlbumOpened,
    modalChooseAlbumOpened: state.modal.chooseAlbumOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
