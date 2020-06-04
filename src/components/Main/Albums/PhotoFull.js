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
    const { url, name, author, date, coordinates, desc } = this.props.location.props;
    const coords = JSON.parse(coordinates);

    const img = <img className={'img'} src={url} alt='gallery_pic'/>;

    const imgDiv =
      <div className={'img-div photo-full-img'}>
        {img}
        <InteractionIcons fileUrl={url}/>
      </div>;
    return (
      <div className={'photo-full'}>
        <GoBack className='go-back' onClick={this.goBack}/>
        <h1 className='photo-full-header'>{name}</h1>
        {imgDiv}
        <div className='photo-full-contentZone'>
          <h1 className='photo-full-header'>Описание</h1>
          <span className='photo-full-desc text3'>{desc}</span>
          <div className='photo-full-author'>
            <AvatarButton gender={this.props.currentUser.gender} />
            <div className='photo-full-author-span navFont'>{author}</div>
          </div>
          <div className='text3'>{date}</div>
        </div>
        <div className='face' />
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
