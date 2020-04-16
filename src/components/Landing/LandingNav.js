import React, { Component } from 'react';
import './LandingNav.sass';

export default class LandingNav extends Component {

  scrollToAbout(e){
    e.preventDefault();
    let aboutDiv = document.querySelector(".about");
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
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  } 
  
  render() {
    return (
      <nav className="landing-nav">
        <span className="logo-span">Memory lane</span>
        <button className="nav-btn about-btn" onClick={ this.scrollToAbout }>О проекте</button>
        <button className="nav-btn features-btn" onClick={ this.scrollToFeatures }>Возможности</button>
        <button className="nav-btn form-btn" onClick={ this.scrollToBottom }>Регистрация</button>
        <button className="nav-btn login-btn">Вход</button>
      </nav>
    );
  }
}
