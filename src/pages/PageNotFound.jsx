import React, { Component } from 'react';
import PageNotFound from "../components/Main/pageNotFound/PageNotFound";

export default class PageNotFoundPage extends Component {
  static path = '/404/';
  render() {
    return(
      <PageNotFound/>
      // <div>404</div>
    );
  }
}