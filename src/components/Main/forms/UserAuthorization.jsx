import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './UserFormStyle.sass';
import { ButtonContainer } from '../generalUi/Button.jsx';

import { ReactComponent as FormVK }	from '../../../assets/Images/General/form_vk.svg';
import { ReactComponent as FormFB }	from '../../../assets/Images/General/form_fb.svg';
import { ReactComponent as FormG }	from '../../../assets/Images/General/form_g.svg';
import { ReactComponent as FormIns }	from '../../../assets/Images/General/form_ins.svg';
import { ReactComponent as EyeClosed }	from '../../../assets/Images/General/eye_closed.svg';
import { ReactComponent as EyeOpen }	from '../../../assets/Images/General/eye_open.svg';

import axios from 'axios';
import { connect } from 'react-redux';
import { setSession } from '../../../redux/actions/sessionSet';
import { sessionCheck } from '../../../redux/actions/sessionCheck';
import { fetchUserFullName } from '../../../redux/actions/actionUserFullName';

class UserAuthorization extends Component {
  state = {
	email: '',
	password: '',
	emailError: false,
	passwordError: false,
	hasLoggedIn: false,
	openEye: false
  };
	
	handleInput = e => {
	  const { name, value } = e.target;

	  this.setState({ [name]: value });
	};

	LogInUser = () => {
	  const { email, password } = this.state;
	  const { setSessionID, checkSessionID, checkUserName } = this.props;

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
	        localStorage.setItem('token', res.data.token);
	        setSessionID(res.data.token);
	       	checkSessionID(res.data.token);
	        checkUserName();
	      } else {	// res.status !== 200
	        console.error(res.data.error);
	        alert(`${res.data.error}`);
	      }
	    })
	    .catch(error => console.error(error));
	};

	render() {
	  const { email, password, openEye } = this.state;

	  return (
		<div className='container-form'>
			<div className='formWrapper'>
				
			<div className='formWrapperItem__titleContainer'>
				<h2 className='titleContainerItem__title'>Войти</h2>
			</div>

			<div className='formContainerItem__icons'>
					<div className='container__icons'>
						<a className='socials-icon' href='https://vk.com/' alt='vk'><FormVK /></a>
						<a className='socials-icon' href='https://www.instagram.com/' alt='ins'><FormIns /></a>
						<a className='socials-icon' href='https://ru-ru.facebook.com/' alt='facebook'><FormFB /></a>
						<a className='socials-icon' href='https://www.google.com/' alt='google'><FormG /></a>									
					</div>
					<div className='formContainerItem__message'>Присоединиться через соц. сети</div>
			</div>

			<div className='form-or'>
				<hr/>или<hr/>
			</div>

			<div className='formContainerItem__form'>

				<div>
					<legend>Эл. почта</legend>
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
				</div>

				{/* <EmailErrorMessage emailError={this.state.emailError}/> */}
				<div className='form-password'>
					<legend>Пароль</legend>	
					<input
						className='textInput'
						name='password'
						type={openEye ? 'text': 'password'}
						placeholder='Введите пароль'
						onChange={this.handleInput}
						value={password}
						required
					/>
					<button 
						className='btn-show_closed'
						// onClick={this.clickEye}
						onClick={() => this.setState({ openEye: !openEye })}
					>
					    {openEye ? <EyeOpen/> : <EyeClosed/>}
					</button>
				</div>
				{/* <PasswordErrorMessage passwordError={this.state.passwordError} /> */}
                <div className='c-password-reset'>
					<a href='http://dev.memory-lane.ru/auth' className='c-password-reset__link'>
						Забыли пароль?
					</a>
				</div>
				<ButtonContainer
					className='btn-auth'
					type='submit'
					onClick={this.LogInUser}
				>
					Войти
				</ButtonContainer>
			
			</div>

			<div className='c-registration__link'>
				<Link className='registration__link' to='/register'>
							Вы еще не зарегистрированы?
				</Link>
			</div>
			{/* Modal window here */}
			</div>
		</div>
	  );
	}
}

const mapStateToProps = state => {
  return {
    sessionID: state.session.sessionID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSessionID: sessionID => {
      dispatch(setSession(sessionID));
    },
    checkSessionID: sessionID => {
      dispatch(sessionCheck(sessionID));
    },
    checkUserName: () => {
      dispatch(fetchUserFullName());
    }		
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorization);
