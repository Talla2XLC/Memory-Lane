import React, { Component } from 'react';
import './Landing.sass';
import { Route } from 'react-router-dom';
import LandingHeader from '../../components/Landing/LandingHeader.js';
import LandingAbout from '../../components/Landing/LandingAbout.js';
import LandingMission from '../../components/Landing/LandingMission.js';
import LandingFeatures from '../../components/Landing/LandingFeatures';
import LandingForm from '../../components/Landing/LandingForm';

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