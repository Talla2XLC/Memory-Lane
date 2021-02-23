import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./UserRegistrationCompletingStyle.css";

import axios from "axios";

export default class UserRegistrationCompleting extends Component {
  emailVerified = () => {
    const { location } = this.props;

    const query = new URLSearchParams(location.search);

    const email = query.get("email");
    const token = query.get("token");
    const key = query.get("memory");

    axios
      .post(
        "http://api.memory-lane.ml/check/auth-email",
        {
          email: email,
          token: token,
          key: key,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (!res.data.result) {
          // res.status !== 200
          console.error(res.data.error);
          alert(`${res.data.error}`);
        }
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div className="">
        <h1 className="">Вы почти зарегистрировались, подтвердите email</h1>
        <Link
          className="registrationCompleting__link"
          to="/auth"
          onClick={this.emailVerified}
        >
          Продолжить
        </Link>
      </div>
    );
  }
}
