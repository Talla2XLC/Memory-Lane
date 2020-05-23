import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './UserFormStyle.sass';
import { ButtonContainer } from './Button.jsx';

import FormModal  from './UserRegistrationModal';

import { ReactComponent as FormVK }	from './svg/form_vk.svg';
import { ReactComponent as FormFB }	from './svg/form_fb.svg';
import { ReactComponent as FormG }	from './svg/form_g.svg';
import { ReactComponent as FormIns }	from './svg/form_ins.svg';

// import { Tooltip } from './UserRegistrationTooltip';

import axios from 'axios';

export default class UserRegistration extends Component {
	state = {
	  email: '',
	  password: '',
	  formErrors: {
	    email: '',
	    password: {message1: '', message2: '', message3: ''}
	  },
	  emailValid: false,
	  passwordValid: false, 
	  formValid: false,
	  isOpen: false,
	  modalOpened: false,
	  hasRegistred: false
	}

	handleInput = e => {
	  const { name, value } = e.target;

	  this.setState({ [name]: value },
	    () => { this.validateField(name, value); });
	}

	confidentialityChange = e => this.setState({ confidentiality: e.target.checked })

	validateField(fieldName, value) {
	  const fieldValidationErrors = this.state.formErrors;
	  let emailValid = this.state.emailValid;
	  let passwordValid = this.state.passwordValid;
	  let Open = this.state.isOpen;

	  const isMax = value.length >= 8;
	  const isCapital = value.match(/(?=.*?[A-Z])/);
	  const oneDigit = value.match(/(?=.*?[0-9])/);
	
	  switch (fieldName) {
	    case 'email':
	      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	      fieldValidationErrors.email = emailValid ? '' : 'Неверно введён email';
	      break;

	    case 'password':
		  passwordValid = false;
		//   Open = false;

	      if (Open && !isMax) {
			fieldValidationErrors.password.message1 = 'text_theme_erorr';
	      } else if (isMax) {
	        fieldValidationErrors.password.message1 = 'text_color_green';
	      } else if (Open && !isCapital) {
	        fieldValidationErrors.password.message2 = 'text_theme_erorr';
	      } else if (isCapital) {
	        fieldValidationErrors.password.message2 = 'text_color_green';
	      } else if (Open && !oneDigit) {
	        fieldValidationErrors.password.message3 = 'text_theme_erorr';
	      } else if (oneDigit) {
	        fieldValidationErrors.password.message3 = 'text_color_green';
	      } else {
	        passwordValid = true;
	      }
	      break;

	    default:
	      break;
	  }

	  this.setState(
	    {
	      formErrors: fieldValidationErrors,
	      emailValid: emailValid,
	      passwordValid: passwordValid
	    },
	    this.validateForm
	  );
	}

	validateForm = () => {
	  const { emailValid, passwordValid } = this.state;

	  this.setState({ formValid: emailValid && passwordValid });
	}

	handleCancel = () => this.setState({ modalOpened: false, hasRegistred: true })

	registerUser = () => {
	  const { email, password } = this.state;
		
	  this.setState({isOpen: true });

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
	        this.setState({ modalOpened: true });
	      } else {	// res.status !== 200
	        console.error(res.data.error);
	        alert(`${res.data.error}`);
	      }
	    })
		.catch(error => console.error(error));
		
	}

	render() {
		const { email, password, formErrors, emailValid, passwordValid, formValid, modalOpened, hasRegistred } = this.state;

		const inputEmail = (email.length > 0 && !emailValid) ? 'text-basic text_theme_erorr' : 'text-basic';
		const inputPassword = (password.length > 0 && modalOpened && !passwordValid) ? 'text-basic' : 'text-basic';
		// const btnEye = '';

		if (hasRegistred) return <Redirect to='/auth'/>;

		return (
				<div className='container-form'>
					<div className='formWrapper'>
						<div className='formWrapperItem__titleContainer'>
							<h2 className='titleContainerItem__title'>Регистрация</h2>
						</div>

						<div className='formContainerItem__form'>

							<div className='formContainerItem__icons'>
								<div>
									<a className='socials-icon' href='https://vk.com/' alt='vk'><FormVK /></a>
									<a className='socials-icon' href='https://www.instagram.com/' alt='ins'><FormIns /></a>
									<a className='socials-icon' href='https://ru-ru.facebook.com/' alt='facebook'><FormFB /></a>
									<a className='socials-icon' href='https://www.google.com/' alt='google'><FormG /></a>									
								</div>
								<div className='formContainerItem__message'>Присоединиться через соц. сети</div>
							</div>

							<div className='form-or'><hr/>или<hr/></div>
							<div>
								<legend>Эл. почта</legend>
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
							</div>

							<div className='form-password'>
								<legend>Пароль</legend>	
								<input
									id='password'
									className={inputPassword}
									name='password'
									type='password'
									placeholder='Придумайте пароль'
									onChange={this.handleInput}
									value={password}
									autoComplete='current-password'
								/>
								{/* <button className={btnEye} /> */}
							</div>

							<ul className='f-validation-message'> 
								<li className={'validation-message ' + formErrors.password.message1}>Ваш пароль должен быть от 8 символов длиной</li>
								<li className={'validation-message ' + formErrors.password.message2}>Пароль должен содержать минимум одну заглавную букву</li>
								<li className={'validation-message ' + formErrors.password.message3}>Пароль должен содержать минимум одну цифру</li>
							</ul>
										
							<ButtonContainer
								className='formItem__button'
								type='submit'
								onClick={this.registerUser}
							>
								Зарегистрироваться
							</ButtonContainer>

							<div className='f-privacy-agreement'>
								<span>Нажимая на кнопку, Вы соглашаетесь с политикой конфиденциальности</span>
							</div>
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
				</div>	
		);
	}
}
