import React, { Component } from 'react';
import Persons from "../components/Main/Persons/Persons";

export default class PersonsPage extends Component {
  static path = '/persons/';
  render() {
    return(
      // <Persons/>
      <div>Персоны</div> 
    );
  }
}