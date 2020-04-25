import React, { Component } from 'react';
import './Dropdown.sass';


const viewData = [
  { name: 'Большая плитка', id: 1},
  { name: 'Средняя плитка', id: 2},
  { name: 'Средний список', id: 3},
  { name: 'Маленький список', id: 4},
  { name: 'Без превью', id: 5}
];
class Dropdown extends Component {
  constructor() {
    super();
    
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
    return (
      <div className='menu' >
        <button className='viewButton' onClick={this.showMenu}>
          Вид 

        </button>
        {
          this.state.showMenu
            ? (
              <div >
                {
                  viewData.map(view => {
                    return <button className='viewButton' id={view.id}>{view.name}</button>;
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
export default Dropdown;
