import React, {Component} from 'react';
import './UserProfileInfoReName.sass';

class UserProfileInfoReName extends Component {
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
    return (
      <div className='UserProfileInfoReName'>
        <form className='UserProfileInfoReName__form'>
          <div className='UserProfileInfoReName__form-item'>
            <label htmlFor='UserProfileInfoReName__form-name'>Имя: </label>
            <input id='UserProfileInfoReName__form-name' type='text' placeholder='Иванов Иван Иванович'/>
          </div>
          <div className='UserProfileInfoReName__form-item'>
            <label htmlFor='UserProfileInfoReName__form-Username'> Username: </label>
            <input id='UserProfileInfoReName__form-Username' type='text' placeholder='Username'/>
          </div>
          <div className=' UserProfileInfoReName__form-item UserProfileInfoReName__form-date'>
            <label>Дата рождения: </label>
            <div className='UserProfileInfoReName__form-groups'>

              <div>
                <label>
                  <input type='text' placeholder='дд'/>
                  <span/>
                </label>

              </div>
              <div>
                <label>
                  <input type='text' placeholder='мм'/>
                  <span/>
                </label>

              </div>
              <div>
                <input type='text' placeholder='гг'/>
              </div>

            </div>

          </div>
          <div className='UserProfileInfoReName__form-item'>
            <label htmlFor='UserProfileInfoReName__form-city'> Город:</label>
            <input id='UserProfileInfoReName__form-city' type='text' placeholder='Санкт-Петербург'/>
          </div>
          <div className='UserProfileInfoReName__form-item'>
            <label htmlFor='UserProfileInfoReName__form-email'> Эл. почта: </label>
            <input id='UserProfileInfoReName__form-email' type='email' placeholder='example@ex.com'/>
          </div>
          <div className='UserProfileInfoReName__form-item'>
            <div> Пол:</div>
            <div className='UserProfileInfoReName__form-gender'>
              <label className='UserProfileInfoReName__checkbox'>
                <input type='checkbox'/>
                <span className='UserProfileInfoReName__checkbox-fake'/>
                <span className='UserProfileInfoReName__checkbox-text'> мужской </span>

              </label>
              <label className='UserProfileInfoReName__checkbox'>
                <input type='checkbox'/>
                <span className='UserProfileInfoReName__checkbox-fake'/>
                <span className='UserProfileInfoReName__checkbox-text'> женский </span>

              </label>
            </div>
          </div>
          <button className='UserProfileInfoReName__form-btn'>
            <span>Сохранить</span>
          </button>
        </form>

      </div>
    );
  }
};

export default UserProfileInfoReName;
