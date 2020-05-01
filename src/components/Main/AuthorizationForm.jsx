import React, { Component } from 'react';
import './AuthorizationFormStyle.css';


import { ReactComponent as FormVK }   from './svg/form_vk.svg';
import { ReactComponent as FormFB }   from './svg/form_fb.svg';
import { ReactComponent as FormG }    from './svg/form_g.svg';
import { ReactComponent as FormIns }   from './svg/form_ins.svg';

export default class AuthorizationForm extends Component {

state = {
    email: '',
    password: '',
    emailError: false,
    passwordError: false, 
    isOpen: false
}

handleUserInput = (e) => {                                               
    const name = e.target.name;                                           
    const value = e.target.value;                                     
    this.setState({[name]: value});             
}

isOpen = (e) => {
    this.setState({isOpen: true});
    e.preventDefault();
}

render() {
        return (
                <div className='formWrapper'>
                    <div className='formWrapperItem__titleContainer'>
                        <h2 className='textBasic titleContainerItem__title'>Войти</h2>
                    </div>
                    <form className='formContainerItem__form' action='/' method='POST'>                
                        <input
                            className='textInput'
                            name='email'
                            type='email'
                            size='0'
                            placeholder='Введите электронную почту'
                            value={this.state.email} 
                            onChange={this.handleUserInput}
                            required
                        />
                        {/* <EmailErrorMessage emailError={this.state.emailError}/> */}

                        <input
                            className='textInput'
                            name='password'
                            type='password'
                            placeholder='Введите пароль'
                            onChange={this.handleUserInput}
                            value={this.state.password}
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
                            onClick={this.isOpen}
                        />

                    </form>
                    <div className='registration-container__link'>
                        <a className='registration__link' href='#RegistrationForm' alt='Registration'>Еще не зарегистрированы?</a>
                    </div>
                </div>
        )
    }    
}

