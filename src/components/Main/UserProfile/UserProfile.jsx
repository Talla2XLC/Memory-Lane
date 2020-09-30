import React, {Component} from 'react';
import './UserProfile.sass';
import UserProfileNav from './userProfileNav/UserProfileNav';
import UserProfileInfo from './userProfileInfo/UserProfileInfo';
import UserProfileInfoReName from './userProfileInfoReName/UserProfileInfoReName';
import { connect } from 'react-redux';


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.setEditing = this.setEditing.bind(this);
    this.state = {
      editing: false
    };
  }

  setEditing(status) {
    this.setState({editing: status});
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className='UserProfile'>
        <div className='UserProfile__inner'>
          <div className='UserProfile__inner-nav'>

            <UserProfileNav/>
          </div>
          <div className='UserProfile__inner-content'>
            <div className='UserProfile__inner-img'>
              <div className='UserProfile__inner-foto'/>
              <div className='UserProfile__inner-rename'>
                изменить
              </div>
            </div>
            { !this.state.editing ?
              <UserProfileInfo currentUser={ currentUser } setEditing={ this.setEditing }/> :
              <UserProfileInfoReName currentUser={ currentUser } setEditing={ this.setEditing }/> }
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.userInfo.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
