import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Persons.sass';
class PersonsContent extends Component {
  getAlbums = () => {
    const { sessionID } = this.props;
    console.log(sessionID);
    axios
      .post(
        'http://api.memory-lane.ru/db/getHistory',
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `${sessionID}`
          }
        })
      .then(res => {
        console.log(res);
      })
      .catch(error => console.error(error));
  }
  render() {
    return (
      <div>
        <div className='personFoto'>
          <div className='head3 title'>Фото с персоной</div>
          <div className='personFoto__container'>
            привет, я контент
            <button onClick={this.getAlbums} />
          </div>
        </div>
        <div className='personStory'> 
          <div className='head3 title'>Истории с персоной</div>
          <div className='personStory__container' /> 

        </div>
      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    sessionID: state.session.sessionID

  };
};

export default connect(mapStateToProps)(PersonsContent);
