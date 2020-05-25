import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import './Stories.sass';

import axios from 'axios';

export default class StoryEdit extends Component {
  state = {
    storyName: '',
    author: '',
    date: '',
    tag: '',
    country: '',
    content: '',
    modalOpened: false,
    hasEdited: false
  };

  editStory = () => {
    const { storyName, author, date, tag, country, content, modalOpened, hasEdited } = this.state;
    const token = localStorage.getItem('token');

    axios
      .post(
        'http://api.memory-lane.ru/db/updateHistory',
        {
          story_name: 'storyName',
          // story_id: 28,
          author: 'author',
          date: 'date',
          tag: 'tag',
          country: 'country',
          content: 'content'
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
          alert(`Вы успешно отредактировали историю!`);
          this.setState({ hasEdited: true });
          //redirect to stories
        } else {	// res.status !== 200
          console.log(res)
          console.log(this.props)
	        console.error(res.data.error);
	        alert(`${res.data.error}`);
	      }
	    })
	    .catch(error => console.error(error));
  };

  render() {

    return (
      <PerfectScrollbar component='div'>
        <div className='contentContainer details'>
          <img className='details__photo' src='' alt='detailsPhoto'/>
          <div className='details__right'>
            <div className='main1'>Заголовок</div>
            <div>тег</div>
            <div className='text3'></div>
            <div className='text3'></div>
            <div>country</div>
            <div className='text1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit. </div>
            <div className='action'>
              <button
                onClick={this.editStory}
              >
                Редактировать
            </button>
            </div>
          </div>
          <div className='details__left'>
            <div className='details__title main1'>Заголовок</div>
            <div />
            <div className='desk text1'> Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.Eiusmod consectetur ullamco nostrud nisi laborum ullamco nulla non est velit.</div>
          </div>
        </div>
      </PerfectScrollbar>
    );
  };
}
