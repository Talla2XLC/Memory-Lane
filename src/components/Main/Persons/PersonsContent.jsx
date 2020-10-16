import React, { Component } from "react";
import { connect } from "react-redux";
import "./PersonItem.sass";
import { ReactComponent as EmtyPhoto } from "../../../assets/Images/persons/emptyPhotoBlock.svg";
import { ReactComponent as EmtyStory } from "../../../assets/Images/persons/emptyStoryBlock.svg";

class PersonsContent extends Component {
  render() {
    return (
      <div>
        <div className="personFoto">
          <div className="head3 title">Фото с персоной</div>
          {this.props.images != null ? (
            <div className="personFotoContainer">
              {this.props.images.map((item) => (
                <div>
                  <img
                    className="personFoto__img"
                    src={item.content_url}
                    alt="persons item"
                  />
                </div>
              ))}
            </div>
          ) : (
            <EmtyPhoto />
          )}
        </div>
        <div className="personStory">
          <div className="head3 title">Истории с персоной</div>
          <EmtyStory className="personEmtyBlock" />
          <div className="personStory__container" />
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
export default connect(mapStateToProps)(PersonsContent);
