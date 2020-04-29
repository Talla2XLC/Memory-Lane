import React, { Component } from 'react'
import './AuthorizationFormStyle.css';

import { ReactComponent as FormVK }   from './svg/form_vk.svg';
import { ReactComponent as FormFB }   from './svg/form_fb.svg';
import { ReactComponent as FormG }    from './svg/form_g.svg';
import { ReactComponent as FormIns }   from './svg/form_ins.svg';
import { FormErrors } from './FormErrors';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

export default class RegistrationForm extends Component {

    state = {
        email: '',
        password: '',
        confidentiality: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false, 
        formValid: false
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

    // isEmailValid = (email) => {
    //     const email_regexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    //     let isEmailValid = email_regexp.test(email);
    //     if(isEmailValid){
    //         this.setState({emailError: true});
    //         return true;
    //     } else if(email && !isEmailValid) {
    //         this.setState({emailError: 'Неверно введён email'});
    //         return false;
    //     } else if(!email) {
    //         this.setState({emailError: 'Введите свой email'});
    //     return false;
    //     }
    // }

    // isPasswordValid = (password) => {
    //     const password_regexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    //     let isPasswordValid = password_regexp.test(password);
    //     if(isPasswordValid){
    //         this.setState({passwordError: true});
    //         return true;
    //     } else if (password && !isPasswordValid) {
    //         this.setState({passwordError: 'Ваш пароль должен быть от 8 до 30 символов длиной, и содержать одну заглавную букву, один символ, и число'});
    //         return false;
    //     } else if (!password) {
    //         this.setState({passwordError: 'Придумайте пароль'});
    //         return false; 
    //     }
    // }

    

    // isConfidentialityValid = () => {

    // }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : 'Неверно введён email';
            break;
          case 'password':
            let isMax = value.length >= 8;
            let isCapital = value.match(/(?=.*?[A-Z])/);
            let oneDigit = value.match(/(?=.*?[0-9])/);
            let specialCharacter = value.match(/(?=.*?[#?!@$%^&*-])/);

            if (!isMax) {
                fieldValidationErrors.password = 'Ваш пароль должен быть от 8 до 30 символов длиной';
            } else if (!isCapital) {
                fieldValidationErrors.password = 'Пароль должен содержать минимум одну заглавную букву';
            } else if (!oneDigit) {
                fieldValidationErrors.password = 'Пароль должен содержать минимум одну цифру';
            } else if (!specialCharacter) {
                fieldValidationErrors.password = 'Пароль должен содержать минимум один специальный символ';
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

    // validateForm = (e) => {
    //     let isEmailValid = this.isEmailValid(this.state.email);
    //     let isPasswordValid = this.isPasswordValid(this.state.password);
    //     let confident = this.state.confidentiality;
    //     this.setState({formValid: isEmailValid && isPasswordValid && confident}); 
    //     // e.preventDefault();
    // }

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
        const { formValid, confidentiality } = this.state;
        const checkBox = (formValid && !confidentiality) ? 'checkbox-confidentiality checkbox-red' : 'checkbox-confidentiality';
        return (
                <div className='formWrapper'>
                    <div className='formWrapperItem__titleContainer'>
                        <h2 className='textBasic titleContainerItem__title'>Регистрация</h2>
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
                        <FormErrors formErrors={this.state.formErrors.email} />

                        <input
                            className='textInput'
                            name='password'
                            type='password'
                            placeholder='Придумайте пароль'
                            onChange={this.handleUserInput}
                            value={this.state.password}
                        />
                        <FormErrors formErrors={this.state.formErrors.password} />

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
                            className='textInput formItem__button formItem__button-360'
                            type='submit'
                            value='Зарегистрироваться'
                            onClick={this.validateForm}
                        />
                    </form>
                </div>
        )
    }    
}

