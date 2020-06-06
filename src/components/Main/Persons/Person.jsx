import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Persons.sass';
import {ButtonContainer} from '../Button';
import EditPerson from './EditPerson';
import { getPersons } from '../../../actions/actionPersons';
import {ReactComponent as EmtyPhoto} from './svg/emptyPhotoBlock.svg';
import {ReactComponent as EmtyStory} from './svg/emptyStoryBlock.svg';
import { Link } from 'react-router-dom';

class Person extends Component {
  constructor(props) {
    super(props);
    this.editOn = this.editOn.bind(this);
    this.state = {
      edit: false
    };
  }

  deletePerson = () => {
    const { sessionID } = this.props;
    const currentId = this.props.match.params.id;   
    const data = new FormData();
    data.append('id', currentId);
    axios
      .post(
        'http://api.memory-lane.ru/db/deletePerson',
        {
          'id': currentId
        }
        ,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${sessionID}`
            // 'Origin': 'http://localhost:3000'
          }
        })
      .then(res => {
        // console.log(res);
        if (res.data.result) {
          this.props.downloadPersons();
        } else {
          console.error(res.data.error);
        }
      })
      .catch(error => console.error(error));
  }


  editOn() {
    this.setState({edit: true});
  }


  render() {
    const currentId = this.props.match.params.id;
    const userPersons =  this.props.persons;
    const currentPerson = userPersons.find( item =>  item.id === currentId);

    const {edit} = this.state;

    return (
      !edit ? 
        <div className='personItem'>
          <div className='head1 title'>{currentPerson.last_name} {currentPerson.first_name} {currentPerson.patronymic}</div>
          <div  className='personInfo'>
            <div className='head3 title'>Главное фото</div>
            <img className='personInfo__ico' src={currentPerson.ico_url} alt='persons icon'/>
            <div className='personInfo__text'>
              <div className='infoGroup'>
                <div className='infoGroup__name'>Пол: </div>
                <div className='textTransform'>{currentPerson.gender === 'male' ? 'мужчина' : 'женщина'  }</div>
              </div>
              <div className='infoGroup'>
                <div className='infoGroup__name'>Степень родства: </div>
                <div className='textTransform' >{currentPerson.role_in_family}</div>
              </div>
              <div className='infoGroup'>
                <div className='infoGroup__name'>Место рождения: </div>
                <div className='textTransform'>{currentPerson.city}</div>
              </div>
            </div>
            <ButtonContainer className='personItem__button' onClick={this.editOn}>Редактировать</ButtonContainer>
            <Link  to={'/persons/'}>
            <ButtonContainer className='personItem__button' onClick={this.deletePerson}>Удалить</ButtonContainer>
            </Link>
          </div>
          <div className='personFoto'>
            <div className='head3 title'>Фото с персоной</div>
            <div className='personFoto__container'>
              <EmtyPhoto/>
            </div>
          </div>
          <div className='personStory'> 
            <div className='head3 title'>Истории с персоной</div>
            <div className='personStory__container'>
              <EmtyStory/>
            </div> 

          </div>
        </div>
        :
        <EditPerson 
          currentId={currentId}
          currentPerson={currentPerson}         
        />
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    persons: state.persons.persons,
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
export default connect(mapStateToProps, mapDispatchToProps)(Person);
