import React, { Component } from 'react';
import StoriesItem from './StoriesItem.jsx';
import './Stories.sass';
import Sorting from '../Sorting';
import {storyData} from './storiesData';
import { Link } from 'react-router-dom';

export default class Stories extends Component {
  render() {
    return (
      <div className='contentContainer'>
        <Sorting/>
        <div className='stories'>
          {
            storyData.map( story => {
              return  <Link className='storyLink'
                to={`/stories/${story.id}`}>
                <StoriesItem
                  url={story.url}
                  autor={story.autor}
                  date={story.date}
                  id={story.id}
                />
              </Link>;
            })
          }
        </div>
      </div>

    );
  }
}
