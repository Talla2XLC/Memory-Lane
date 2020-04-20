
import React from 'react';
import '../../globalSass.sass';
import './ColorizationPhotos.sass';

const ColorizationPhotos = () => {
  return (
    <div className = 'colorizationPhotos' >
      <h2 className = 'colorizationPhotos__titel'>
        КОЛОРИЗАЦИЯ ФОТОГРАФИЙ
      </h2>

        <ul className= 'colorizationPhotos__list'>

          <li className="colorizationPhotos__item">
          <img src={require('../images/jpg/img8.jpg')} alt = 'colorized1' />
          <h3>до</h3>
          </li>

          <li className="colorizationPhotos__item">
          <img src={require('../images/jpg/img9.jpg')} alt = 'colorized2' />
          <h3>после</h3>
          </li>
         
        </ul>

        <p className = 'colorizationPhotos__text'>
          Оживите ваши старые черно-белые фото, сделав их цветными
        </p>
      

    </div>

  );
}

export default ColorizationPhotos;
