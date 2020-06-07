import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ChooseAlbumItemAlbum.sass';

import ChoosePhoto from './ChooseAlbumPhotos';

export default class ChooseAlbumItemAlbum extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // ReactDOM.render(
      // this.render() {
      //   return (
      //     <ChoosePhoto />,
      //     document.getElementById("root")
      //   )
      // }
      // <ChoosePhoto />,
      // document.getElementById("root")
    // );
  }

  //   this.state = {
  //    
  //   };
  //   this._hanldeClick = this._handleClick.bind(this);
  // }

  // _handleClick() {
  //   this.setState({
  //     showComponent: true,
  //   });
  // }

  render() {
    const { id, title, author, date, content, picture } = this.props;


    return (
      <div className='albumItem'>
        <button className='albumItem__picture'
          onClick={this.handleClick}
        > 
          <img src={picture} alt='storyPicture'/>
        </button>

        <button className='albumItem__title'>
          {title}
        </button>
      </div>
    );
  }
}
