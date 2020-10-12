import React, { Component } from "react";
import { ButtonContainer } from "../generalUi/Button.jsx";
import { Redirect, Link } from "react-router-dom";
import "./PageNotFound.sass";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div className="container-not-found">
          <Link to="/home" className="not-found__btn">
            <ButtonContainer>Вернуться на главную</ButtonContainer>
          </Link>
        </div>
      </div>
    );
  }
}
