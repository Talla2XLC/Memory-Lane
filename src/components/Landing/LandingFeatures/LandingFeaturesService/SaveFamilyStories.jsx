import React from 'react';
import '../../globalSass.sass';
import './SaveFamilyStories.sass';


const SaveFamilyStories = () => {
  return (

    <div className="saveFamilyStories">

      <h2 className="saveFamilyStories__titel">
        сохраните истории своей семьи в едином пространстве
      </h2>
      

      <div className="saveFamilyStories__img">
      <img src={require('../images/jpg/img10.png')} alt = 'the photo' />
      </div>

   
       


    </div>

  );
}


export default SaveFamilyStories;
