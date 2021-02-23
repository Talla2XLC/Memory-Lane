import React, { Component } from "react";
import { connect } from "react-redux";
import { modalClose } from "../../../../redux/actions/modalClose";
import { getAlbums } from "../../../../redux/actions/actionAlbums";
import axios from "axios";
import { ButtonContainer } from "../Button";
import "./addAlbum.sass";

class ModalAddAlbumContent extends Component {
  state = {
    albumName: "",
  };

  addAlbum = () => {
    const { albumName } = this.state;
    const { downloadAlbums, sessionID, closeModal } = this.props;

    axios
      .post(
        "http://api.memory-lane.ml/db/setAlbum",
        {
          album_name: albumName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${sessionID}`,
          },
        }
      )
      .then((res) => {
        if (res.data.result) {
          downloadAlbums();
          closeModal("addAlbum");
        } else {
          console.error(res.data.error);
        }
      })
      .catch((error) => console.error(error));
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleCreateClick = () => {
    this.addAlbum();
  };

  render() {
    const { closeModal } = this.props;
    const { albumName } = this.state;

    return (
      <div className={"modal-add-album-content"}>
        <h1>Создание Альбома</h1>
        <div className="modal-content-middle">
          <p>Введите название</p>
          <input
            name="albumName"
            className="add-album-input"
            placeholder="Название альбома"
            type="text"
            onChange={this.handleInput}
            value={albumName}
          />
        </div>
        <div className="modal-content-bottom">
          <button
            className={"cancel-btn"}
            onClick={(e) => {
              closeModal("addAlbum");
            }}
          >
            Отмена
          </button>
          <ButtonContainer onClick={this.handleCreateClick}>
            Создать
          </ButtonContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessionID: state.session.sessionID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (type) => {
      dispatch(modalClose(type));
    },
    downloadAlbums: () => {
      dispatch(getAlbums());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddAlbumContent);
