import React, { Component } from 'react';
import './Landing.sass';
import LandingHeader from './Landing/LandingHeader.js';
import LandingAbout from './Landing/LandingAbout.js';
import LandingMission from './Landing/LandingMission.js';
import LandingFeatures from './Landing/LandingFeatures';
import LandingForm from './Landing/LandingForm';

export default class Landing extends Component {  
  render() {
    return (
      <div className="landing-page">
        <LandingHeader />
        <LandingAbout />
        <LandingMission />
        <LandingFeatures />
        <LandingForm />
      </div>
    );
  }
}
