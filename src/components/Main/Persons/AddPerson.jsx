import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';
import { getPersons } from '../../../actions/actionPersons';
import FileInput from './FileInput';
import './Persons.sass';


class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.uploadPhoto =  this.uploadPhoto.bind(this);

    this.state = {
      lastName: '',
      firstName: '',
      patronymic: '',
      roleInFamily: '',
      city: '',
      gender: '',
      imagesToUpload: ''
    };
  }


  addPerson = () => {
    const { lastName, firstName, patronymic, gender, roleInFamily, city, imagesToUpload } = this.state;
    const { sessionID } = this.props;
    const data = new FormData();
    data.append('last_name', lastName);
    data.append('first_name', firstName);
    data.append('patronymic', patronymic);
    data.append('role_in_family', roleInFamily);
    data.append('city', city);
    data.append('gender', gender);
    data.append('ico_url', imagesToUpload[0]);

    axios
      .post(
        'http://api.memory-lane.ru/db/setPerson',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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

  uploadPhoto(files) {
    this.setState({
      imagesToUpload: files
    });
  }


  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { lastName, firstName, patronymic, roleInFamily, city, imagesToUpload } = this.state;
    
    return (
      <div className='setPersonContainer'>
        <div className='head1 title'> Создание персоны </div>

        <div className='setPerson'>

          <div className='setPerson__ico' > 
            <img className='setPerson__img' src={(this.state.imagesToUpload.length > 0) ? this.state.imagesToUpload[0].preview : 'http://placehold.it/365x365'} alt='persons icon'/>
            <FileInput
              imagesToUpload={imagesToUpload}
              uploadPhoto={this.uploadPhoto}/>
          </div>

          <div className='setPerson__text'>

            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='lastName'>Фамилия:</label>
              <input
                name='lastName'
                id='lastName'
                className='infoGroup__input'
                placeholder=' '
                type='text'
                onChange={this.handleInput}
                value={lastName}/>
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
                value={firstName}/>
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
                value={patronymic}/>
            </div>

            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='gender'>Пол:</label>
              <form className='genderForm' action=''>
                <input 
                  className='infoGroup__checkbox'
                  id='gender'
                  type='radio'
                  name='gender' 
                  value='male'
                  onChange={this.handleInput}/> Мужчина<br/>
                <input 
                  className='infoGroup__checkbox'
                  type='radio'
                  name='gender' 
                  value='famale'              
                  onChange={this.handleInput}/> Женщина<br/>
              </form>
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
                value={roleInFamily}/>
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
                value={city}/>
            </div>

            
            {/* <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='yourInput'>Ваше поле:</label>
              <input
                name=''
                id='yourInput'
                className='infoGroup__input'
                placeholder=' '
                type='text'
                onChange={this.handleInput}
                value={}
              />
            </div> */}


            <div className='invitePerson'>
              <div className='invitePerson__margin'> Пригласить персону </div>
              <ButtonContainer white={true}>Пригласить</ButtonContainer>
            </div>

            <div className='tag'>
              <div className='infoGroup__name'> Теги:</div>
            </div>
            <Link className='setPerson__button' to={'/persons/'}>
              <ButtonContainer onClick={this.addPerson}>Сохранить</ButtonContainer>
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


