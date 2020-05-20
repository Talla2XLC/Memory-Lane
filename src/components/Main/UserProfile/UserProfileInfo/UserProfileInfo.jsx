import React, {Component} from 'react';
import './UserProfileInfo.sass';

class UserProfileInfo extends Component {
  fetchGender(gender) {
    switch (gender) {
      case 'male':
        return 'Мужской';
      case 'female':
        return 'Женский';
      default:
        return 'Не указан';
    }
  }

  handleSetEditing(status) {
    this.props.setEditing(status);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className='UserProfileInfo'>
        <h2 className='UserProfileInfo__titel'>{currentUser.first_name} {currentUser.last_name}</h2>

        <ul className='UserProfileInfo__list'>
          <li className='UserProfileInfo__item'>
            <h3> Дата рождения:</h3>
            <span>{currentUser.birthday ? new Date(currentUser.birthday).toLocaleDateString('ru-RU') : ''}</span>
          </li>
          <li className='UserProfileInfo__item'>
            <h3>Город:</h3>
            <span>{currentUser.city}</span>
          </li>
          <li className='UserProfileInfo__item'>
            <h3>Эл. почта:</h3>
            <div>
              <span>{currentUser.email}</span>
              <div>
                <label className='UserProfileInfo__checkbox'>
                  <input type='checkbox'/>
                  <span className='UserProfileInfo__checkbox-fake'/>
                  <span className='UserProfileInfo__checkbox-text'> показывать участникам </span>
                </label>
              </div>
            </div>
          </li>
          <li className='UserProfileInfo__item'>
            <h3>Пол:</h3>
            <span>{this.fetchGender(currentUser.gender)}</span>
          </li>
          <li className='UserProfileInfo__item'>
            <h3>Ваш тариф:</h3>
            <div className='UserProfileInfo__item-rate'>
              <span>{/*Стандарт*/}</span>
              <span className='UserProfileInfo__item-change'>Сменить тариф</span>
            </div>
          </li>
        </ul>

        <button className='UserProfileInfo__btn' onClick={() => this.handleSetEditing(true) }>
          <span>Редактировать</span>
        </button>

      </div>
    );
  }
}


export default UserProfileInfo;
