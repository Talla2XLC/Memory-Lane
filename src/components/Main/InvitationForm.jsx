import React, { Component } from 'react';
import './AuthorizationFormStyle.css';
import { Tooltip } from './Tooltip';
import { ReactComponent as FormVK }   from './svg/form_vk.svg';
import { ReactComponent as FormFB }   from './svg/form_fb.svg';
import { ReactComponent as FormG }    from './svg/form_g.svg';
import { ReactComponent as FormIns }   from './svg/form_ins.svg';

export default class InvitationForm extends Component {

state = {
    email: '',
    role: 'reader',
    formErrors: {email: ''},
    emailValid: false,
    isOpen: false
}

handleUserInput = (e) => {                                               
    const name = e.target.name;                                           
    const value = e.target.value;                                    
    this.setState({[name]: value},                                          
        () => { this.validateField(name, value) });             
}

handleRadioChange = (e) => {
    this.setState({role: e.target.value});
}

validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Неверно введён email';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors, emailValid: emailValid});
}

isOpen = (e) => {
    this.setState({isOpen: true});
    e.preventDefault();
}

render() {
        const { email, emailValid } = this.state;
        const displayTooltipEmail = (email.length === 0 || email === null || emailValid) ? 'formErrors displayNone' : 'formErrors';
        const inputEmail = (email.length > 0 && !emailValid) ? 'textInput input_color_red' : 'textInput';
        return (
                <div className='formWrapper'>
                    <div className='formWrapperItem__titleContainer'>
                        <h2 className='textBasic titleContainerItem__title titleContainer_indent'>Пригласите друга</h2>
                        <p className='textBasic'>Пригласите своего близкого человека,<br/> чтобы он&nbsp;стал частью вашей истории</p>
                    </div>
                    <form className='formContainerItem__form formContainerItem_indent' action='/' method='POST'>                
                        <input
                            className={inputEmail}
                            name='email'
                            type='email'
                            size='0'
                            placeholder='Email'
                            value={this.state.email} 
                            onChange={this.handleUserInput}
                            required
                        />
                        <div className={displayTooltipEmail}>
                            <Tooltip tooltip={this.state.formErrors.email} />
                        </div>

                        <div className='role-form'>
                            <div className='role-form__title'>Роль</div>
                            <div className='radio-input'>
                                <input type="radio" id="reader" name="role" value='reader' checked={this.state.role == 'reader'} onClick={this.handleRadioChange}/>
                                <label for="reader"><span>Читатель</span><span>Только чтение</span></label>
                            </div>
                            <div className='radio-input'>
                                <input type="radio" id="сommentator" name="role" value='сommentator' checked={this.state.role == 'сommentator'} onClick={this.handleRadioChange}/>
                                <label for="сommentator"><span>Комментатор</span><span>Читать и оставлять комментарии</span></label>
                            </div>
                            <div className='radio-input'>
                                <input type="radio" id="administrator" name="role" value='administrator' checked={this.state.role == 'administrator'} onClick={this.handleRadioChange}/>
                                <label for="administrator"><span>Администратор</span><span>Добавлять фотографии без удаления</span></label>
                            </div>
                        </div>

                        <input
                            className='textInput formItem__button c-button--width360 button_indent'
                            type='submit'
                            value='Пригласить'
                            onClick={this.isOpen}
                        />

                        <p className='social__text'>Поделиться ссылкой в соцсетях</p>

                        <div className='formContainerItem__icons formContainerItem__icons_indent'>
                            <a href='https://vk.com/' alt='vk'><FormVK /></a>
                            <a href='https://www.instagram.com/' alt='ins'><FormIns /></a>
                            <a href='https://ru-ru.facebook.com/' alt='facebook'><FormFB /></a>
                            <a href='https://www.google.com/' alt='google'><FormG /></a>
                        </div>

                    </form>

                </div>
        )
    }    
}

