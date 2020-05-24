import React, { Component } from 'react';
import { fetchUserFullName } from '../../actions/actionUserFullName';
import { askedToIntroduce } from '../../actions/actionUserHasIntroduced';

import './UserAuthorizationStyle.css';

import { Tooltip } from './UserRegistrationTooltip';

import axios from 'axios';
import {connect} from 'react-redux';

class UserFullName extends Component {
	state = {
	  firstName: '',
	  lastName: '',
	  formErrors: {
	    firstName: '',
	    lastName: ''
	  },
	  firstNameValid: false,
	  lastNameValid: false,
	  formValid: false,
	  hasIntroduced: false
	}

	handleInput = e => {
	  const { name, value } = e.target;

	  this.setState({ [name]: value },
	    () => { this.validateField(name, value); });
	}

	validateField(fieldName, value) {
	  const fieldValidationErrors = this.state.formErrors;
	  let firstNameValid = this.state.firstNameValid;
	  let lastNameValid = this.state.lastNameValid;
	  const oneDigit = value.match(/(?=.*?[0-9])/);

	  switch (fieldName) {
	    case 'firstName':
	      firstNameValid = false;

	      if (oneDigit) {
	        fieldValidationErrors.firstName = 'Имя не должно содержать цифры';
	      } else {
	        fieldValidationErrors.firstName = '';
	        firstNameValid = true;
	      }
	      break;

	    case 'lastName':
	      lastNameValid = false;

	      if (oneDigit) {
	        fieldValidationErrors.lastName = 'Фамилия не должна содержать цифры';
	      } else {
	        fieldValidationErrors.lastName = '';
	        lastNameValid = true;
	      }
	      break;

	    default:
	      break;
	  }

	  this.setState(
	    {
	      formErrors: fieldValidationErrors,
	      firstNameValid: firstNameValid,
	      lastNameValid: lastNameValid
	    },
	    this.validateForm
	  );
	}

	validateForm = () => {
	  const { firstNameValid, lastNameValid } = this.state;

	  this.setState({ formValid: firstNameValid || lastNameValid });
	}

	introduceUser = () => {
	  const { firstName, lastName } = this.state;
	  const { checkUserName } = this.props;

	  const token = localStorage.getItem('token');

	  axios
	    .post(
	      'http://api.memory-lane.ru/db/setAccount',
	      {
	        'first_name': firstName,
	        'last_name': lastName
	      },
	      {
	        headers: {
	          'Content-Type': 'application/json',
	          'Authorization': `${token}`
	        }
	      })
	    .then(res => {
	      if (res.data.result) {	// res.status === 200
	        checkUserName();
	      } else {	// res.status !== 200
	        console.error(res.data.error);
	        alert(`${res.data.error}`);
	      }
	    })
	    .catch(error => console.error(error));
	}

	skipIntroduce = () => {
	  const { checkUserName, checkUserAskedToIntroduce } = this.props;

	  const token = localStorage.getItem('token');

	  axios
	    .post(
	      'http://api.memory-lane.ru/db/setAccount',
	      {
	        asked_to_introduce: 'true'
	      },
	      {
	        headers: {
	          'Content-Type': 'application/json',
	          'Authorization': `${token}`
	        }
	      })
	    .then(res => {
	      if (res.data.result) {	// res.status === 200
	        checkUserAskedToIntroduce();
	        checkUserName();
	      } else {	// res.status !== 200
	        console.error(res.data.error);
	        alert(`${res.data.error}`);
	      }
	    })
	    .catch(error => console.error(error));
	}

	render() {
	  const { firstName, lastName, formErrors, firstNameValid, lastNameValid, formValid } = this.state;

	  const inputFirstName = (firstName.length > 0 && !firstNameValid) ? 'textInput input_color_red' : 'textInput';
	  const inputLastName = (lastName.length > 0 && !lastNameValid) ? 'textInput container__input input_color_red' : 'textInput container__input';
	  const displayfirstName = (firstName.length === 0 || firstName === null || firstNameValid) ? 'formErrors displayNone' : 'formErrors';
	  const displaylastName = (lastName.length === 0 || lastName === null || lastNameValid) ? 'formErrors displayNone' : 'formErrors';

	  return (
	    <div className='formWrapper'>
	      <div className='formWrapperItem__titleContainer title__item'>
	        <h2 className='textBasic titleContainerItem__title'>Мы не знаем, как к вам обращаться, представьтесь, пожалуйста</h2>
	      </div>

	      <div className='formContainerItem__form'>
	        <input
	          className={inputFirstName}
	          name='firstName'
	          type='text'
	          size='0'
	          placeholder='Введите свое имя'
	          value={firstName}
	          onChange={this.handleInput}
	          required
	        />
	        <div className={displayfirstName}>
	          <Tooltip tooltip={formErrors.firstName}/>
	        </div>

	        <input
	          className={inputLastName}
	          name='lastName'
	          type='text'
	          placeholder='Введите свою фамилию'
	          onChange={this.handleInput}
	          value={lastName}
	        />
	        <div className={displaylastName}>
	          <Tooltip tooltip={formErrors.lastName}/>
	        </div>

	        <input
	          className='textInput formItem__button c-button--width360 f__button--indent-mt64'
	          type='submit'
	          value='Представиться'
	          onClick={this.introduceUser}
	          disabled={!formValid}
	        />

	        <input
	          className='textInput formItem__button c-button--width360 f__button--indent-mt64'
	          type='submit'
	          value='Пропустить'
	          onClick={this.skipIntroduce}
	          style={{ marginTop: '1em' }}
	        />
	      </div>
	      {/* Modal window here */}
	    </div>
	  );
	}
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkUserName: () => {
      dispatch(fetchUserFullName());
    },
    checkUserAskedToIntroduce: () => {
      dispatch(askedToIntroduce());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFullName);
