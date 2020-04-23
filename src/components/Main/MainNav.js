import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import './MainNav.sass'

export default class MainNav extends Component {
  static propTypes = {
    navItems: PropTypes.array.isRequired
  }

  render() {
    const { navItems } = this.props
      
    const navigationItems = navItems.map(navItem =>
      (
        <Link key={ shortid.generate() } to={ `/${navItem.endpoint}/` }>
          <div className="navigation-item">
            <div className='navItemSVG' />
            {navItem.title}
          </div>
        </Link>
      ) 
    )

    return (
      <div className="MainNav">
        { navigationItems }
      </div>
    )
  }
}


