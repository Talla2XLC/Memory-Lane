import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Persons.sass';
import { ButtonContainer } from '../Button';
import { getPersons } from '../../../actions/actionPersons';

import { Link } from 'react-router-dom';
class AddPerson extends Component {
  state = {
    lastName: '',
    firstName: '',
    patronymic: '',
    roleInFamily: '',
    city: '',
    gender: '',
    icoUrl: ''
  }
  

  addPerson = () => {
    const { lastName, firstName, patronymic, gender, roleInFamily, city, icoUrl } = this.state;
    const { sessionID } = this.props;
    axios
      .post(
        'http://api.memory-lane.ru/db/setPerson',
        {
          'last_name': lastName,
          'first_name': firstName,
          'patronymic': patronymic,
          'role_in_family': roleInFamily,
          'city': city,
          'gender': gender,
          'ico_url': icoUrl
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${sessionID}`
          }
        })
      .then(res => {
        if (res.data.result) {
          this.props.downloadPersons();
        } else {
          console.error(res.data.error);
        }
      })
      .catch(error => console.error(error));
  }

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }
  render() {
    const { lastName, firstName, patronymic, roleInFamily, city, icoUrl } = this.state;
    return (

      <div className='addPersonContainer'>
        <div className='head1 title'> Создание персоны </div>
        <div className='addPerson'>
          <div className='addPerson__img'>
            <img src={'https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk'} />
            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='icoUrl'>Фото:</label>
              <input
                name='icoUrl'
                id='icoUrl'
                className='infoGroup__input'
                placeholder=' '
                type='file'
                onChange={this.handleInput}
                value={icoUrl}
              />
            </div>
          </div>

          <div className='addPerson__text'>
            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='lastName'>Фамилия:</label>
              <input
                name='lastName'
                id='lastName'
                className='infoGroup__input'
                placeholder=' '
                type='text'
                onChange={this.handleInput}
                value={lastName}
              />
            </div>
            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='firstName'>Имя:</label>
              <input
                id='firstName'
                name='firstName'
                className='infoGroup__input'
                placeholder=' '
                type='text'
                onChange={this.handleInput}
                value={firstName}
              />
            </div>
            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='patronymic'>Отчество:</label>
              <input
                id='patronymic'
                name='patronymic'
                className='infoGroup__input'
                placeholder=' '
                type='text'
                onChange={this.handleInput}
                value={patronymic}
              />
            </div>

            <div className='infoGroup'>
              <form action=''>
                <input 
                  type='radio'
                  name='gender' 
                  value='male'
                  onChange={this.handleInput}/> Мужчина<br/>
                <input 
                  type='radio'
                  name='gender' 
                  value='famale'
                  onChange={this.handleInput}/> Женщина<br/>
              </form>
            </div>
            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='city'>Место рождения:</label>
              <input
                name='city'
                id='city'
                className='infoGroup__input'
                placeholder=' '
                type='text'
                onChange={this.handleInput}
                value={city}
              />
            </div>
            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='city'>Степень родства:</label>
              <input
                name='roleInFamily'
                id='roleInFamily'
                className='infoGroup__input'
                placeholder=' '
                type='text'
                onChange={this.handleInput}
                value={roleInFamily}
              />
            </div>
            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='yourInput'>Ваше поле:</label>
              <input
                // name=''
                id='yourInput'
                className='infoGroup__input'
                placeholder=' '
                type='text'
                // onChange={this.handleInput}
                // value={}
              />
            </div>

            <div className='bDayGroup'>
              <label htmlFor='bDay'>Годы жизни:</label>
              <input type='date' id='bDay' name='trip-start' value='01. 01. 2018'
                min='2018-01-01' max='2018-12-31' />
            </div>

            <div className='group'>
              <div className=''> Пригласить персону:</div>
              <ButtonContainer white={true}>Пригласить</ButtonContainer>
            </div>
            <div className='infoGroup'>
              <div className='infoGroup__name'> Теги:</div>
            </div>
            <Link to={'/persons/'}>
              <ButtonContainer className='addPersonButton' onClick={this.addPerson}>Создать</ButtonContainer>
            </Link>


          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessionID: state.session.sessionID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    downloadPersons: () => {
      dispatch(getPersons());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);


