import React from 'react';
import '../../stylesGlobal/styles.sass';
import './UserProfale.sass';

import { ReactComponent as UserAvatar } from '../Landing/svg/user_avatar.svg';


const UserProfale = () => {
    return (

        <div className= 'userProfale'>
            <div className='container'>

                <div className='userProfale__inner'>
                    <div className='userProfale__inner-item'>
                        <div className='userProfale__inner-img'>
                            <UserAvatar />
                        </div>
                        <div className='userProfale__inner-id'>
                            <span>Uzver111</span>
                        </div>
                        <div className='userProfale__inner-name'>
                            <span>Пупкин Василий Альбертович</span>
                        </div>
                        <div className='userProfale__inner-email'>
                            <span>pupkinuzver@sobaka.ru</span>
                        </div>
                        <a className= 'userProfale__inner-checkin' href="#">Редактировать</a>
                    </div>
                    <div className='userProfale__inner-item'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit massa, pulvinar quis gravida risus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit massa, pulvinar quis gravida risus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit massa, pulvinar quis gravida risus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit massa, pulvinar quis gravida risus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit massa, pulvinar quis gravida risus.
                        </p>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default  UserProfale;
