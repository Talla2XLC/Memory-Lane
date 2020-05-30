import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Persons.sass';
import {ButtonContainer} from '../Button';
import { Link } from  'react-router-dom';
class Person extends Component {
  render() {
    const currentId = this.props.match.params.id;
    const userPersons =  this.props.persons;
    const currentPerson = userPersons.find( item =>  item.id === currentId);

    return (
      <div className='personContainer'>
        <div className='head1 title'>{currentPerson.last_name} {currentPerson.first_name} {currentPerson.patronymic}</div>
        <div  className='personInfo'>
          <div className='head3 title'>Главное фото</div>
          <img className='profilePhoto' src='https://www.fillmurray.com/g/238/149' />
          <div className='changeProfilePhoto'>Изменить</div>
          <div className='personInfo__text'>
            <div className='infoGroup'>
              <div className='infoGroup__name'>Пол: </div>
              <div>{currentPerson.gender}</div>
            </div>
            <div className='infoGroup'>
              <div className='infoGroup__name'>Степень родства: </div>
              <div>{currentPerson.role_in_family}</div>
            </div>
            <div className='infoGroup'>
              <div className='infoGroup__name'>Место рождения: </div>
              <div>{currentPerson.city}</div>
            </div>
            <div className='infoGroup'>
              <div className='infoGroup__name'>Годы жизни: </div>
              <div>{currentPerson.role_in_family}</div>
            </div>
          </div>
 
          <Link  to={`/persons/edit/${currentId}`}>
          <ButtonContainer>Редактировать</ButtonContainer>
          </Link>
        </div>


        <div className='personFoto'>
          <div className='head3 title'>Фото с персоной</div>
          <div className='personFoto__container'>
            <img className='img' src='https://www.fillmurray.com/g/238/149' />
            <img className='img' src='https://www.fillmurray.com/g/238/149' />
            <img  className='img' src='https://www.fillmurray.com/g/238/149' />
            <img  className='img' src='https://www.fillmurray.com/g/238/149' />
            <img className='img' src='https://www.fillmurray.com/g/238/149' />
            <img className='img' src='https://www.fillmurray.com/g/238/149' />
          </div>
        </div>
        <div className='personStory'> 
          <div className='head3 title'>Истории с персоной</div>
          <div className='personStory__container'>
            <div>story</div>
            <div>story</div>
            <div>story</div>
            <div>story</div>
          </div> 

        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    persons: state.persons.persons
  };
};

export default connect(mapStateToProps)(Person);
