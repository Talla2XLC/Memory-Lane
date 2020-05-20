import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { fetchStories } from '../../../actions/actionStories';

import './Stories.sass';

import { connect } from 'react-redux';

class AddStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storyContent: ''
    }

    const { fetchStoriesData } = this.props;

    fetchStoriesData();
  };

  addStory() {

  };

  handleInput = e => {
	  const { name, value } = e.target;

	  this.setState({ [name]: value });
	};

  render() {
    const { loading, stories } = this.props;

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
                name='storyContent'
                onChange={this.handleInput}
              />
              <button>Опубликовать</button>
            </div>  
          }
        </PerfectScrollbar>)
    );
  };
}

const mapStateToProps = state => {
  return {
    loading: state.userStories.loading,
    stories: state.userStories.stories,
    error: state.userStories.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
		fetchStoriesData: () => {
			dispatch(fetchStories());
		}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStory);