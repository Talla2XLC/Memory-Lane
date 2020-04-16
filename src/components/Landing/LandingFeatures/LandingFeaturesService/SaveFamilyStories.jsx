import React from 'react';
import './SaveFamilyStories.sass';


const SaveFamilyStories = () => {
  return (

    <div className="saveFamilyStories">

      <h2 className="saveFamilyStories__titel">
        <span>  </span>  сохраните истории своей семьи 
      </h2>
      <p className="saveFamilyStories__text">
        Проект позволяет записывать
        и хранить семейные истории, добавлять
        к ним фотографии, делиться ими с друзьями
        и родственниками
       </p>

      <div className="saveFamilyStories__img">
      <img src={require('../images/jpg/img7.jpg')} />
      </div>

      <p className="saveFamilyStories__text">
        Используете встроенные шаблоны вопросов для проведения интервью с родными!

       </p>
       


    </div>

  );
}


export default SaveFamilyStories;