import React, { Component } from 'react'
import './AuthorizationFormStyle.css';

import { ReactComponent as FormVK }   from './svg/form_vk.svg';
import { ReactComponent as FormFB }   from './svg/form_fb.svg';
import { ReactComponent as FormG }    from './svg/form_g.svg';
import { ReactComponent as FormIns }   from './svg/form_ins.svg';

export default class RegistrationForm extends Component {

state = {
    email: '',
    password: '',
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

openEntrance = () => {

}

render() {
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
                        {/* <EmailErrorMessage emailError={this.state.emailError}/> */}

                        <input
                            className='textInput'
                            type='password'
                            placeholder='Придумайте пароль'
                            onChange={this.passwordChange}
                            value={this.state.password}
                        />

                        {/* <PasswordErrorMessage passwordError={this.state.passwordError} /> */}

                        <div className='formContainerItem__icons'>
                            <a href='https://vk.com/' alt='vk'><FormVK /></a>
                            <a href='https://www.instagram.com/' alt='ins'><FormIns /></a>
                            <a href='https://ru-ru.facebook.com/' alt='facebook'><FormFB /></a>
                            <a href='https://www.google.com/' alt='google'><FormG /></a>
                        </div>
                        
                        <div className="checkbox-pol">
                            <input type="checkbox" id="fruit4" name="fruit-4" value="Strawberry" />
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

