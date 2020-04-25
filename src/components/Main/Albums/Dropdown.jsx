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

  handleClick(gridId, viewName){
    this.props.gridId(gridId);
    this.setState({currentView : viewName});
  }

  render() {
    return (
      <div className='menu' >
        <button className='viewButton' onClick={this.showMenu}>
          {this.state.currentView}
        </button>
        {
          this.state.showMenu
            ? (
              <div className={'dropdown-list'}>
                {
                  viewData.map(view => {
                    return <button className='viewButton' key={view.id} onClick={() => this.handleClick(view.id, view.name)}>{view.name}</button>;
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
