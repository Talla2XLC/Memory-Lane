import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';
import { getPersons } from '../../../actions/actionPersons';
import FileInput from './FileInput';
import './AddAndEdit.sass';
import TagsInput from './TagsInput';

class EditPerson extends Component {
  constructor(props) {
    super(props);
    this.uploadPhoto =  this.uploadPhoto.bind(this);
    this.setTegs =  this.setTegs.bind(this);
    this.unSetTegs = this.unSetTegs.bind(this);

    this.state = {
      lastName: this.props.currentPerson.last_name,
      firstName: this.props.currentPerson.first_name,
      patronymic: this.props.currentPerson.patronymic,
      roleInFamily: this.props.currentPerson.role_in_family,
      city: this.props.currentPerson.city,
      gender: this.props.currentPerson.gender,
      imagesToUpload: this.props.currentPerson.ico_url,
      birthday: this.props.currentPerson.birthday,
      tags: JSON.parse(this.props.currentPerson.tag)
    };
  }

  editPerson = () => {
    const { lastName, firstName, patronymic, gender, roleInFamily, city, imagesToUpload, birthday, tags } = this.state;
    const jsonTags = JSON.stringify(tags);
    const { sessionID, currentId } = this.props;
    const data = new FormData();

    data.append('last_name', lastName);
    data.append('first_name', firstName);
    data.append('patronymic', patronymic);
    data.append('role_in_family', roleInFamily);
    data.append('city', city);
    data.append('gender', gender);
    data.append('ico_url', imagesToUpload[0]);
    data.append('id', currentId);
    data.append('birthday', birthday);
    data.append('tag', jsonTags);

    axios
      .post(
        'http://api.memory-lane.ru/db/updatePerson',
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

  setTegs(newText) {
    this.setState({
      tags: [...this.state.tags, newText]
    });
  }

  unSetTegs(index) {
    const {tags} = this.state;
    this.setState({
      tags: [...this.state.tags.filter(tag => tags.indexOf(tag) !== index)]
    });
  }

  render() {
    const { lastName, firstName, patronymic, roleInFamily, city, imagesToUpload, birthday, tags } = this.state;
    return (
      <div className='setPersonContainer'>
        <div className='head1 title'> Изменение персоны </div>
        <div className='setPerson'>
          <div className='setPerson__ico' > 
            <img className='setPerson__img' src={(typeof imagesToUpload === 'string') ? this.state.imagesToUpload : this.state.imagesToUpload[0].preview} alt='persons icon'/>
            <FileInput
              imagesToUpload={imagesToUpload}
              uploadPhoto={this.uploadPhoto}
            />
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
                required={lastName  ? true : false}
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
                required={firstName  ? true : false}
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
                required={patronymic  ? true : false}
                value={patronymic}/>
            </div>

            <div className='infoGroup'>
              <label className='infoGroup__name' htmlFor='gender'>Пол:</label>
              <form className='genderForm' action=''>
                <input 
                  id='gender'
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
              <label className='infoGroup__name' htmlFor='birthday'>Дата рождения:</label>
              <input
                id='birthday'
                name='birthday'
                className='infoGroup__input'
                placeholder=' '
                type='date'
                onChange={this.handleInput}
                required={birthday  ? true : false}
                value={birthday}/>
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
                required={roleInFamily  ? true : false}
                value={roleInFamily}/>
            </div>

            <div className='infoGroup'>
              <div className='infoGroup__name'>Теги:</div>
              <TagsInput
                tags={tags}
                setTegs={this.setTegs}
                unSetTegs={this.unSetTegs}
              />
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
                required={city  ? true : false}
                value={city}/>
            </div>

            <Link className='setPerson__button' to={'/persons/'}>
              <ButtonContainer onClick={this.editPerson}>Сохранить</ButtonContainer>
            </Link>
            <Link className='cancelButton setPerson__button' to={'/persons/'}>
              <ButtonContainer white={true}>Отмена</ButtonContainer>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditPerson);


