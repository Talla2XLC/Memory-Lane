import React, { Component } from "react";
import { ReactComponent as IconBell } from "../../../assets/Images/header/bellIcon.svg";
import styled from "styled-components";

export default class Notice extends Component {
  state = {
    interviewNotice: "",
    photoNotice: "",
    systemNotice: "",
  };

  render() {
    return (
      <BellWrapper>
        <button className="button__notice">
          <IconBell />
        </button>
      </BellWrapper>
    );
  }
}

const BellWrapper = styled.div`
  .button__notice {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    background: 50% no-repeat;
    padding: 0;
  }

  .button__notice:hover {
    opacity: 1;
  }
`;
