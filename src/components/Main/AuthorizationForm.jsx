import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

import './AuthorizationFormStyle.css'

import { ReactComponent as FormVK }	from './svg/form_vk.svg'
import { ReactComponent as FormFB }	from './svg/form_fb.svg'
import { ReactComponent as FormG }	from './svg/form_g.svg'
import { ReactComponent as FormIns }	from './svg/form_ins.svg'

import axios from 'axios'

export default class AuthorizationForm extends Component {

	state = {
		email: '',
		password: '',
		emailError: false,
		passwordError: false,
		hasLoggedIn: false
	}

	handleInput = e => {
		const { name, value } = e.target

		this.setState({ [name]: value })
	}

	LogInUser = () => {
		const { email, password } = this.state

		axios
			.post(
				'http://api.memory-lane.ru/user/auth',
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
				if (res.data.result) {	// res.status === 200
					localStorage.setItem('token', res.data.token)				
					this.setState({ hasLoggedIn: true })
					// this.forceUpdate()

				} else {	// res.status !== 200
					console.error(res.data.error)
					alert(`${res.data.error}`)
				}
			})
			.catch(error => console.error(error))
	}

	render() {
		const { email, password } = this.state

		// this.context.router.transitionTo('/main')

		return (
			<div className='formWrapper'>
				<div className='formWrapperItem__titleContainer'>
					<h2 className='textBasic titleContainerItem__title'>Войти</h2>
				</div>

				<div className='formContainerItem__form'>
					<input
						className='textInput'
						name='email'
						type='email'
						size='0'
						placeholder='Введите электронную почту'
						value={email} 
						onChange={this.handleInput}
						required
					/>

					{/* <EmailErrorMessage emailError={this.state.emailError}/> */}

					<input
						className='textInput'
						name='password'
						type='password'
						placeholder='Введите пароль'
						onChange={this.handleInput}
						value={password}
					/>

					{/* <PasswordErrorMessage passwordError={this.state.passwordError} /> */}

					<div className='formContainerItem__icons'>
						<a href='https://vk.com/' alt='vk'><FormVK /></a>
						<a href='https://www.instagram.com/' alt='ins'><FormIns /></a>
						<a href='https://ru-ru.facebook.com/' alt='facebook'><FormFB /></a>
						<a href='https://www.google.com/' alt='google'><FormG /></a>
					</div>

					<input
						className='textInput formItem__button formItem__button-360'
						type='submit'
						value='Войти'
						onClick={this.LogInUser}
					/>

				</div>

				<div className='registration-container__link'>
					<Link className='registration__link' to={ `/register` }>
						Еще не зарегистрированы?
					</Link>
					{/* <a className='registration__link' href='#RegistrationForm' alt='Registration'>Еще не зарегистрированы?</a> */}
				</div>
				{/* Modal window here */}
			</div>
		)
	}
}
