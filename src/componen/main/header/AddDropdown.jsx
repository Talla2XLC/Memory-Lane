import React, { Component } from "react";
import { ReactComponent as IconAddSection } from "../../../assets/Images/header/addIcon.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { modalOpen } from "../../../redux/actions/modalOpen";
import { ReactComponent as NewAlbumSVG } from "../../../assets/Images/header/newAlbum.svg";
import { ReactComponent as NewInterviewSVG } from "../../../assets/Images/header/newInterview.svg";
import { ReactComponent as NewPersonSVG } from "../../../assets/Images/header/newPerson.svg";
import { ReactComponent as NewPhotoSVG } from "../../../assets/Images/header/newPhoto.svg";
import { ReactComponent as NewStorySVG } from "../../../assets/Images/header/newStory.svg";

class AddDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    return (
      <>
        <IconAddSection onClick={this.showMenu} />
        {this.state.showMenu ? (
          <DropdownList>
            <Link to="/photo/add" className="dropdownLink">
              <NewPhotoSVG />
              <button className="dropdownButton-add">Загрузить фото</button>
            </Link>
            <span className="dropdownLink">
              <NewAlbumSVG />
              <button
                className="dropdownButton-add"
                onClick={this.props.openModalAddAlbum}
              >
                Создать альбом
              </button>
            </span>
            <Link to="/stories/add" className="dropdownLink">
              <NewStorySVG />
              <button className="dropdownButton-add">Добавить историю</button>
            </Link>
            <Link to="/4/4" className="dropdownLink">
              <NewInterviewSVG />
              <button className="dropdownButton-add">Добавить интервью</button>
            </Link>
            <Link to="/persons/add" className="dropdownLink">
              <NewPersonSVG />
              <button className="dropdownButton-add">Добавить персону</button>
            </Link>
          </DropdownList>
        ) : null}
      </>
    );
  }
}

const DropdownList = styled.div`
  position: absolute;
  top: 39px;
  display: flex;
  z-index: 10;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: #ffffff;
  overflow: hidden;
  padding: 10px 0;
  .dropdownLink {
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 6px 30px 6px 14px;
    width: 100%;
    background: none;
    border: none;
    color: #3b3e3c;
    text-decoration: none;
    &:hover {
      background: #bde1ca;
    }
    &:active {
      background: ##2795fb;
      color: white;
      > svg > path {
        fill: white;
      }
      > button {
        color: white;
      }
    }
    > svg {
      margin-right: 16px;
    }
  }
  .dropdownButton-add {
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    width: 100%;
    text-align: left;
    white-space: nowrap;
    &:focus {
      outline: none;
    }
  }
`;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModalAddAlbum: () => {
      dispatch(modalOpen("addAlbum"));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDropdown);
