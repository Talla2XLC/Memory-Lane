import React from 'react';
import '../../stylesGlobal/styles.sass';
import './Persons.sass';


export default function Persons() {
  return (

        <div className = 'homeProfale'>

            <div className= 'container'>

                <div className='homeProfale__inner'>
                    <div className='homeProfale__inner-item'>
                        <h3 className='homeProfale__inner-titel'>
                            Здравствуйте!
                        </h3>
                        <p className='homeProfale__inner-text'>
                            Давайте вместе создадим
                            вашу историю, чтобы остаться
                            в памяти у потомков!
                        </p>

                    </div>

                    <div className='homeProfale__inner-item'>
                        <h3 className='homeProfale__inner-titel'>
                            Инфографика лимита
                            фотографий
                        </h3>
                        <div className='homeProfale__inner-eliipse'>
                            <span>50</span> из <span>200 </span> <br/>
                            фотографий
                        </div>

                    </div>

                </div>

                <div className='homeProfale__wrap'>
                    <div className='homeProfale__wrap-item'>
                        <span>Не знаете с чего начать?</span>
                        <p className='homeProfale__wrap-text'>
                            Наши ежедневные задания помогут вам наполнить свою историю воспоминаниями
                        </p>
                        <button className='homeProfale__wrap-button'> Перейти </button>
                    </div>

                    <div className='homeProfale__wrap-item'>
                        <p className="homeProfale__wrap-text">
                            Пригласите своего близкого человека, чтобы он стал частью вашей истории
                        </p>
                        <button className='homeProfale__wrap-button'> Пригласить </button>
                    </div>
                </div>

                <div className='homeProfale__main'></div>


            </div>
        </div>


  )
}