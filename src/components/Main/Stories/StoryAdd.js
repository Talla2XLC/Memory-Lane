import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Redirect } from 'react-router-dom';

import './Stories.sass';

import { ButtonContainer } from '../Button';
import { ButtonEncircledCross } from '../ButtonEncircledCross';

import axios from 'axios';


export default class AddStory extends Component {
  state = {
    storyName: '',
    author: '',
    date: '',
    tags: '',
    city: '',
    content: '',
    // isVisible: false,
    // isInputEmpty: true,
    // isTextAreaEmpty: true,
    // modalOpened: false,
    hasCreated: false
  };

  // handleCancel = () => this.setState({ modalOpened: false, hasCreated: true });

  storyAdd = () => {
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
          <div className='storyAdd'>

            <form className='storyAdd__desk'>
              <input
                className='head2 storyAdd__name'
                type='text'
                name='storyName'
                value={storyName}
                placeholder='Название истории'
                onChange={this.handleInput}
              />

              { /* TODO: Dynamic tags appearance */ }
              <input
                className='head2 storyAdd__tags'
                type='hidden'
                name='tags'
                value={tags}
                placeholder='Тег'
                onChange={this.handleInput}
              />

              <input
                className='text3 storyAdd__input'
                type='text'
                name='date'
                value={date}
                placeholder='Дата'
                onChange={this.handleInput}
              />

              <input
                className='text3 storyAdd__input'
                type='text'
                name='author'
                value={author}
                placeholder='Имя'
                onChange={this.handleInput}
              />

              <input
                className='text3 storyAdd__input'
                type='text'
                name='city'
                value={city}
                placeholder='Город'
                onChange={this.handleInput}
              />

              <div className='storyAdd__wrapper'>
                <textarea
                  className='text1 storyAdd__content'
                  name='content'
                  value={content}
                  placeholder='История'
                  onChange={this.handleTextArea}
                />
              </div>     
            </form>

            <ButtonContainer
              style={{ display: (storyName || author || date || tags || city || content) ? 'flex' : 'none' }}
              onClick={this.storyAdd}
            >
              Опубликовать
            </ButtonContainer>
          </div>
        </PerfectScrollbar>)
    );
  };
}
