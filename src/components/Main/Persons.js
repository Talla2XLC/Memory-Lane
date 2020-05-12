import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Persons.sass';
import shortid from 'shortid';

class Persons extends Component {
  render() {
    const usersItem = this.props.users.map(user =>
      (
        <div className='person-div flex-row' key={ shortid.generate() }>
          Имя: {user.first_name};&nbsp;
          {user.last_name ? 'Фамилия: ' + user.last_name + '; ' : ' '}
          Почта: {user.email}<br/>
        </div>
      )
    )

    return (
      <div className='Persons'>
        {usersItem}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.userInfo.loading,
    users: state.userInfo.users,
    error: state.userInfo.error
  };
};

export default connect(mapStateToProps)(Persons);
