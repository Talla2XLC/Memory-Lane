import React, { Component } from 'react';
import StoriesItem from './StoriesItem.jsx';
import './Stories.sass';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Sorting from '../Sorting';
import {storyData} from './storiesData';
import { Link } from 'react-router-dom';
export default class Stories extends Component {
  render() {
    return (
      <>
        <Sorting/>
        <PerfectScrollbar component='div'>
          <div className='storiesContainer'>
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
        </PerfectScrollbar> 
      </>
    );
  }
}
