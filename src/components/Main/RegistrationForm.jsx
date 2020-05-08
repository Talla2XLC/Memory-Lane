import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './AuthorizationFormStyle.css'

import FormModal  from './FormModal'

import { ReactComponent as FormVK }	from './svg/form_vk.svg'
import { ReactComponent as FormFB }	from './svg/form_fb.svg'
import { ReactComponent as FormG }	from './svg/form_g.svg'
import { ReactComponent as FormIns }	from './svg/form_ins.svg'

import { Tooltip } from './Tooltip'

import axios from 'axios'

export default class RegistrationForm extends Component {
	
	state = {
		email: '',
		password: '',
		confidentiality: '',
		formErrors: {
			email: '',
			password: ''
		},
		emailValid: false,
		passwordValid: false, 
		formValid: false,
		modalOpened: false,
		hasRegistred: false
	}

	handleInput = e => {
		const { name, value } = e.target

		this.setState({ [name]: value },
		() => { this.validateField(name, value) })
	}

	confidentialityChange = e => this.setState({ confidentiality: e.target.checked })

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors
		let emailValid = this.state.emailValid
		let passwordValid = this.state.passwordValid

		let isMax = value.length >= 8
		let isCapital = value.match(/(?=.*?[A-Z])/)
		let oneDigit = value.match(/(?=.*?[0-9])/)
		let specialCharacter = value.match(/(?=.*?[#?!@$%^&*-])/)
	
		switch(fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
				fieldValidationErrors.email = emailValid ? '' : 'Неверно введён email'
				break

			case 'password':
				passwordValid = false

				if (!isMax) {
					fieldValidationErrors.password = 'Ваш пароль должен быть от 8 до 30 символов длиной'

				} else if (!isCapital) {
					fieldValidationErrors.password = 'Пароль должен содержать минимум одну заглавную букву'

				} else if (!oneDigit) {
					fieldValidationErrors.password = 'Пароль должен содержать минимум одну цифру'

				} else if (!specialCharacter) {
					fieldValidationErrors.password = 'Пароль должен содержать минимум один специальный символ'

				} else {
					fieldValidationErrors.password = ''
					passwordValid = true
				}
				break

			default:
				break
		}

		this.setState(
			{
				formErrors: fieldValidationErrors,
				emailValid: emailValid,
				passwordValid: passwordValid
			},
			this.validateForm
		)
	}

	validateForm = () => {
		const { emailValid, passwordValid } = this.state

		this.setState({ formValid: emailValid && passwordValid })
	}

	handleCancel = () => this.setState({ modalOpened: false, hasRegistred: true })

	registerUser = () => {
		const { email, password } = this.state
		
		axios
			.post(
				'http://api.memory-lane.ru/user/registration',
			{ 
				'email': email,
				'password': password
			},
			{
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res => {
				if (res.data.result) {		// res.status === 200
					this.setState({ modalOpened: true })
					
				} else {	// res.status !== 200
					console.error(res.data.error)
					alert(`${res.data.error}`)
				}
			})
			.catch(error => console.error(error))
	}

	render() {
		const { email, password,  confidentiality, formErrors, emailValid, passwordValid, formValid, modalOpened, hasRegistred } = this.state

		const displayEmail = (email.length === 0 || email === null || emailValid) ? 'formErrors displayNone' : 'formErrors'
		const displayPassword = (password.length === 0 || password === null || passwordValid) ? 'formErrors displayNone' : 'formErrors'
		const inputEmail = (email.length > 0 && !emailValid) ? 'textInput inputUser-red' : 'textInput'
		const inputPassword = (password.length > 0 && !passwordValid) ? 'textInput inputUser-red' : 'textInput'
		const checkBox = (emailValid && passwordValid && !confidentiality) ? 'checkbox-confidentiality checkbox-red' : 'checkbox-confidentiality'

		return (
			<div className='formWrapper'>
				<div className='formWrapperItem__titleContainer'>
					<h2 className='textBasic titleContainerItem__title'>Регистрация</h2>
				</div>

				<div className='formContainerItem__form'>
					<input
						className={inputEmail}
						name='email'
						type='email'
						size='0'
						placeholder='Введите электронную почту'
						value={email}
						onChange={this.handleInput}
						required
					/>
					<div className={displayEmail}>
						<Tooltip tooltip={formErrors.email} />
					</div>

					<input
						className={inputPassword}
						name='password'
						type='password'
						placeholder='Придумайте пароль'
						onChange={this.handleInput}
						value={password}
						autocomplete="current-password"
					/>

					<div className={displayPassword}>
						<Tooltip tooltip={formErrors.password} />
					</div>

					<div className='formContainerItem__icons'>
						<a href='https://vk.com/' alt='vk'><FormVK /></a>
						<a href='https://www.instagram.com/' alt='ins'><FormIns /></a>
						<a href='https://ru-ru.facebook.com/' alt='facebook'><FormFB /></a>
						<a href='https://www.google.com/' alt='google'><FormG /></a>
					</div>
						
					<div className={checkBox}>
						<input type="checkbox" id="fruit4" name="fruit-4" checked={confidentiality} onClick={this.confidentialityChange}/>
						<label for="fruit4"><span>Согласен с политикой конфиденциальности</span></label>
					</div>

					<input
						className='textInput formItem__button formItem__button-360'
						type='submit'
						value='Продолжить регистрацию'
						onClick={this.registerUser}
						disabled={!formValid || !confidentiality}
					/>
				</div>

				{/* Change messages in modal window according to server response */}
				<FormModal
					title='registration successful'
					modalOpened={modalOpened}
					onCancel={this.handleCancel}
				>
					<h1>Поздравляем!</h1>
					<p>Вы почти зарегистрированы в memory-lane!<br/>
						На почту отправлено письмо для подтверждения e-mail
					</p>
				</FormModal>
			</div>
		)
	}
}
