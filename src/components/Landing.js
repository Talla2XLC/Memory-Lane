import React, { createRef, Component } from 'react';
import './Landing.sass';
import LandingNav from './Landing/LandingNav.js';
import LandingHeader from './Landing/LandingHeader.js';
import LandingAbout from './Landing/LandingAbout.js';
import LandingMission from './Landing/LandingMission.js';
import LandingFeatures from './Landing/LandingFeatures.js';
import LandingForm from './Landing/LandingForm.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.navDiv = createRef();
    this.headerDiv = createRef();
    this.aboutDiv = createRef();
    this.missionDiv = createRef();
    this.featuresDiv = createRef();
    this.formDiv = createRef();
  }
  
  render() {
    return (
      <div className="landing-page">
        <LandingNav ref={this.navDiv} />
        <LandingHeader ref={this.headerDiv}/>
        <LandingAbout ref={this.aboutDiv}/>
        <LandingMission ref={this.missionDiv}/>
        <LandingFeatures ref={this.featuresDiv}/>
        <LandingForm ref={this.formDiv}/>
      </div>
    );
  }
}