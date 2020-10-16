import React, { Component } from "react";
import FullName from "../components/main/forms/UserFullName";

export default class UserFullName extends Component {
  static path = "/fullname";
  render() {
    return <FullName />;
  }
}
