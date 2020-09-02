import React, { Component } from 'react';
import './DropdownPersons.sass';
import {ReactComponent as AddBTN} from '../../Albums/svg/addButton.svg';

class DropdownPersons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPersons: false,
      personsData: this.props.persons
    };
    this.showPersons = this.showPersons.bind(this);
    this.closePersons = this.closePersons.bind(this);
  }

  showPersons(event) {
    event.preventDefault();
    this.setState({ showPersons: true }, () => {
      document.addEventListener('click', this.closePersons);
    });
  }
  closePersons() {
    this.setState({ showPersons: false }, () => {
      document.removeEventListener('click', this.closePersons);
    });
  }

  handlePersonSelect(id) {
    this.props.selectPerson(id);
  }

  render() {
    const { personsData, showPersons } = this.state;

    return (
      <div className='dropdown-div'>
        <AddBTN
          className={showPersons ? 'addBtn rotated' : 'addBtn'}
          onClick={this.showPersons}
        />
        {
          showPersons
            ? (
              <div className={'dropdown-list dropdown-persons'}>
                {
                  personsData.map(person => {
                    return <button
                      className='dropdownButton'
                      key={person.id}
                      onClick={() => this.handlePersonSelect(person.id)}
                    >
                      <span className='dropdownButton-span'>{person.first_name + ' ' + person.last_name}</span>
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
export default DropdownPersons;
