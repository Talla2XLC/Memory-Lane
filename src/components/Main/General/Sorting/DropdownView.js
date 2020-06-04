import React, { Component } from 'react';
import './DropdownView.sass';
import {ReactComponent as Arrow} from './svg/arrow.svg';
import { ReactComponent as BigCol } from './svg/bigCol.svg';
import { ReactComponent as MedCol } from './svg/medCol.svg';
import { ReactComponent as MedRow } from './svg/medRow.svg';
import { ReactComponent as SmallRow } from './svg/smallRow.svg';
import { ReactComponent as NoPreview } from './svg/noPreview.svg';

class DropdownView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      currentView: 'Большая плитка',
      viewData: []
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    switch (this.props.currentPage) {
      case 'allAlbums':
        this.setState({
          viewData: [
            { name: 'Большая плитка', id: 1},
            { name: 'Средняя плитка', id: 2},
            { name: 'Маленькая плитка', id: 3}
          ]
        });
        break;
      case 'album':
        this.setState({
          viewData: [
            { name: 'Большая плитка', id: 1},
            { name: 'Средняя плитка', id: 2},
            { name: 'Средний список', id: 3},
            { name: 'Маленький список', id: 4},
            { name: 'Без превью', id: 5}
          ]
        });
        break;
      case 'persons':
        this.setState({
          viewData: [
            { name: 'Большая плитка', id: 1},
            { name: 'Средняя плитка', id: 2},
            { name: 'Маленькая плитка', id: 3}
          ]
        });
        break;
      default:
        break;
    }
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

  handleClick(gridId, viewName) {
    this.props.setGridType(gridId);
    this.setState({currentView: viewName});
  }

  render() {
    const { viewData } = this.state;

    const fetchDropdownSvg = gridId => {
      switch (gridId) {
        case 1:
          return <BigCol />;
        case 2:
          return <MedCol/>;
        case 3:
          return <MedRow />;
        case 4:
          return <SmallRow />;
        case 5:
          return <NoPreview />;
        default:
          return '';
      }
    };

    return (
      <div className='dropdown-view' >
        <div className='viewButton' onClick={this.showMenu}>
          Вид
          <Arrow className='arrow'/>
        </div>
        {
          this.state.showMenu
            ? (
              <div className={'dropdown-list'}>
                {
                  viewData.map(view => {
                    return <button className='dropdownButton' key={view.id} onClick={() => this.handleClick(view.id, view.name)}>
                      {fetchDropdownSvg(view.id)}
                      <span className='dropdownButton-span'>{view.name}</span>
                    </button>;
                  })
                }
              </div>
            )
            : null
        }
      </div>
    );
  }
}
export default DropdownView;
