
import React from 'react';
import './ColorizationPhotos.sass';

const ColorizationPhotos = () => {
  return (
    <div className="colorizationPhotos">
      <h2 className="colorizationPhotos__titel">
        КОЛОРИЗАЦИЯ ФОТОГРАФИЙ
      </h2>

      <p className="colorizationPhotos__text">
        Можно  добавить цвет на  старые черно-белые фото
        </p>

      
        <ul className="colorizationPhotos__list">
          <li className="colorizationPhotos__item titel">
            1. Выбирете фотографию человека
          </li>
          <li className="colorizationPhotos__item">
          <img src={require('../images/jpg/img5.jpg')} />
          </li>
          <li className="colorizationPhotos__item">
          <img src={require('../images/jpg/img6.jpg')} />
          </li>
          <li className="colorizationPhotos__item titel">
            2. Добавьте цвет для фотографии
         </li>
        </ul>
      

    </div>

  );
}

export default ColorizationPhotos;