import React from 'react';
import { Link } from 'react-router-dom';

import './UserProfileNav.sass';

const UserProfaleNav = () => {
  return (
    <div className='UserProfaleNav'>
      <ul>
        <Link to='/' className='active'>Учетная запись</Link>
        <Link to='/'>Проекты</Link>
        <Link to='/'>Конфиденциальность</Link>
        <Link to='/'>Уведомления</Link>
        <Link to='/'>Мой тариф</Link>
        <Link to='/'>Участники</Link>
      </ul>
    </div>
  );
};

export default UserProfaleNav;
