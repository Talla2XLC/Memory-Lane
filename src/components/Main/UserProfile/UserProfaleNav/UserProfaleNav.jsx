import React from 'react';
import './UserProfaleNav.sass';

const UserProfaleNav = () => {
  return (
    <div className='UserProfaleNav'>
      <ul>
        <li><a href='/#' className='active'>Учетная запись</a></li>
        <li><a href='/#'>Проекты</a></li>
        <li><a href='/#'>Конфидетциальность</a></li>
        <li><a href='/#'>Уведомления</a></li>
        <li><a href='/#'>Мой тариф</a></li>
        <li><a href='/#'>Участники</a></li>
      </ul>
    </div>
  );
};

export default UserProfaleNav;
