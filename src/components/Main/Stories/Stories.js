import React, { Component } from 'react';

import { fetchStories } from '../../../actions/actionStories';

import StoryItem from './StoryItem';
import Sorting from '../Sorting';

import './Stories.sass';

import { connect } from 'react-redux';

class Stories extends Component {
  constructor(props) {
    super(props);

    const { fetchStoriesData } = this.props;

    fetchStoriesData();
  }

  render() {
    const { loading, stories } = this.props;
    
    return (
      loading ?
        <h1>Загрузка данных</h1> :
        (<div className='contentContainer'>
          <Sorting/>
          <div className='stories'>
            {
              Object.values(stories).map(story =>
                <StoryItem
                  id={story.id}
                  title={story.story_name}
                  author={story.author}
                  date={story.date_updated}
                  content={story.content}
                  picture={story.ico_url}
                />
              )
            }
          </div>
        </div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
