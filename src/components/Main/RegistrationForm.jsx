import React, { Component } from 'react';
import './AuthorizationFormStyle.css';

import { ReactComponent as FormVK }   from './svg/form_vk.svg';
import { ReactComponent as FormFB }   from './svg/form_fb.svg';
import { ReactComponent as FormG }    from './svg/form_g.svg';
import { ReactComponent as FormIns }   from './svg/form_ins.svg';
import { Tooltip } from './Tooltip';
// import { useDispatch } from 'react-redux';
// import Axios from 'axios';

export default class RegistrationForm extends Component {

    state = {
        email: '',
        password: '',
        confidentiality: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false, 
        formValid: false,
        isOpen: false
    }

    handleUserInput = (e) => {                                               
        const name = e.target.name;                                           
        const value = e.target.value;                                     
        this.setState({[name]: value},                                          
            () => { this.validateField(name, value) });             
    }

    confidentialityChange = (e) => {
        this.setState({confidentiality: e.target.checked});
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let isMax = value.length >= 8;
        let isCapital = value.match(/(?=.*?[A-Z])/);
        let oneDigit = value.match(/(?=.*?[0-9])/);
        // let specialCharacter = value.match(/(?=.*?[#?!@$%^&*-])/);
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : 'Неверно введён email';
            break;
          case 'password':
            passwordValid = false;
            if (!isMax) {
                fieldValidationErrors.password = 'Ваш пароль не может быть короче 8 символов длиной';
            } else if (!isCapital) {
                fieldValidationErrors.password = 'Пароль должен содержать минимум одну заглавную букву';
            } else if (!oneDigit) {
                fieldValidationErrors.password = 'Пароль должен содержать минимум одну цифру';
            // } else if (!specialCharacter) {
            //     fieldValidationErrors.password = 'Пароль должен содержать минимум один специальный символ';
            } else {
                fieldValidationErrors.password = '';
                passwordValid = true;
            }
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
    }
    
    validateForm = () => {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    isOpen = (e) => {
        this.setState({isOpen: true});
        e.preventDefault();
    }

    // registerUser = (email, pass) => {
    //     return (email, pass) => {
    //         axios
    //         .post(
    //             'http://api.memory-lane.ru/db/registerApi',
    //             {
    //                 email: email,
    //                 password: pass
    //             },
    //             {
    //                 headers: {
    //                     'Content-Type': 'aplication/json'
    //                 }
    //             }
    //         )
    //         .then(res => {
    //             dispatch(userRegisterSuccess(res.data));
    //         })
    //         .catch(err => {
    //             dispatch(userRegisterFailed(err.message));            
    //         }

    //     ) 
    // }
    // }

    render() {
        const { email, emailValid, password, passwordValid, confidentiality } = this.state;
        const displayEmail = (email.length === 0 || email === null || emailValid) ? 'formErrors displayNone' : 'formErrors';
        const displayPassword = (password.length === 0 || password === null || passwordValid) ? 'formErrors displayNone' : 'formErrors';
        const inputEmail = (email.length > 0 && !emailValid) ? 'textInput input_color_red' : 'textInput';
        const inputPassword = (password.length > 0 && !passwordValid) ? 'textInput input_color_red' : 'textInput';
        const checkBox = (emailValid && passwordValid && !confidentiality) ? 'checkbox-confidentiality checkbox-red' : 'checkbox-confidentiality';
        // const star = '*'.repeat(password.length);
        return (
                <div className='formWrapper'>
                    <div className='formWrapperItem__titleContainer'>
                        <h2 className='textBasic titleContainerItem__title'>Регистрация</h2>
                    </div>
                    <form className='formContainerItem__form' action='/'>                
                        <input
                            className={inputEmail}
                            name='email'
                            type='email'
                            size='0'
                            placeholder='Введите электронную почту'
                            value={this.state.email} 
                            onChange={this.handleUserInput}
                            required
                        />
                        <div className={displayEmail}>
                            <Tooltip tooltip={this.state.formErrors.email} />
                        </div>
                        {/* <input 
                            type="text"
                            className='input-text_theme_star'
                            value={star}
                        /> */}
                        <input
                            className={inputPassword}
                            name='password'
                            type='password'
                            placeholder='Придумайте пароль'
                            onChange={this.handleUserInput}
                            value={this.state.password}
                            autocomplete="current-password"
                        />

                        <div className={displayPassword}>
                            <Tooltip tooltip={this.state.formErrors.password} />
                        </div>

                        <div className='formContainerItem__icons'>
                            <a href='https://vk.com/' alt='vk'><FormVK /></a>
                            <a href='https://www.instagram.com/' alt='ins'><FormIns /></a>
                            <a href='https://ru-ru.facebook.com/' alt='facebook'><FormFB /></a>
                            <a href='https://www.google.com/' alt='google'><FormG /></a>
                        </div>
                        
                        <div className={checkBox}>
                            <input type="checkbox" id="fruit4" name="fruit-4" checked={this.state.confidentiality} onClick={this.confidentialityChange}/>
                            <label for="fruit4"><span>Согласен с политикой конфиденциальности</span></label>                              
                        </div>

                        <input
                            className='textInput formItem__button c-button--width360'
                            type='submit'
                            value='Продолжить регистрацию'
                            onClick={this.isOpen}
                            disabled={!this.state.formValid || !this.state.confidentiality}
                        />
                    </form>
                </div>
        )
    }    
}

