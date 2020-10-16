import React, { Component } from "react";
import "./Landing.sass";
import LandingHeader from "../../components/landing/LandingHeader.js";
import LandingAbout from "../../components/landing/LandingAbout.js";
import LandingMission from "../../components/landing/LandingMission.js";
import LandingFeatures from "../../components/landing/LandingFeatures";
import LandingForm from "../../components/landing/LandingForm";

export default class Landing extends Component {
  static path = "/";
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
