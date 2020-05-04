import React from "react";
import './UserProfaleInfoReName.sass';



const UserProfaleInfoReName = () => {
    return (
        <div className='UserProfaleInfoReName'>
            <form className='UserProfaleInfoReName__form' >
                <div className='UserProfaleInfoReName__form-item'>
                    <label htmlFor='UserProfaleInfoReName__form-name'  >Имя: </label>
                    <input id='UserProfaleInfoReName__form-name' type="text" placeholder='Иванов Иван Иванович'/>
                </div>
                <div className='UserProfaleInfoReName__form-item'>
                    <label htmlFor='UserProfaleInfoReName__form-Username' > Username: </label>
                    <input id= 'UserProfaleInfoReName__form-Username' type="text" placeholder='Username'/>
                </div>
                <div className=' UserProfaleInfoReName__form-item UserProfaleInfoReName__form-date'>
                    <label >Дата рождения: </label>
                    <div className='UserProfaleInfoReName__form-groups' >

                        <div>
                            <label >
                                <input type="text" placeholder='дд'/>
                                <span></span>
                            </label>

                        </div>
                        <div>
                            <label >
                                <input type="text" placeholder='мм'/>
                                <span></span>
                            </label>

                        </div>
                        <div>
                            <input type="text" placeholder='гг'/>
                        </div>


                    </div>

                </div>
                <div className='UserProfaleInfoReName__form-item'>
                    <label  htmlFor='UserProfaleInfoReName__form-city' > Город:</label>
                    <input id = 'UserProfaleInfoReName__form-city' type="text" placeholder='Санкт-Петербург'/>
                </div>
                <div className='UserProfaleInfoReName__form-item'>
                    <label htmlFor='UserProfaleInfoReName__form-email' > Эл. почта: </label>
                    <input id = 'UserProfaleInfoReName__form-email' type="email" placeholder='example@ex.com'/>
                </div>
                <div className='UserProfaleInfoReName__form-item'>
                    <div > Пол:</div>
                    <div className='UserProfaleInfoReName__form-gender'>
                        <label className="UserProfaleInfoReName__checkbox">
                            <input type="checkbox" />
                            <span className='UserProfaleInfoReName__checkbox-fake'></span>
                            <span className='UserProfaleInfoReName__checkbox-text'> мужской </span>

                        </label>
                        <label className="UserProfaleInfoReName__checkbox">
                            <input type="checkbox" />
                            <span className='UserProfaleInfoReName__checkbox-fake'></span>
                            <span className='UserProfaleInfoReName__checkbox-text'> женский </span>

                        </label>
                    </div>
                </div>
                <button className= 'UserProfaleInfoReName__form-btn'>
                   <span>Сохранить</span>
                </button>

            </form>


        </div>
    );
};


export default UserProfaleInfoReName;
