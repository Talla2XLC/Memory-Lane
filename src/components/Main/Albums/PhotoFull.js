import React, { Component } from 'react';
import './PhotoFull.sass';
import InteractionIcons from 'components/Main/General/InteractionIcons';
import AvatarButton from '../Header/AvatarButton';
import {connect} from 'react-redux';
import { ReactComponent as GoBack } from 'components/Main/svg/goBack.svg';


class PhotoFull extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { url, name, author, date, coordinates, desc, tags, persons } = this.props.location.props;
    const coords = JSON.parse(coordinates);

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
              <div className='photo-full-main-author-span navFont'>{author}</div>
            </div>
            <div className='text3'>{date}</div>
          </div>
          <div className='face' />
        </div>
        <div className='photo-full-right'>
          <div className='photo-full-right-item photo-full-right-tags'>
            <span className='photo-full-right-span text3'>Тэги:</span>
          </div>
          <div className='photo-full-right-item photo-full-right-date'>
            <span className='photo-full-right-span text3'>Примерная дата:</span>
            {date}
          </div>
          <div className='photo-full-right-item photo-full-right-persons'>
            <span className='photo-full-right-span text3'>Персоны на фото:</span>
          </div>
          <div className='photo-full-right-item photo-full-right-place'>
            <span className='photo-full-right-span text3'>Место:</span>
          </div>
          <div className='photo-full-right-item photo-full-right-showFace'>
            <span className='photo-full-right-span text3'>Показать персоны на фото</span>
          </div>
          <div className='photo-full-right-BTN'></div>
        </div>
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
