import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import FormModal  from './FormModal';
import './AuthorizationFormStyle.css';

export default class RegistrationFormName extends Component {

        state = {
            firstName: '',
            lastName: '',
            formErrors: {firstName: '', lastName: ''},
            firstNameValid: false,
            lastNameValid: false, 
            formValid: false,
            isOpen: false
        }

        handleUserInput = (e) => {                                               
            const name = e.target.name;                                           
            const value = e.target.value;                                     
            this.setState({[name]: value}, 
            () => { this.validateField(name, value) });             
        }

        validateField(fieldName, value) {
            let fieldValidationErrors = this.state.formErrors;
            let firstNameValid = this.state.firstNameValid;
            let lastNameValid = this.state.lastNameValid;
            let oneDigit = value.match(/(?=.*?[0-9])/);

            switch(fieldName) {
            case 'firstName':
                firstNameValid = oneDigit;
                if (firstNameValid) {
                    fieldValidationErrors.firstName = 'Имя не должно содержать цифры';
                } else {
                    fieldValidationErrors.firstName = ''; 
                    firstNameValid = true;                    
                }   
                break;
            case 'lastName':
                lastNameValid = oneDigit;
                if (lastNameValid) {
                    fieldValidationErrors.lastName = 'Фамилия не должна содержать цифры';
                } else {
                    fieldValidationErrors.lastName = ''; 
                    lastNameValid = true;                    
                }     
                break;
            default:
                break;
            }
            this.setState({formErrors: fieldValidationErrors,
                            firstNameValid: firstNameValid,
                            lastNameValid: lastNameValid
                        }, this.validateForm);
        }

        validateForm = () => {
            this.setState({formValid: this.state.firstNameValid && this.state.lastNameValid});
        }

        isOpen = (e) => {
            this.setState({isOpen: true});
            e.preventDefault();
        }

        handleCancel = () => {
            this.setState({ isOpen: false });
        }

        render() {
                const { firstName, firstNameValid, lastName, lastNameValid } = this.state;
                const displayfirstName = (firstName.length == 0 || firstName === null || firstNameValid) ? 'displayNone' : '';
                const displaylastName = (lastName.length === 0 || lastName === null || lastNameValid) ? 'displayNone' : '';
                return (
                        <div className='formWrapper'>
                            <div className='formWrapperItem__titleContainer title__item'>
                                <h2 className='textBasic titleContainerItem__title'>Мы&nbsp;незнаем, как к&nbsp;вам обращаться, представьтесь, пожалуйста</h2>
                            </div>
                            <form className='formContainerItem__form' action='/' method='POST'>                
                                <input
                                    className='textInput'
                                    name='firstName'
                                    type='text'
                                    size='0'
                                    placeholder='Введите свое имя'
                                    value={this.state.firstName} 
                                    onChange={this.handleUserInput}
                                    required
                                />
                                <div className={displayfirstName}>
                                    <FormErrors formErrors={this.state.formErrors.firstName}/>
                                </div>
                                <input
                                    className='textInput container__input'
                                    name='lastName'
                                    type='text'
                                    placeholder='Введите свою фамилию'
                                    onChange={this.handleUserInput}
                                    value={this.state.lastName}
                                />

                                <div className={displaylastName}>
                                    <FormErrors formErrors={this.state.formErrors.lastName}/>
                                </div>

                                <input
                                    className='textInput formItem__button formItem__button-360 formItem__button-64'
                                    type='submit'
                                    value='Представиться'
                                    onClick={this.isOpen}
                                    // disabled={!this.state.formValid}
                                />

                            </form>

                            <FormModal
                                title="Test Dialog window"
                                isOpen={this.state.isOpen}
                                onCancel={this.handleCancel}
                                onSubmit={this.handleSubmit}
                                >
                                <h1>Поздравляем!</h1>
                                <p>Вы&nbsp;зарегистрированы в&nbsp;memory-lane!<br/>
                                    На почту отправлено письмо для подтверждения e-mail</p>
                            </FormModal>

                        </div>
                )
        }    
}

