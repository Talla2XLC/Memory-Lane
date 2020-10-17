import React from "react";
import { Link } from "react-router-dom";

import "./UserProfileNav.sass";

const UserProfaleNav = () => {
  return (
    <div className="UserProfaleNav">
      <ul>
        <li>
          <Link to="/" className="active">
            Учетная запись
          </Link>
        </li>
        <li>
          <Link to="/">Проекты</Link>
        </li>
        <li>
          <Link to="/">Конфиденциальность</Link>
        </li>
        <li>
          <Link to="/">Уведомления</Link>
        </li>
        <li>
          <Link to="/">Мой тариф</Link>
        </li>
        <li>
          <Link to="/">Участники</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserProfaleNav;
