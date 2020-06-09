import React, { Component } from 'react';
import './PhotoFull.sass';
import InteractionIcons from 'components/Main/General/InteractionIcons';
import AvatarButton from 'components/Main/Header/AvatarButton';
import PhotoFullRight from './PhotoFullRight';
import PhotoFullRightEdit from './PhotoFullRightEdit';
import {connect} from 'react-redux';
import { ReactComponent as GoBack } from 'components/Main/svg/goBack.svg';

class PhotoFull extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.setEditing = this.setEditing.bind(this);

    this.state = {
      editing: false
    };
  }

  setEditing(status) {
    this.setState({editing: status});
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { url, name, author, date, coordinates, desc, persons } = this.props.location.props;
    const tags = this.props.location.props.tags ? JSON.parse(this.props.location.props.tags) : false;
    const coords = coordinates ? JSON.parse(coordinates) : false;

    const img = <img className={'img'} src={url} alt='gallery_pic'/>;

    const imgDiv =
      <div className={'img-div photo-full-main-img'}>
        {img}
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
          <div className='face' />
        </div>
        {this.state.editing ?
          <PhotoFullRightEdit
            tags={tags}
            date={date}
            persons={persons}
            setEditing={this.setEditing}
          /> :
          <PhotoFullRight
            tags={tags}
            date={date}
            persons={persons}
            setEditing={this.setEditing}
          />
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userInfo.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFull);