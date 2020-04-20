import React, { Component } from 'react';
import './Main.sass';
import Header from "../components/Main/Header";
import MainNav from "../components/Main/MainNav";

export default class Landing extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <MainNav />
      </div>
    );
  }
}
