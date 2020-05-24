import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Redirect } from 'react-router-dom';

import './Stories.sass';

import { ButtonContainer } from '../Button';
import { ButtonEncircledCross } from '../ButtonEncircledCross';

import axios from 'axios';


export default class StoryNew extends Component {
  state = {
    storyName: '',
    author: '',
    date: '',
    tags: '',
    city: '',
    content: '',
    hasCreated: false
  };

  storyNew = () => {
    const { storyName, author, date, tags, city, content } = this.state;
    const token = localStorage.getItem('token');

    axios.
      post(
        'http://api.memory-lane.ru/db/setHistory',
        {
          story_name: storyName,
          author: author,
          date: date,
          tags: tags,
          city: city,
          content: content
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        }
      )
	    .then(res => {
        if (res.data.result) {	// res.status === 200
          this.setState({ hasCreated: true });
	      } else {	// res.status !== 200
	        console.error(res.data.error);
	        alert(`${res.data.error}`);
	      }
	    })
	    .catch(error => console.error(error));
  };

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  
  handleTextArea = e => {
    const { name, value, style, scrollHeight } = e.target;

    style.height = 'auto';
    style.height = scrollHeight + 1 + 'px';

    this.setState({ [name]: value });
  };

  render() {
    const { loading } = this.props;
    const { storyName, author, date, tags, city, content, hasCreated } = this.state;

    if (hasCreated) return <Redirect to='/stories'/>

    return (
      loading ?
        <h1>Загрузка данных</h1> :
        (<PerfectScrollbar>
          <div className='storyNew'>

            <form className='storyNew__desk'>
              <input
                className='head2 storyNew__name'
                type='text'
                name='storyName'
                value={storyName}
                placeholder='Название истории'
                onChange={this.handleInput}
              />

              { /* TODO: Dynamic tags appearance */ }
              <input
                className='head2 storyNew__tags'
                type='hidden'
                name='tags'
                value={tags}
                placeholder='Тег'
                onChange={this.handleInput}
              />

              <input
                className='text3 storyNew__input'
                type='text'
                name='date'
                value={date}
                placeholder='Дата'
                onChange={this.handleInput}
              />

              <input
                className='text3 storyNew__input'
                type='text'
                name='author'
                value={author}
                placeholder='Имя'
                onChange={this.handleInput}
              />

              <input
                className='text3 storyNew__input'
                type='text'
                name='city'
                value={city}
                placeholder='Город'
                onChange={this.handleInput}
              />

              <div className='storyNew__wrapper'>
                <textarea
                  className='text1 storyNew__content'
                  name='content'
                  value={content}
                  placeholder='История'
                  onChange={this.handleTextArea}
                />
              </div>     
            </form>

            <ButtonContainer
              style={{ display: (storyName || author || date || tags || city || content) ? 'flex' : 'none' }}
              onClick={this.storyNew}
            >
              Опубликовать
            </ButtonContainer>
          </div>
        </PerfectScrollbar>)
    );
  };
}
