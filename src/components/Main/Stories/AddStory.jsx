import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import './Stories.sass';

import axios from 'axios';

export default class AddStory extends Component {
  state = {
    storyName: '',
    author: '',
    date: '',
    tag: '',
    city: '',
    content: '',
    modalOpened: false,
    hasCreated: false
  };

  handleCancel = () => this.setState({ modalOpened: false, hasCreated: true });

  addStory = () => {
    const { storyName, author, date, tag, city, content } = this.state;
    const token = localStorage.getItem('token');

    axios.
      post(
        'http://api.memory-lane.ru/db/setHistory',
        {
          story_name: storyName,
          author: author,
          date: date,
          tag: tag,
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
        console.log(res);
	      if (res.data.result) {	// res.status === 200
          alert(`Вы успешно создали новую историю!`);
          this.setState({ hasCreated: true });
          //redirect to stories
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

  render() {
    const { loading } = this.props;
    const { storyName, author, date, tag, city, content, modalOpened, hasCreated } = this.state;

    return (
      loading ?
        <h1>Загрузка данных</h1> :
        (<PerfectScrollbar>
          {    
            <div className='addStory'>

              <form className='addStory__desk'>
                <input
                  className=''
                  name='storyName'
                  type='text'
                  size='0'
                  placeholder='Добавьте заголовок к вашей истории'
                  value={storyName}
                  onChange={this.handleInput}
                />

                <input
                  className=''
                  name='author'
                  type='text'
                  size='0'
                  placeholder='Автор'
                  value={author}
                  onChange={this.handleInput}
                />

                <input
                  className=''
                  name='date'
                  type='text'
                  size='0'
                  placeholder='дата'
                  value={date}
                  onChange={this.handleInput}
                />

                <label for='start'>Дата</label>

                <input
                  type='date'
                  id='start'
                  name='trip-start'
                  value='2018-07-22'
                  min=''
                  max='2220-12-31'>
                </input>

                <input
                  className=''
                  name='tag'
                  type='text'
                  size='0'
                  placeholder='тег'
                  value={tag}
                  onChange={this.handleInput}
                />

                <input
                  className=''
                  name='city'
                  type='text'
                  size='0'
                  placeholder='Город'
                  value={city}
                  onChange={this.handleInput}
                />

                <textarea
                  className='addStory__textArea'
                  name='content'
                  onChange={this.handleInput}
                />
              </form>

              <div className='addStory__photo'>
                <img className='addPhotoItem' src='' alt='storyPicture' />
                <img className='addPhotoItem' src='' alt='storyPicture' />
                <img className='addPhotoItem' src='' alt='storyPicture' />
                <img className='addPhotoItem' src='' alt='storyPicture' />
                <img className='addPhotoItem' src='' alt='storyPicture' />
              </div>

              <button
                onClick={this.addStory}
              >
                Опубликовать
              </button>
            </div>  
          }
        </PerfectScrollbar>)
    );
  };
}
