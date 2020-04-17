import React                          from 'react';
import styled                         from 'styled-components';

import { ReactComponent as FormIcon } from './svg/form_icon.svg';

import FormPicture                    from './svg/form_picture.svg';
import FormWave                       from './svg/form_wave.svg';

import { ReactComponent as FormVK }   from './svg/form_vk.svg';
import { ReactComponent as FormFB }   from './svg/form_fb.svg';
import { ReactComponent as FormG }    from './svg/form_g.svg';
import { ReactComponent as FormOK }   from './svg/form_ok.svg';

const LandingForm = () => {
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

            <div className='formContainerItem__icons'>
              <FormVK />
              <FormFB />
              <FormG />
              <FormOK />
            </div>

            <form className='formContainerItem__form' action='/' method='POST'>

              <input
                className='textBasic'
                type='email'
                id='email'
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                size='0'
                placeholder='Введите электронную почту'
                required
              />

              <input
                type='text'
                name='firstName'
                placeholder='Введите имя'
                id='firstName'
              />

              <input
                className='formItem__button'
                type='submit'
                value='Регистрация'
              />

            </form>

          </div>

        </div>
      </div>
    </FormWrapper>
  );
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
}

.waveItem__formContainer {
  width: 850px;
  margin-left: 42px;
  margin-top: 700px;
  margin-bottom: 243px;
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
  text-align: left;
  font-family: Roboto;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: 0.04em;
  color: #FFFFFFFF;
}

.formContainerItem__icons {
  min-height: 40px;
  margin-top: 30px;
  text-align: left;
}

.formContainerItem__icons > svg {
  margin-right: 24px;
}

.formContainerItem__form {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  text-align: left;
}

input {
  margin-bottom: 50px;
  height: 50px;
  width: 500px;
  outline: none;
  border-radius: 5px;
  border: none;
  background: #FFFFFF;
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

//? Not working here
.formItem__button:active {
  color: #050156;
}
`;

export default LandingForm;