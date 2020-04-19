import React from 'react';
import './globalSass.sass';
import './LandingFeatures.sass';
import FaceRecognition from './LandingFeatures/LandingFeaturesService/faceRecognition.jsx';
import ColorizationPhotos from './LandingFeatures/LandingFeaturesService/ColorizationPhotos';
import SaveFamilyStories from './LandingFeatures/LandingFeaturesService/SaveFamilyStories';
import '../Profile/HomeProfale';
import HomeProfale from "../Profile/HomeProfale";
import UserProfale from "../Profile/UserProfale";

const LandingFeatures = () => {
  return (
    <div className="landing-features">
      <div className="sectionFeatures">
        <div className="container">
          <h2 className="sectionFeatures__titel"> Возможности сервиса</h2>

          <p className="sectionFeatures__text">
            Проект направлен не в прошлое, а в будущее  - цель не изучить предков, 
            а оставить насление потомкам. И для этого мы реализовали следующий функционал:
           </p>
         
          <FaceRecognition />
          <ColorizationPhotos />
          <SaveFamilyStories />
          <HomeProfale />
          <UserProfale />

        </div>

      </div>

    </div>

  );
}

export default LandingFeatures;
