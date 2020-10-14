import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

import { ReactComponent as StoryBackwards } from "../../Main/svg/back_arrow.svg";

import "./Stories.sass";

export default class StoryView extends Component {
  render() {
    const {
      content,
      date,
      title,
      author,
      city,
      tags,
      picture,
    } = this.props.location.state;

    return (
      <PerfectScrollbar>
        <button className="storyBackwards" onClick={this.props.history.goBack}>
          <StoryBackwards />
        </button>
        <div className="storyView">
          <div className="head2 storyView__title">{title.title}</div>
          <div className="storyView__tags">
            Здесь должны быть теги
            <br />
            {tags.tags}
          </div>
          <div className="text3 storyView__date">{date.date}</div>
          <div className="text3 storyView__author">{author.author}</div>
          <div className="text3 storyView__city">{city.city}</div>
          <div className="text1 storyView__content">{content.content}</div>
          <div className="storyView__picture">
            <img src={picture.picture} alt="storyPicture" />
          </div>
        </div>
      </PerfectScrollbar>
    );
  }
}
