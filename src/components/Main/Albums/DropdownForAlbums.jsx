import React, { Component } from 'react';
import './Dropdown.sass';

const viewData = [
  { name: 'Большая плитка', id: 1},
  { name: 'Средняя плитка', id: 2},
  { name: 'Маленькая плитка', id: 3}
];

class DropdownForAlbums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      currentView: 'Большая плитка'
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

  handleClick(styleId, viewName) {
    this.props.styleId(styleId);
    this.setState({currentView: viewName});
  }

  render() {
    return (
      <div className='menu' >
        <div className='viewButton' onClick={this.showMenu}>
          Вид
        </div>
        {
          this.state.showMenu
            ? (
              <div className={'dropdown-list'}>
                {
                  viewData.map(view => {
                    return <button className='dropdownButton' key={view.id} onClick={() => this.handleClick(view.id, view.name)}>{view.name}</button>;
                  })
                }
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default DropdownForAlbums;
