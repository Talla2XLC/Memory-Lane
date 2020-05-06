import React, { Component } from 'react';
import { Tooltip } from './Tooltip';
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
                firstNameValid = false;
                if (oneDigit) {
                    fieldValidationErrors.firstName = 'Имя не должно содержать цифры';
                } else {
                    fieldValidationErrors.firstName = ''; 
                    firstNameValid = true;                    
                }   
                break;
            case 'lastName':
                lastNameValid = false;
                if (oneDigit) {
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
                const inputFirstName = (firstName.length > 0 && !firstNameValid) ? 'textInput input_color_red' : 'textInput';
                const inputLastName = (lastName.length > 0 && !lastNameValid) ? 'textInput container__input input_color_red' : 'textInput container__input';
                const displayfirstName = (firstName.length === 0 || firstName === null || firstNameValid) ? 'formErrors displayNone' : 'formErrors';
                const displaylastName = (lastName.length === 0 || lastName === null || lastNameValid) ? 'formErrors displayNone' : 'formErrors';
                return (
                        <div className='formWrapper'>
                            <div className='formWrapperItem__titleContainer title__item'>
                                <h2 className='textBasic titleContainerItem__title'>Мы&nbsp;незнаем, как к&nbsp;вам обращаться, представьтесь, пожалуйста</h2>
                            </div>
                            <form className='formContainerItem__form' action='/' method='POST'>                
                                <input
                                    className={inputFirstName}
                                    name='firstName'
                                    type='text'
                                    size='0'
                                    placeholder='Введите свое имя'
                                    value={this.state.firstName} 
                                    onChange={this.handleUserInput}
                                    required
                                />
                                <div className={displayfirstName}>
                                    <Tooltip tooltip={this.state.formErrors.firstName}/>
                                </div>
                                <input
                                    className={inputLastName}
                                    name='lastName'
                                    type='text'
                                    placeholder='Введите свою фамилию'
                                    onChange={this.handleUserInput}
                                    value={this.state.lastName}
                                />

                                <div className={displaylastName}>
                                    <Tooltip tooltip={this.state.formErrors.lastName}/>
                                </div>

                                <input
                                    className='textInput formItem__button c-button--width360 f__button--indent-mt64'
                                    type='submit'
                                    value='Представиться'
                                    onClick={this.isOpen}
                                    disabled={!this.state.formValid}
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

