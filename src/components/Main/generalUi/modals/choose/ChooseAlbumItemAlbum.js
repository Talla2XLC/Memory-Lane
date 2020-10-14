import React, { Component } from "react";

import "./ChooseAlbumItemAlbum.sass";

export default class ChooseAlbumItemAlbum extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    const { title, picture } = this.props;

    return (
      <div className="albumItem">
        <button className="albumItem__picture" onClick={this.handleClick}>
          <img src={picture} alt="storyPicture" />
        </button>

        <button className="albumItem__title">{title}</button>
      </div>
    );
  }
}
