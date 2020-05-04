import React, { Component } from 'react';
import { ReactComponent as IconAddSection } from './svg/add_section.svg';
import {Link} from 'react-router-dom';

export default class AddDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }


  render() {
    return (<>

      <IconAddSection onClick={this.showMenu}/>


      {
        this.state.showMenu
          ? (

            <div className={'dropdown-list'}>
              <Link to='/albums/add'> <button>Загрузить фото</button> </Link>
              <Link to='/2/2'> <button>Создать альбом</button> </Link>
              <Link to='/stories/add'> <button>Добавить историю</button> </Link>
              <Link to='/4/4'> <button>Добавить интервью</button> </Link>
              <Link to='/persons/add'> <button>Добавить персону</button> </Link>
            </div>
          )
          : (
            null
          )
      }
    </>
    );
  }
}
