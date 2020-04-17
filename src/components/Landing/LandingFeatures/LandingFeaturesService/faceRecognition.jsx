import React from 'react';
import './faceRecognition.sass';


const FaceRecognition = () => {

  return (

    <div className="faceRecognition">
      <h2 className="faceRecognition__titel" >
        распознование лиц
      </h2>

      <ul className="faceRecognition__list">
        <li className="faceRecognition__item">
          <h3>ШАГ 1</h3>
          <img src={require('../images/jpg/img1.jpg')} alt = 'the photo' />
          <p>
            Загружаете фото, указываете кто на этой фото
          </p>
        </li>
        <li className="faceRecognition__item">
          <h3>ШАГ 2</h3>
          <img src={require('../images/jpg/img2.png')} alt = 'the photo' />
          <p>
            Загружаем в систему семейный архив
          </p>
        </li>
      </ul>

      <div className="faceRecognition__inner">
        <h3 className="faceRecognition__inner-titel">РЕЗУЛЬТАТ</h3>

        <ul className="faceRecognition__inner-list">
          <li className="faceRecognition__inner-item">

          <img src={require('../images/jpg/img3.jpg')} alt = 'the photo' />
            <ul>

              <li>
                Person id - <span>28</span>
              </li>

              <li>
                Имя -  <span>Lisa Kudrow</span>
              </li>

              <li>
                Пол -  <span>female</span>
              </li>

              <li>
                Возраст - <span>42</span>
              </li>

              <li>
                Настроение -  <span>Happiness</span>
              </li>

              <li>
                Сonfidence(Уверенность) - <span>0.9917</span>
              </li>

              <li >
                Фото сделано примерно в 2005 году
              </li>

            </ul>
          </li>
          <li className="faceRecognition__inner-item">
          <img src={require('../images/jpg/img4.jpg')} alt = 'the photo' />
            <ul>

              <li>
                Person id - <span>28</span>
              </li>

              <li>
                Имя -  <span>Lisa Kudrow</span>
              </li>

              <li>
                Пол -  <span>female</span>
              </li>

              <li>
                Возраст - <span>42</span>
              </li>

              <li>
                Настроение -  <span>Happiness</span>
              </li>

              <li>
                Сonfidence(Уверенность) - <span>0.9917</span>
              </li>

              <li>
                Фото сделано примерно в 2005 году
              </li>

            </ul>
          </li>
          <li className="faceRecognition__inner-item">
          <img src={require('../images/jpg/img5.jpg')} alt = 'the photo' />
            <ul>

              <li>
                Person id - <span>28</span>
              </li>

              <li>
                Имя -  <span>Lisa Kudrow</span>
              </li>

              <li>
                Пол -  <span>female</span>
              </li>

              <li>
                Возраст - <span>42</span>
              </li>

              <li>
                Настроение -  <span>Happiness</span>
              </li>

              <li >
                Сonfidence(Уверенность) - <span>0.9917</span>
              </li>

              <li>
                Фото сделано примерно в 2005 году
              </li>

            </ul>
          </li>
          <li className="faceRecognition__inner-item">
            <img src={require('../images/jpg/img1.jpg')} alt = 'the photo' />
            <ul>

              <li>
                Person id - <span>28</span>
              </li>

              <li>
                Имя -  <span>Lisa Kudrow</span>
              </li>

              <li>
                Пол -  <span>female</span>
              </li>

              <li>
                Возраст - <span>42</span>
              </li>

              <li>
                Настроение -  <span>Happiness</span>
              </li>

              <li className = "faceRecognition__inner-item--bg">
                Сonfidence(Уверенность) - <span>0.9917</span>
              </li>

              <li>
                Фото сделано примерно в 2005 году
              </li>

            </ul>
          </li>
        </ul>

      </div>


    </div>


  );



}



export default FaceRecognition;