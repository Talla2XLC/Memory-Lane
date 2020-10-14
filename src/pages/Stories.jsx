import React, { Component } from 'react';
import Stories from "../components/Main/stories/Stories";
// import styled from 'styled-components';

export default class StoriesPage extends Component {
  static path = '/albums/';
  render() {
    return(
      <Stories/>
    );
  }
}