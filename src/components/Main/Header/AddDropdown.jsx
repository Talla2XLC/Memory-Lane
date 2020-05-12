import React, { Component } from 'react';
import { ReactComponent as IconAddSection } from './svg/addIcon.svg';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
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

            <DropdownList>
              <Link to='/albums/add'> <button className='dropdownButton'>Загрузить фото</button> </Link>
              <Link to='/2/2'> <button className='dropdownButton'>Создать альбом</button> </Link>
              <Link to='/stories/add'> <button className='dropdownButton'>Добавить историю</button> </Link>
              <Link to='/4/4'> <button className='dropdownButton'>Добавить интервью</button> </Link>
              <Link to='/persons/add'> <button className='dropdownButton'>Добавить персону</button> </Link>
            </DropdownList>
          )
          : (
            null
          )
      }
    </>
    );
  }
}
const DropdownList = styled.div`
max-width: 200px;
.dropdownButton {
  background: #FFFFFF;
  padding: 5px;
  box-sizing: border-box;
  text-align: left;
  min-width: 200px;
}

`;
