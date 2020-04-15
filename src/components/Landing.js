import React from 'react';
import './Landing.sass';
import LandingHeader from './Landing/LandingHeader.js';
import LandingAbout from './Landing/LandingAbout.js';
import LandingMission from './Landing/LandingMission.js';
import LandingFeatures from './Landing/LandingFeatures.js';
import LandingForm from './Landing/LandingForm.js';

function Landing() {
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

export default Landing;