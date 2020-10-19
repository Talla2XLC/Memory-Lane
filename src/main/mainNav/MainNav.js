import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import shortid from "shortid";
import "./MainNav.sass";

class MainNav extends Component {
  static propTypes = {
    navItems: PropTypes.array.isRequired,
  };
  render() {
    const { navItems } = this.props;

    const navigationItems = navItems.map((navItem) => (
      <NavLink
        className="navigation-item-link"
        activeStyle={{
          backgroundColor: "rgba(39, 149, 251, 0.1)",
          borderRadius: "10px",
          width: "100px",
          height: "94px"
        }}
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

export default (withRouter(MainNav));
