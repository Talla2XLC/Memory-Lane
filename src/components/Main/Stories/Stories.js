import React, { Component } from 'react';

import { fetchStories } from '../../../actions/actionStories';

import StoryItem from './StoryItem';
import Sorting from '../Sorting';
import StoriesEmpty from './StoriesEmpty';

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

    if (loading) return <h1>Загрузка данных</h1>;

    const storyItems = Object.values(stories).map(story =>
      <StoryItem 
        key={story.id}
        id={story.id}
        title={story.story_name}
        author={story.author}
        date={story.date_updated}
        content={story.content}
        picture={story.ico_url}
      />
    )
    
    return (
      Object.keys(stories).length === 0 ?
      <div className='contentContainer'> <StoriesEmpty/> </div> :
        <div className='contentContainer'>
          <Sorting/>
          <div className='stories'>
            {storyItems}
          </div>
        </div>
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
