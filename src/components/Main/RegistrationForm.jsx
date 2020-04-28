import React, { Component } from 'react'
import './AuthorizationFormStyle.css';

import { ReactComponent as FormVK }   from './svg/form_vk.svg';
import { ReactComponent as FormFB }   from './svg/form_fb.svg';
import { ReactComponent as FormG }    from './svg/form_g.svg';
import { ReactComponent as FormIns }   from './svg/form_ins.svg';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

function EmailErrorMessage(props) {
    if (props.emailError) {
      return <div className="{position: relative}"><span className="emailError">{props.emailError}</span></div>;
    } else {
      return null;
    }
  }
  
function PasswordErrorMessage(props) {
    if (props.passwordError) {
      return <div className="{position: relative}"><span>{props.passwordError}</span></div>;
    } else {
      return null;
    }
  }

export default class RegistrationForm extends Component {

state = {
    email: '',
    password: '',
    confidentiality: '',
    emailError: false,
    passwordError: false, 
    isOpen: false
}

emailChange = (event) => {
    this.setState({email: event.target.value});
}

passwordChange = (event) => {
    this.setState({password: event.target.value});    
}

confidentialityChange = (event) => {
    this.setState({confidentiality: event.target.checked});
}

isEmailValid = (email) => {
    const email_regexp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmailValid = email_regexp.test(email);
    if(isEmailValid){
        this.setState({emailError: true});
        return true;
    } else if(email && !isEmailValid) {
        this.setState({emailError: 'Неверно введён email'});
        return false;
    } else if(!email) {
        this.setState({emailError: 'Введите свой email'});
      return false;
    }
}

isPasswordValid = (password) => {
    const password_regexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let isPasswordValid = password_regexp.test(password);
    if(isPasswordValid){
        this.setState({passwordError: true});
        return true;
    } else if (password && !isPasswordValid) {
        this.setState({passwordError: 'Ваш пароль должен быть от 8 до 30 символов длиной, и содержать одну заглавную букву, один символ, и число'});
        return false;
    } else if (!password) {
        this.setState({passwordError: 'Придумайте пароль'});
        return false; 
    }
}

// isConfidentialityValid = () => {

// }

openEntrance = (event) => {
    let isEmailValid = this.isEmailValid(this.state.email);
    let isPasswordValid = this.isPasswordValid(this.state.password);
    let confident = this.state.confidentiality;
    if (isEmailValid && isPasswordValid && confident) this.setState({ isOpen: true }); 
    event.preventDefault();
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
        const checkBox = (this.state.isOpen && !this.state.confidentiality) ? 'checkbox-confidentiality2' : 'checkbox-confidentiality';
        return (
                <div className='formWrapper'>
                    <div className='formWrapperItem__titleContainer'>
                        <h2 className='textBasic titleContainerItem__title'>Регистрация</h2>
                    </div>
                    <form className='formContainerItem__form' action='/' method='POST'>                
                        <input
                            className='textInput'
                            type='email'
                            size='0'
                            placeholder='Введите электронную почту'
                            value={this.state.email} 
                            onChange={this.emailChange}
                            required
                        />
                        <EmailErrorMessage emailError={this.state.emailError}/>

                        <input
                            className='textInput'
                            type='password'
                            placeholder='Придумайте пароль'
                            onChange={this.passwordChange}
                            value={this.state.password}
                        />

                        <PasswordErrorMessage passwordError={this.state.passwordError} />

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
                            onClick={this.openEntrance}
                        />
                    </form>
                </div>
        )
    }    
}

