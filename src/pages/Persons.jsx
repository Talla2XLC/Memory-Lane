import React, { Component } from 'react';
import Persons from "../components/Main/persons/Persons";

export default class PersonsPage extends Component {
  static path = '/persons/';
  render() {
    return(
      <Persons/>
    );
  }
}