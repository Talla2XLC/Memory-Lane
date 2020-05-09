import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './UserAuthorizationStyle.css';

import { Tooltip } from './UserRegistrationTooltip';

import axios from 'axios';

export default class UserFullName extends Component {

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
		() => { this.validateField(name, value) });
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let firstNameValid = this.state.firstNameValid;
		let lastNameValid = this.state.lastNameValid;
		let oneDigit = value.match(/(?=.*?[0-9])/);

		switch(fieldName) {
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
		)
	}

	validateForm = () => {
		const { firstNameValid, lastNameValid } = this.state;

		this.setState({ formValid: firstNameValid && lastNameValid });
	}

	introduceUser = () => {
		const { firstName, lastName } = this.state;

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
					console.log(res)
					if (res.data.result) {	// res.status === 200
						// this.setState({ hasIntroduced: true })
						console.log(res)

					} else {	// res.status !== 200
						console.error(res.data.error)
						alert(`${res.data.error}`)
					}
				})
				.catch(error => console.error(error))
	}

	render() {
		const { firstName, lastName, formErrors, firstNameValid, lastNameValid, formValid, hasIntroduced } = this.state

		const inputFirstName = (firstName.length > 0 && !firstNameValid) ? 'textInput inputUser-red' : 'textInput'
		const inputLastName = (lastName.length > 0 && !lastNameValid) ? 'textInput container__input inputUser-red' : 'textInput container__input'
		const displayfirstName = (firstName.length === 0 || firstName === null || firstNameValid) ? 'formErrors displayNone' : 'formErrors'
		const displaylastName = (lastName.length === 0 || lastName === null || lastNameValid) ? 'formErrors displayNone' : 'formErrors'

		if (hasIntroduced) return <Redirect to='/'/>

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
						className='textInput formItem__button formItem__button-360 formItem__button-64'
						type='submit'
						value='Представиться'
						onClick={this.introduceUser}
						disabled={!formValid}
					/>
				</div>
				{/* Modal window here */}
			</div>
		)	
	}
}
