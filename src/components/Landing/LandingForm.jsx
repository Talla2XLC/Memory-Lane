import React, { Component }                  from 'react';
import styled                                from 'styled-components';
import { ReactComponent as FormIconSVG }     from './svg/form_icon.svg';
import { ReactComponent as FormPictureSVG }  from './svg/form_picture.svg';
import WaveBackground                        from './svg/form_wave.svg';

const LandingForm = () => {
  return (
    <FormWrapper>
      <div className='formWrapper'>

        <div className='formWrapperItem__titleContainer'>
          <div className='titleContaierItem__img'>
            <FormIconSVG />
          </div>

          <h2 className='textBasic titleContainerItem__title'>сохраните истории своей семьи в едином пространстве</h2>
        </div>

        <div className='formWrapperItem__img'>
          <FormPictureSVG />
        </div>

        <div className='formWrapperItem__wave' style={{ backgroundImage: `url(${WaveBackground})`}}>

          <div className='waveItem__formContainer'>

            <h2 class='textBasic formContainerItem__title'>
              Скоро ЗАПУСК<br />
              Запишитесь в ранний список
            </h2>

            <form action='/' method='POST'>

                  
                
                
                {/* <input type="text" name="email" placeholder="e-mail*" /><br />
                <input type="text" name="firstName" placeholder="First Name*" id="firstName"/><br />
             
                <input type="submit" value="Register" /> */}


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
  margin: 108px auto 0;
  width: 969.44px;
  height: 370px;
  background-color: red;
  outline: 1px solid red;
}

.formWrapperItem__wave {
  display: flex;
  min-height: 1440px;
}

.waveItem__formContainer {
  margin-left: 64px;
  margin-bottom: 243px;
  height: 534px;
  outline: 1px solid yellow;
}

.formContainerItem__title {
  position: absolute;
  width: 844px;
  height: 118px;
  left: 64px;
  top: 5900px;

  font-family: Rubik;

  font-weight: bold;
  font-size: 44px;


  letter-spacing: 0.07em;
  text-transform: uppercase;

  color: #FFFFFF;
}

`;

export default LandingForm;