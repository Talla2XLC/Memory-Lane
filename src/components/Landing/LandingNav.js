import React, { Component } from 'react';
import './LandingNav.sass';

export default class LandingNav extends Component {
  constructor(props) {
    super(props)
  }

  toForm(e){
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }

  toAbout(e){
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }

  scrollToMyRef = () => window.scrollTo(0, this.props.innerRef.current.scrollIntoView) 
  
  render() {
    const { innerRef } = this.props;

    return (
      <div className="landing-nav">
        <span className="logo-span">Memory lane</span>
        <nav className="main-nav">
          <button className="nav-btn about-btn">О проекте</button>
          <button className="nav-btn features-btn" ref={innerRef}>Возможности</button>
          <button className="nav-btn form-btn" onClick={ this.toForm }>Регистрация</button>
          <button className="nav-btn login-btn">Вход</button>
        </nav>
      </div>
    );
  }
}
