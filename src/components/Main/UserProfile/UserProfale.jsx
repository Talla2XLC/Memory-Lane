import React from 'react';
import '../../../stylesGlobal/styles.sass';
import './UserProfale.sass';
import UserProfaleNav from './UserProfaleNav/UserProfaleNav'
import UserProfaleInfo from "./UserProfaleInfo/UserProfaleInfo";
import UserProfaleInfoReName from  './UserProfaleInfoReName/UserProfaleInfoReName'





const UserProfale= () => {
    return (

        <div className= 'UserProfale'>
            <div className='container'>
                <div className="UserProfale__inner">
                    <div className="UserProfale__inner-nav">

                        <UserProfaleNav />
                    </div>
                    <div className="UserProfale__inner-content">
                        <div className="UserProfale__inner-img">
                            <div className='UserProfale__inner-foto'> </div>
                            <div className='UserProfale__inner-rename'>
                                изменить
                            </div>
                        </div>
                        <div className="UserProfale__inner-info">

                            <UserProfaleInfo />
                            <UserProfaleInfoReName />

                        </div>

                    </div>
                </div>



            </div>

        </div>


    );
}

export default  UserProfale;
