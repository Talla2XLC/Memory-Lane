import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import './Stories.sass';

import axios from 'axios';

export default class AddStory extends Component {
  state = {
    author: '',
    date: '',
    tag: '',
    country: '',
    content: '',
    modalOpened: false,
    hasCreated: false
  };

  handleCancel = () => this.setState({ modalOpened: false, hasCreated: true });

  addStory = () => {
    const { author, date, tag, country, content } = this.state;
    const token = localStorage.getItem('token');

    axios.
      post(
        'http://api.memory-lane.ru/db/setHistory',
        {
          story_name: 'story_name',
          author: 'author',
          date: 'date',
          tag: 'tag',
          country: 'country',
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
        console.log(this.state.content)
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
    const { loading, stories } = this.props;
    console.log(this.state.content)

    return (
      loading ?
        <h1>Загрузка данных</h1> :
        (<PerfectScrollbar>
          {    
            <div className='addStory'>
              <div className='addStory__desk'>
                <div className='font1Light'>Добавьте заголовок к вашей истории</div>
                <div>тег</div>
                <div className='font1Light'>Автор</div>
                <div className='font1Light'>Дата</div>
                <div>Страна</div>
              </div>
              <div className='addStory__photo'>
                <img className='addPhotoItem' src='https://picsum.photos/168/168' />
                <img className='addPhotoItem' src='https://picsum.photos/168/168' />
                <img className='addPhotoItem' src='https://picsum.photos/168/168' />
                <img className='addPhotoItem' src='https://picsum.photos/168/168' />
                <img className='addPhotoItem' src='https://picsum.photos/168/168' />
              </div>

              <textarea
                className='addStory__textArea'
                name='content'
                onChange={this.handleInput}
              />
              <button
                onClick={this.addStory}
              >Опубликовать</button>
            </div>  
          }
        </PerfectScrollbar>)
    );
  };
}
