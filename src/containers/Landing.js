import React, { Component } from 'react';
import './Landing.sass';
import LandingHeader from '../components/Landing/LandingHeader.js';
import LandingAbout from '../components/Landing/LandingAbout.js';
import LandingMission from '../components/Landing/LandingMission.js';
import LandingFeatures from '../components/Landing/LandingFeatures';
import LandingForm from '../components/Landing/LandingForm';

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