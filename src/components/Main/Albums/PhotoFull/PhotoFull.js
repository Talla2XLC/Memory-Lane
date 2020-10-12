import React, { Component } from 'react';
import './PhotoFull.sass';
import InteractionIcons from '../../generalUi/InteractionIcons/InteractionIcons';
import AvatarButton from '../../header/AvatarButton';
import PhotoFullRight from './PhotoFullRight';
import PhotoFullRightEdit from './PhotoFullRightEdit';
import {connect} from 'react-redux';
import { ReactComponent as GoBack } from '../../../../assets/Images/general/goBack.svg';

class PhotoFull extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.setShowFace = this.setShowFace.bind(this);

    this.state = {
      editing: false,
      showFace: false
    };
  }

  setEditing(status) {
    this.setState({editing: status});
  }

  setShowFace(status) {
    this.setState({showFace: status});
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { url, name, date, coordinates, desc, id  } = this.props.location.props;
    const { personsList, token } = this.props;
    const { showFace } = this.state;

    const tags = this.props.location.props.tags ? JSON.parse(this.props.location.props.tags) : false;
    const persons = this.props.location.props.persons ? JSON.parse(this.props.location.props.persons) : false;
    const coords = coordinates ? JSON.parse(coordinates) : false;

    const img = <img className={'img'} src={url} alt='gallery_pic'/>;

    const faceBorder = coords ? coords.map((params, index) => (
      <div key={index} className='face' style={{
        width: params.WH[0],
        height: params.WH[1],
        top: params.coord[1],
        left: params.coord[0]
      }}>
        {persons ?
          <>
            <span className='face-span'>{personsList.find(pers => pers.id === persons[index]).first_name }</span>
            <span className='face-span'>{personsList.find(pers => pers.id === persons[index]).last_name }</span>
            <span className='face-span'>{'Возраст: ' + params.age + ' лет' }</span>
          </> : ''
        }

      </div>
    )) : '';

    const imgDiv =
      <div className={'img-div photo-full-main-img'}>
        {img}
        {showFace ? faceBorder : ''}
        <InteractionIcons fileUrl={url}/>
      </div>;

    return (
      <div className={'photo-full'}>
        <div className='photo-full-main'>
          <GoBack className='go-back' onClick={this.goBack}/>
          <h1 className='photo-full-main-header'>{name}</h1>
          {imgDiv}
          <div className='photo-full-main-contentZone'>
            <h1 className='photo-full-main-header'>Описание</h1>
            <span className='photo-full-main-desc text3'>{desc}</span>
            <div className='photo-full-main-author'>
              <AvatarButton gender={this.props.currentUser.gender} />
              <div className='photo-full-main-author-span navFont'>
                {this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name}
              </div>
            </div>
            <div className='text3'>{date}</div>
          </div>
        </div>
        {this.state.editing ?
          <PhotoFullRightEdit
            tags={tags}
            date={date}
            persons={persons}
            setEditing={this.setEditing}
            allPersons={personsList}
            token={token}
            showFace={showFace}
            setShowFace={this.setShowFace}
            photoId={id}
          /> :
          <PhotoFullRight
            tags={tags}
            date={date}
            persons={persons}
            setEditing={this.setEditing}
            allPersons={personsList}
            showFace={showFace}
            setShowFace={this.setShowFace}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userInfo.currentUser,
    personsList: state.persons.persons,
    token: state.session.sessionID
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFull);
