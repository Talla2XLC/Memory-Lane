import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import "./MainNav.sass";

export default class MainNav extends Component {
  static propTypes = {
    navItems: PropTypes.array.isRequired,
  };
  render() {
    const { navItems } = this.props;

    const navigationItems = navItems.map((navItem) => (
      <NavLink
        className="navigation-item-link"
        key={shortid.generate()}
        exact
        to={`/${navItem.endpoint}/`}
      >
        <div className="navigation-item navFont">
          <div className="navItemSVG">{navItem.icon}</div>
          {navItem.title}
        </div>
      </NavLink>
    ));
    return <div className="MainNav">{navigationItems}</div>;
  }
}
