import React, { Component } from "react";
// import './DropdownAction.sass';
import { ReactComponent as Dots } from "../../../../assets/Images/dropdownAction/dots.svg";
import { ReactComponent as Share } from "../../../../assets/Images/dropdownAction/shareIcon.svg";
import { ReactComponent as Copy } from "../../../../assets/Images/dropdownAction/copyIcon.svg";
import { ReactComponent as Delete } from "../../../../assets/Images/dropdownAction/deleteIcon.svg";
import { ReactComponent as Download } from "../../../../assets/Images/dropdownAction/downloadIcon.svg";
import { ReactComponent as Rename } from "../../../../assets/Images/dropdownAction/reNameIcon.svg";
import { ReactComponent as Move } from "../../../../assets/Images/dropdownAction/move.svg";
import { ReactComponent as Arrow } from "../../../../assets/Images/sorting/arrow.svg";

class DropdownAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActions: false,
      actionsData: [],
    };
    this.showActions = this.showActions.bind(this);
    this.closeActions = this.closeActions.bind(this);
  }

  componentDidMount() {
    switch (this.props.currentPage) {
      case "allAlbums":
        this.setState({
          actionsData: [
            { name: "Поделиться", id: 1 },
            { name: "Переименовать", id: 3 },
            // { name: 'Копировать', id: 5},
            { name: "Удалить", id: 6 },
          ],
        });
        break;
      case "album":
        this.setState({
          actionsData: [
            { name: "Поделиться", id: 1 },
            { name: "Скачать", id: 2 },
            { name: "Переименовать", id: 3 },
            { name: "Переместить", id: 4 },
            { name: "Копировать", id: 5 },
            { name: "Удалить", id: 6 },
          ],
        });
        break;
      default:
        break;
    }
  }

  showActions(event) {
    event.preventDefault();
    this.setState({ showActions: true }, () => {
      document.addEventListener("click", this.closeActions);
    });
  }
  closeActions() {
    this.setState({ showActions: false }, () => {
      document.removeEventListener("click", this.closeActions);
    });
  }

  handlePhotoAction(id) {
    this.props.performAction(id);
  }

  handleAlbumAction(actionId, albumId) {
    this.props.performAction(actionId, albumId);
  }

  render() {
    const { actionsData } = this.state;
    const { currentPage, albumId } = this.props;

    const fetchDropdownSvg = (actionId) => {
      switch (actionId) {
        case 1:
          return <Share />;
        case 2:
          return <Download />;
        case 3:
          return <Rename />;
        case 4:
          return <Move />;
        case 5:
          return <Copy />;
        case 6:
          return <Delete />;
        default:
          return "";
      }
    };

    return (
      <div className="dropdown-div">
        {currentPage === "allAlbums" ? (
          <Dots className={"dots-list"} onClick={this.showActions} />
        ) : (
          <div className="sortingItem" onClick={this.showActions}>
            <span>Действие</span>
            <Arrow className="arrow" />
          </div>
        )}

        {this.state.showActions ? (
          <div className={"dropdown-list"}>
            {actionsData.map((action) => {
              return (
                <button
                  className="dropdownButton"
                  key={action.id}
                  onClick={
                    currentPage === "allAlbums"
                      ? () => this.handleAlbumAction(action.id, albumId)
                      : () => this.handlePhotoAction(action.id)
                  }
                >
                  {fetchDropdownSvg(action.id)}
                  <span className="dropdownButton-span">{action.name}</span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}
export default DropdownAction;
