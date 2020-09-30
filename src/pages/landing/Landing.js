import React, { Component } from 'react';
import './Landing.sass';
import { Route } from 'react-router-dom';
import LandingHeader from '../../components/landing/LandingHeader.js';
import LandingAbout from '../../components/landing/LandingAbout.js';
import LandingMission from '../../components/landing/LandingMission.js';
import LandingFeatures from '../../components/landing/LandingFeatures';
import LandingForm from '../../components/landing/LandingForm';

export default class Landing extends Component {  
  static path = '/';
  render() {
    return (
      // <Route path="/" >
      <div className="landing-page">
        <LandingHeader />
        <LandingAbout />
        <LandingMission />
        <LandingFeatures />
        <LandingForm />
      </div>
      // </Route>
    );
  }
}