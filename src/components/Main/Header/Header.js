import React, { Component } from "react";
import SearchAdd from "../search/SearchBar";
import Notice from "./Notice";
import AddSection from "./Add_section";
import AvatarButton from "./AvatarButton";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

class Header extends Component {
  fetchUserName(user) {
    if (user.first_name || user.last_name) {
      return (
        (user.first_name ? user.first_name : "") +
        " " +
        (user.last_name ? user.last_name : "")
      );
    }
    return user.email;
  }

  render() {
    const { currentUser } = this.props;

    return (
      <HeaderWrapper className="headerDiv">
        <Link className="logoLink" to="/home">
          <div className="logo logoFont">Memory Lane</div>
          <div className="logoDot" />
        </Link>
        <div className="header__center">
          {/* <Search/> */}
          <SearchAdd />
          {/* <SearchQueryAdd/> */}
          <AddSection />
        </div>
        <div className="header__right">
          <Notice />
          <div className="userName">{this.fetchUserName(currentUser)}</div>
          <AvatarButton gender={currentUser.gender} />
        </div>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userInfo.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const HeaderWrapper = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 11px 0;
  box-sizing: border-box;
  background: #ffd1a9;
  padding-right: 40px;
  position: sticky;
  top: 0;

  .logoLink {
    margin-left: 45px;
  }
  .logo {
    float: left;
    margin-right: 9px;
  }
  .logoDot {
    width: 7px;
    height: 7px;
    background: #5db07b;
    border-radius: 10px;
    float: left;
    margin-top: 24px;
  }

  .header__center {
    display: flex;
    justify-content: flex-start;
    margin-left: 85px;
  }

  .header__right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
  }
  .userAvatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffd1a9;
  }

  .userName {
    margin: 0 15px 0 15px;
  }

  .header__bottom {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    height: 70px;
  }

  .header__top div,
  header__bottom div {
    align-self: center;
    justify-content: space-evenly;
  }

  .header__top div:nth-child(2) {
    margin-left: auto;
  }

  .header__bottom div:nth-child(2) {
    padding: 0 4px;
    position: fixed;
  }
`;
