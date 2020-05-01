import React from "react";
import './UserProfaleInfo.sass';


const UserProfaleInfo = () => {
    return (
        <div className='UserProfaleInfo'>
            <h2 className='UserProfaleInfo__titel'>Иванов Иван Иванович</h2>
            <h2 className='UserProfaleInfo__id'>Username</h2>

            <ul className='UserProfaleInfo__list'>
                <li className="UserProfaleInfo__item">
                    <h3>Проект: </h3>
                    <span>Название текущего проекта</span>
                </li>
                <li className="UserProfaleInfo__item">
                    <h3> Дата рождения:</h3>
                     <span>дд.мм.гг</span>

                </li>
                <li className="UserProfaleInfo__item">
                    <h3>Город:</h3>
                    <span>Санкт-Петербург</span>

                </li>
                <li className="UserProfaleInfo__item">
                    <h3>Эл. почта:</h3>
                    <div>
                        <span>example@ex.com </span>
                        <div>

                            <label className="UserProfaleInfo__checkbox">
                                <input type="checkbox" />
                                <span className='UserProfaleInfo__checkbox-fake'></span>
                                <span className='UserProfaleInfo__checkbox-text'> показывать участникам </span>

                            </label>
                        </div>
                    </div>
                      

                </li>
                <li className="UserProfaleInfo__item">
                    <h3>Пол:</h3>
                    <span>мужской</span>

                </li>
                <li className="UserProfaleInfo__item">
                    <h3>Ваш тариф:</h3>
                    <div className= 'UserProfaleInfo__item-rate'>
                    <span>Стандарт</span>
                    <span className= 'UserProfaleInfo__item-change'>Сменить тариф</span>
                    </div>


                </li>

            </ul>

            <form >
                <button className='UserProfaleInfo__btn'><span>Редактировать</span></button>
            </form>


        </div>
    )
}


export default UserProfaleInfo;
