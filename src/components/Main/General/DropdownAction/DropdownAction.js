import React, { Component } from 'react';
// import './DropdownAction.sass';
import {ReactComponent as Dots} from './svg/dots.svg';
import {ReactComponent as Share} from './svg/shareIcon.svg';
import {ReactComponent as Copy} from './svg/copyIcon.svg';
import {ReactComponent as Delete} from './svg/deleteIcon.svg';
import {ReactComponent as Download} from './svg/downloadIcon.svg';
import {ReactComponent as Rename} from './svg/reNameIcon.svg';
import {ReactComponent as Move} from './svg/move.svg';
import {ReactComponent as Arrow} from '../Sorting/svg/arrow.svg';

class DropdownAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      actionsData: []
    };
    this.showActions = this.showActions.bind(this);
    this.closeActions = this.closeActions.bind(this);
  }

  componentDidMount() {
    switch (this.props.currentPage) {
      case 'allAlbums':
        this.setState({
          actionsData: [
            { name: 'Поделиться', id: 1},
            { name: 'Переименовать', id: 3},
            // { name: 'Копировать', id: 5},
            { name: 'Удалить', id: 6}
          ]
        });
        break;
      case 'album':
        this.setState({
          actionsData: [
            { name: 'Поделиться', id: 1},
            { name: 'Скачать', id: 2},
            { name: 'Переименовать', id: 3},
            { name: 'Переместить', id: 4},
            { name: 'Копировать', id: 5},
            { name: 'Удалить', id: 6}
          ]
        });
        break;
      default:
        break;
    }
  }

  showActions(event) {
    event.preventDefault();
    this.setState({ showActions: true }, () => {
      document.addEventListener('click', this.closeActions);
    });
  }
  closeActions() {
    this.setState({ showActions: false }, () => {
      document.removeEventListener('click', this.closeActions);
    });
  }

  render() {
    const { actionsData } = this.state;
    const { currentPage } = this.props;

    const fetchDropdownSvg = actionId => {
      switch (actionId) {
        case 1:
          return <Share />;
        case 2:
          return <Download />;
        case 3:
          return <Rename />;
        case 4:
          return <Move />;
        case 5:
          return <Copy />;
        case 6:
          return <Delete />;
        default:
          return '';
      }
    };

    return (
      <div className='dropdown-div'>
        {currentPage === 'allAlbums' ?
          <Dots className={'dots-list'} onClick={this.showActions} />
          :
          <div className='sortingItem' onClick={this.showActions} >
            <span>Действие</span>
            <Arrow className='arrow'/>
          </div>
        }

        {
          this.state.showActions
            ? (
              <div className={'dropdown-list'}>
                {
                  actionsData.map(view => {
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
export default DropdownAction;
