import React from 'react';
import './faceRecognition.sass';

 
const FaceRecognition = () => {
  
    return (

      <div className="faceRecognition">
        <h2 className="faceRecognition__titel" >
          распознование лиц
      </h2>
        <p className="faceRecognition__text">
  
          Система распознования лиц позволяет быстро находить в архиве нужную фотографию, а также сортировать фото
          по присутствующим на них людям
      </p>
  
        <div className="faceRecognition__inner">
  
          <div className="faceRecognition__inner-box">
  
            <h3 className="faceRecognition__inner-titel">
              <span>1.</span> Выбирете фотографию человека
            </h3>
  
            <div className="faceRecognition__inner-img">
            <img src={require('../images/jpg/img.jpg')} />
              
            </div>
  
          </div>
  
          <h3 className="faceRecognition__inner-titel--2">
            <span>2.</span>  Наш сервис найдет все фотографии в вашем архиве
          </h3>
  
          <ul className="faceRecognition__inner-list">
            <li className="faceRecognition__inner-item">
              <img src={require('../images/jpg/img2.jpg')} />
            </li>
            <li className="faceRecognition__inner-item">
              <img src={require('../images/jpg/img3.jpg')} />
            </li>
            <li className="faceRecognition__inner-item">
              <img src={require('../images/jpg/img4.jpg')} />
            </li>
          </ul>
  
  
        </div>
  
  
      </div>
  
  
    );
  
  

}



export default FaceRecognition;