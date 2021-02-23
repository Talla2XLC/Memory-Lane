import React, { Component } from "react";
// import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from "react-router-dom";

import "./Stories.sass";

import { ButtonContainer } from "../generalUi/Button";

import StoriesDropDown from "./StoriesDropdown";
import { ReactComponent as Plus } from "../../../assets/Images/general/plus.svg";
import { ReactComponent as StoryBackwards } from "../../../assets/Images/general/back_arrow.svg";

import axios from "axios";

export default class StoryNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storyName: "",
      author: "",
      date: "",
      tags: "",
      city: "",
      content: "",
      dropdownOpened: false,
      // hasCreated: false,
      // images: [],
      // imagesToUpload: []
    };

    this.storyNew = this.storyNew.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleShowDropdown = this.handleShowDropdown.bind(this);
  }

  storyNew() {
    const { storyName, author, date, tags, city, content } = this.state;
    const token = localStorage.getItem("token");
    // this.props.history.push("/stories/add");
    axios
      .post(
        "http://api.memory-lane.ml/db/setHistory",
        {
          story_name: storyName,
          author: author,
          date: date,
          tags: tags,
          city: city,
          content: content,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((res) => {
        if (res.data.result) {
          // res.status === 200
          // console.log(res);
          this.setState({ hasCreated: true });
        } else {
          // res.status !== 200
          console.error(res.data.error);
          alert(`${res.data.error}`);
        }
      })
      .catch((error) => console.error(error));
  }

  handleInput(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleTextArea(e) {
    const { name, value, style, scrollHeight } = e.target;

    style.height = "auto";
    style.height = scrollHeight + 1 + "px";

    this.setState({ [name]: value });
  }

  // uploadFileHandler(event) {
  //   event.persist();
  //   this.setState({
  //     imagesToUpload: event.target.files
  //   });
  // };

  handleShowDropdown(e) {
    e.preventDefault();

    this.setState({ dropdownOpened: !this.state.dropdownOpened });
  }

  render() {
    const {
      storyName,
      author,
      date,
      tags,
      city,
      content,
      // hasCreated,
      dropdownOpened,
    } = this.state;

    const { loading, history } = this.props;

    return loading ? (
      <h1>Загрузка данных</h1>
    ) : (
      // (<PerfectScrollbar>
      <>
        <button className="storyBackwards" onClick={history.goBack}>
          <StoryBackwards />
        </button>
        <div className="storyNew">
          <form className="storyNew__desk">
            <input
              className="head2 storyNew__name"
              type="text"
              name="storyName"
              value={storyName}
              placeholder="Название истории"
              onChange={this.handleInput}
            />

            {/* TODO: Dynamic tags appearance (react-tag-input) */}
            <input
              className="head2 storyNew__tags"
              type="text"
              name="tags"
              value={tags}
              placeholder="Теги"
              onChange={this.handleInput}
            />

            {/* TODO: date from calendar here */}
            <input
              className="text3 storyNew__input"
              type="text"
              name="date"
              value={date}
              placeholder="Дата"
              onChange={this.handleInput}
            />

            {/* TODO: selecting persons here */}
            <input
              className="text3 storyNew__input"
              type="text"
              name="author"
              value={author}
              placeholder="О ком"
              onChange={this.handleInput}
            />

            <input
              className="text3 storyNew__input"
              type="text"
              name="city"
              value={city}
              placeholder="Город"
              onChange={this.handleInput}
            />

            <div className="storyNew__photoStore">
              <img alt="story" />
            </div>

            <div className="storyNew__wrapper">
              <button onClick={this.handleShowDropdown}>
                <Plus />
              </button>
              {dropdownOpened ? (
                <StoriesDropDown
                  // currentAlbum={albumName ?? 'Новый альбом'}
                  // albums={albums}
                  handleSelect={this.handleDropdownSelect}
                />
              ) : null}
              <textarea
                className="text1 storyNew__content"
                name="content"
                value={content}
                placeholder="История"
                onChange={this.handleTextArea}
              />
            </div>
          </form>
          <Link
            style={{
              display:
                storyName || author || date || tags || city || content
                  ? "flex"
                  : "none",
            }}
            to={"/stories/"}
          >
            <ButtonContainer onClick={this.storyNew}>
              Опубликовать
            </ButtonContainer>
          </Link>
        </div>
      </>
    );
    // </PerfectScrollbar>)
  }
}
