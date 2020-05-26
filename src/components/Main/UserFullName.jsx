import React, { Component } from 'react';
import { fetchUserFullName } from '../../actions/actionUserFullName';
import { askedToIntroduce } from '../../actions/actionUserHasIntroduced';

import './UserFormStyle.sass';
import { ButtonContainer } from './Button.jsx';

import { Tooltip } from './UserRegistrationTooltip';

import axios from 'axios';
import {connect} from 'react-redux';

class UserFullName extends Component {
	state = {
	  firstName: '',
	  lastName: '',
	  gender: '',
	//   dob: {
	// 	day: '', 
	// 	month: '', 
	// 	year: ''
	//   },
	  day: '', 
	  month: '', 
	  year: '',
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
	  const { firstName, lastName, formErrors, firstNameValid, lastNameValid, formValid, day, month, year } = this.state;

	  return (
		<div className='container-form'>
			<div className='formWrapper'>
			<div className='formWrapperItem__titleContainer'>
				<h2 className='titleContainerItem__title'>Давайте познакомимся</h2>
			</div>

			<div className='formContainerItem__form'>
			    <div>
					<legend>Имя</legend>
						<input
							name='firstName'
							type='text'
							size='0'
							placeholder='Наталья'
							value={firstName}
							onChange={this.handleInput}
							required
						/>
				</div>
				<div className='form-password'>
					<legend>Фамилия</legend>	
						<input
							name='lastName'
							type='text'
							placeholder='Натальевна'
							onChange={this.handleInput}
							value={lastName}
						/>
				</div>

				<div class="genderWrapper">
					<legend>Пол</legend>
					<div>
						<span>М</span>
						<input 
							type="radio" 
							name="gender" 
							value="male" 
						/>
						<span>Ж</span>
						<input 
							type="radio" 
							name="gender" 
							value="female" 
						/>
					</div>
				</div>

				<div className='dobWrapper'>
					<legend>Дата рождения</legend>
					<div>
						<div className='dayWrapper'>
							<span>День</span>
							<input 
								style={{width: 60, height: 48}}
								onChange={this.handleInput}
								placeholder='ДД'
								type="number"
								name="day" 
								value={day} 
								min="1" 
								max="31"
								list='numbList'
							/>
							{/* <datalist id="numbList">
								<option value="1" />
							</datalist> */}
						</div>

						<div className='monthWrapper'>
							<span>Месяц</span>
							<input 
								style={{width: 73, height: 48}}
								onChange={this.handleInput}
								placeholder='ММ'
								type="number"
								name="month" 
								value={month} 
								min="1" 
								max="12"
							/>
						</div>
						<div className='yearWrapper'>
							<span>Год</span>
							<input 
								style={{width: 179, height: 48}}
								onChange={this.handleInput}
								placeholder='ГГГГ'
								type="number"
								name="year" 
								value={year} 
								min="1"
								max='9999'
							/>
						</div>
					</div>
				</div>

				<div className='btnContainer-fullname'>
					<ButtonContainer
						className='btn-skip'
						type='submit'
						onClick={this.skipIntroduce}
					>
						Пропустить
					</ButtonContainer>

					<ButtonContainer
						className='btn-introduce'
						type='submit'
						value='Представиться'
						onClick={this.introduceUser}
					>
						Представиться
					</ButtonContainer>
				</div>
			</div>
			{/* Modal window here */}
			</div>
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
