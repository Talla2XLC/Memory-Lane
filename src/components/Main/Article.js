import React, { Component } from 'react';
import './MainContent.sass';

export default class Article extends Component {
  render() {
    return (
      <div className="article">
        <p className="main1">Заголовок статьи</p>
        <div className='itemDate'>March 31, 2012 8:10 AM</div>
        <p className="mainText" >
       Aute elit aute sunt occaecat ullamco deserunt sunt do dolor aute ea sunt sit adipisicing. Eiusmod ad consequat proident sunt ea aute magna nisi do occaecat commodo. Occaecat pariatur pariatur ipsum labore enim nostrud aute eiusmod qui consequat. Ut excepteur dolor laboris proident laborum officia. Officia tempor consequat Lorem qui. Ipsum anim culpa labore consequat pariatur officia Lorem cupidatat enim proident mollit pariatur exercitation.
       Ipsum proident quis labore sunt aliqua amet proident. 
        </p>
      </div>
    );
  }
}
