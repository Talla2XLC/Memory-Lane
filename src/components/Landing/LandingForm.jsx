import React, { Component }           from 'react';
import styled                         from 'styled-components';
import { ReactComponent as FormIcon } from './svg/form_icon.svg';
import FormPicture                    from './svg/form_picture.svg';
import FormWave                       from './svg/form_wave.svg';
import { ReactComponent as FormVK }   from './svg/form_vk.svg';
import { ReactComponent as FormFB }   from './svg/form_fb.svg';
import { ReactComponent as FormG }    from './svg/form_g.svg';
import { ReactComponent as FormOK }   from './svg/form_ok.svg';

import LandingFormModal               from './LandingFormModal';

function EmailErrorMessage(props) {
  if (props.emailError) {
    return <div className='{position: relative}'><span className='emailError'>{props.emailError}</span></div>;
  } 
  return null;
}

function NameErrorMessage(props) {
  if (props.nameError) {
    return <div className='{position: relative}'><span className='nameError'>{props.nameError}</span></div>;
  } 
  return null;
}

export default class LandingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '', 
      email: '', 
      nameError: false, 
      emailError: false,
      isOpen: false
    };
  }

  nameChange = (event) => {
    this.setState({name: event.target.value});        
  }

  emailChange = (event) => {
    this.setState({email: event.target.value});
  }

  isEmailValid = (email) => {
    const email_regexp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = email_regexp.test(email);
    if (isEmailValid) {
      this.setState({emailError: true});
      return true;
    } else if (email && !isEmailValid) {
      this.setState({emailError: 'Неверно введён email'});
      return false;
    } else if (!email) {
      this.setState({emailError: 'Введите свой email'});
      return false;
    }
  }

  isNameValid = (name) => {
    const name_regexp = /^\D+$/;
    const isNameValid = name_regexp.test(name);
    if (isNameValid) {
      this.setState({nameError: true});
      return true;
    } else if (name && !isNameValid) {
      this.setState({nameError: 'Имя не должно содержать цифры'});
      return false;
    } else if (!name) {
      this.setState({nameError: 'Введите свое имя'});
      return false; 
    }
  }

  openModal = (event) => {
    const isEmailValid = this.isEmailValid(this.state.email);
    const isNamelValid = this.isNameValid(this.state.name);
    if (isEmailValid && isNamelValid) this.setState({ isOpen: true }); 
    event.preventDefault();
  }

  handleSubmit = () => {
    this.setState({ isOpen: false });
    // event.preventDefault();
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <FormWrapper>
        <div className='formWrapper'>

          <div className='formWrapperItem__titleContainer'>
            <div className='titleContaierItem__img'>
              <FormIcon />
            </div>

            <h2 className='textBasic titleContainerItem__title'>сохраните истории своей семьи в едином пространстве</h2>
          </div>

          <div className='formWrapperItem__img' style={{ backgroundImage: `url(${FormPicture})`}} />

          <div className='formWrapperItem__wave' style={{ backgroundImage: `url(${FormWave})`}}>

            <div className='waveItem__formContainer'>

              <h2 className='textBasic formContainerItem__title'>
                Скоро ЗАПУСК<br />
                Запишитесь в ранний список
              </h2>

              <h3 className='textBasic formContainerItem__text'>
                Станьте одним из первых пользователей сервиса
              </h3>

              <form className='formContainerItem__form' action='/' method='POST'>                
                <input
                  className='textBasic'
                  type='text'
                  // name='firstName'
                  placeholder='Введите имя'
                  // id='firstName'
                  onChange={this.nameChange}
                  value={this.state.name}
                />
                <NameErrorMessage nameError={this.state.nameError} />

                <input
                  className='textBasic'
                  type='email'
                  // id='email'
                  // pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                  size='0'
                  placeholder='Введите электронную почту'
                  value={this.state.email} 
                  onChange={this.emailChange}
                  required
                />
                <EmailErrorMessage emailError={this.state.emailError}/>

                <div className='formContainerItem__icons'>
                  <a href='https://vk.com/' alt='vk'><FormVK /></a>
                  <a href='https://ru-ru.facebook.com/' alt='facebook'><FormFB /></a>
                  <a href='https://www.google.com/' alt='google'><FormG /></a>
                  <a href='https://ok.ru/' alt='ok'><FormOK /></a>
                </div>

                <input
                  className='textBasic formItem__button'
                  type='submit'
                  value='Регистрация'
                  onClick={this.openModal}
                />

              </form>

              <LandingFormModal
                title='Test Dialog window'
                isOpen={this.state.isOpen}
                onCancel={this.handleCancel}
                onSubmit={this.handleSubmit}
              >
                <h1>Спасибо!</h1>
                <p>Вы&nbsp;добавлены<br/> в&nbsp;ранний список</p>
              </LandingFormModal>

            </div>

          </div>

          <div className='formWrapperItem__footer'>

            <div className='footerItem__footerContainer'>

              <div className='footerContainerItem__title'>
                <div className='textBasic titleItem__text'>
                  Memory lane
                </div>
                <div className='titleItem__dot' />
              </div>

              <div className='textBasic titleItem__links'>
                <a href='http://memory-lane.ru/' className='linksItem__link' alt='Privacy policy'>Политика конфидициальности</a>
                <a href='http://memory-lane.ru/' className='linksItem__link' alt='Terms of Use'>Условия использования</a>
                <a href='http://memory-lane.ru' className='linksItem__link' alt='Contact us'>Связаться с нами</a>
              </div>

              <div className='textBasic titleItem__footer'>
                &copy;2020 memory-lane. Все права защищены
              </div>

            </div>
          </div>

        </div>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.div`
background: #FFFFFF;
width: 1440px;

.formWrapper {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.textBasic {
  font-style: normal;
  line-height: 150%;
}

.formWrapperItem__titleContainer {
  display: flex;
  flex-direction: row;
  margin: 0 30px;
}

.titleContainerItem__title {
  margin-left: 26px;
  width: 1264px;
  font-family: Rubik;
  font-weight: bold;
  text-align: left;
  font-size: 32px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #050156;
}

.formWrapperItem__img {
  margin: 108px auto;
  width: 970px;
  min-height: 370px;
}

.formWrapperItem__wave {
  margin-top: -260px;
  background: no-repeat;
  padding-bottom: 260px;
}

.waveItem__formContainer {
  width: 850px;
  margin-left: 42px;
  margin-top: 600px;
  text-align: left;
}

.formContainerItem__title {
  min-height: 118px;
  text-align: left;
  font-family: Rubik;
  font-weight: bold;
  font-size: 44px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #FFFFFF;
}

.formContainerItem__text {
  min-height: 36px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: 0.04em;
  color: #FFFFFFFF;
  margin-bottom: 0;
}

.formContainerItem__icons {
  min-height: 40px;
  margin-top: 30px;
}

.formContainerItem__icons > a {
  margin-right: 24px;
}

.formContainerItem__form {
  display: flex;
  flex-direction: column;
}

input {
  margin-top: 40px;
  height: 50px;
  width: 500px;
  outline: none;
  border-radius: 5px;
  border: none;
  background: #FFFFFF;
}

input:nth-of-type(1) {
  margin-top: 30px;
}

input:focus {
  color: #000000!important;
}

input[placeholder] {
  width: 500px;
  font-family: Roboto;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-indent: 20px;
  color: #9C9C9C;
}

.formItem__button {
  width: 336px;
  min-height: 50px;
  margin-top: 30px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #FB7268;
  border-radius: 5px;
}

//! Remove this after backend part completion
.formItem__button {
  padding: 6px;
  text-decoration: none;
}

.formItem__button:hover,
input[type="submit"]:hover {
  background-color: #EC3727 !important;
  transition: All 0.5s ease;
}

.formItem__button:focus,
input[type="submit"]:focus {
  outline: none !important;
  box-shadow: none !important;
  transition: All 0.5s ease;
}

//* Footer
.formWrapperItem__footer {
  width: 1440px;
  min-height: 464px;
  background: #FFFFFF;
}

.footerItem__footerContainer {
  margin-top: 80px;
  margin-left: 64px;
}

.footerContainerItem__title {
  display: flex;
  width: 210px;
}

.titleItem__text {
  width: 205px;
  font-family: Rubik;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3441B2;
}

.titleItem__dot {
  height: 7px;
  width: 7px;
  align-self: flex-end;
  margin-bottom: 10px;
  background: #FB7268;
  border-radius: 50%;
  display: inline-block;
}

.titleItem__links {
  text-align: left;
  margin: 64px 0 52px 0;
}

.linksItem__link {
  margin-right: 137px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #000000;
}

.emailError,
.nameError {
  width: 500px;
  text-align: center;
  position: absolute;
  font-size: 18px;
  color: white;
}

.titleItem__footer {
  text-align: left;
  width: 374px;
  font-family: Roboto;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.1em;
  font-variant: small-caps;
  color: #000000;
}
`;
