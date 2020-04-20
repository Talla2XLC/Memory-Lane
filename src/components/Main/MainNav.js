import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import './MainNav.sass'

export default class MainNav extends Component {
  static propTypes = {
    navItems: PropTypes.object.isRequired
  }

  render() {
    const { navItems } = this.props
      
    const navigationItems = navItems.map(navItem =>
      (
        <div className="navigation-item">
          <img src="" alt="">
          </img>

          <Link key={ shortid.generate() } to={ `/${navItem.endpoint}/` }>
            {navItem.title}
          </Link>
        </div>
      ) 
    )

    return (
      <div className="MainNav">
        { navigationItems }
      </div>
    )
  }
}


