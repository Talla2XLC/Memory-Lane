import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ChooseAlbumItemAlbum.sass';

import ChoosePhoto from './ChoosePhoto';

export default class ChooseAlbumItemAlbum extends Component {

  // handleClick = () => {
  //   // ReactDOM.render(
  //     this.render() {
  //       return (
  //         <ChoosePhoto />,
  //         document.getElementById("root")
  //       )
  //     }
  //     // <ChoosePhoto />,
  //     // document.getElementById("root")
  //   // );
  // };

  //   this.state = {
  //     showComponent: false,
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
        <button className='albumItem__picture'>
          {/* onClick={this._handleClick}> 
          <img src={picture} alt='storyPicture'/> */}
           
           
        </button>

        <Link className='albumItem__title' to={`/albums/${id}`}>
          {title}
        </Link>
      </div>
    );
  }
}
