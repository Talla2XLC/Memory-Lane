import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";

import './LandingNav.sass';

class LandingNav extends Component {

  scrollToAbout(e){
    e.preventDefault();
    let aboutDiv = document.querySelector(".about-title");
    aboutDiv.scrollIntoView({block: "start", behavior: "smooth"});
  }

  scrollToFeatures(e){
    e.preventDefault();
    let featuresDiv = document.querySelector(".landing-features");
    featuresDiv.scrollIntoView({block: "start", behavior: "smooth"});
  }

  scrollToBottom(e){
    e.preventDefault();
    window.scrollTo({
      left: 0,
      // top: document.body.scrollHeight,
      top: 6000,
      behavior: "smooth"
    });
  } 
  
  // openAuthorization(e) {
  //   e.preventDefault();
  //   let sr = this.props;
  //   console.log(sr);
  // }
  
  render() {
    return (
      <nav className="landing-nav">
        <span className="logo-span">Memory lane</span>
        <button className="nav-btn about-btn" onClick={ this.scrollToAbout }>О проекте</button>
        <button className="nav-btn features-btn" onClick={ this.scrollToFeatures }>Возможности</button>
        <button className="nav-btn form-btn" onClick={ this.scrollToBottom }>Регистрация</button>
        {/* <button className="nav-btn login-btn" onClick={ this.openAuthorization }>Вход</button> */}
        <Link to="/auth" className="nav-btn login-btn">Вход</Link>
      </nav>
    );
  }
}

export default (withRouter(LandingNav));