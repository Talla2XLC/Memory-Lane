import React, { Component } from 'react';
import './MainContent.sass';
import StoriesItem from './Stories/StoriesItem';
import Article from './Article';

export default class NewsFeed extends Component {
  render() {
    return (
      <div className="NewsBlock">
        <p className="NewsBlock__title main2">Ваша Лента</p>

        <StoriesItem
          url='https://picsum.photos/400/400'
          autor='itemAutor'
          date= 'itemDate'
          id= ''
        />

        <Article/>
        <StoriesItem
          url='https://picsum.photos/400/400'
          autor='itemAutor'
          date= 'itemDate'
          id= ''
        />
        <Article/>

      </div>
    );
  }
}
