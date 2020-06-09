import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Search.sass';
import Sorting from '../General/Sorting/Sorting';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
	  filtered: '',
	  message: '',
	  loading: false,
      styleType: 'searchWrapMiddle'
    };

    this.componentDidMount();
    this.cancel = '';
  }

  componentDidMount = () => {
    const { token, query } = this.props;

  	axios
	  .post(
        'http://api.memory-lane.ru/search',
	    {
		  search: query
	    },
	    {
		  headers: {
		    'Content-Type': 'application/json',
		    'Authorization': `${token}`
		  }
	    }
	  )
	  .then(res => {
        if (res) {
          this.setState({
		    results: res.data.conten
          }); 
        } else {
		  console.error(res.data.error);
	  }
	  })
	  .catch((error) => {
        if (error) {
		  console.loge(error);
		  this.setState({
            loading: false,
            message: 'Failed to fetch results. Please check network'
		  });
        }
	  }); 
  };

  renderStoryResults = () => {
	const { results } = this.state;
	const { stories } = this.props;

	const { 
		id,
		content,
		date,
		title,
		author,
		city,
		tags,
		picture
	} = this.props;

    return (
	  <div className='storyContainer'>
        { results.map((result) => {
		  return (
            <div className='storyItem'>
              <div className='storyItem__img'>
				<Link 
				  key={result.story.id} 
				  to={{ 
					pathname: `/stories/${result.story.id}`,
					state: {
					  id: {id},
					  content: {content},
					  date: {date},
					  title: {title},
					  author: {author},
					  city: {city},
					  tags: {tags},
					  picture: {picture}
					}
				  }}
				>
				  <img className='image' src='http://placehold.it/365x365' alt='storyPicture'/>
				  {/* <img src={picture} alt='storyPicture'/> */}
				</Link>
              </div>
                <Link
				  to={{ 
					pathname: `/stories/${result.story.id}`,
					state: {
					  id: {id},
					  content: {content},
					  date: {date},
					  title: {title},
					  author: {author},
					  city: {city},
					  tags: {tags},
					  picture: {picture}
					}
				  }}				  
				>
					{title}
                  <div className='storyItem__text'>
                    {/* <h6 className='image-username'>{result.story.story_name}</h6> */}
                    {/* <div className='head3 itemTitle'>{result.story.story_name}</div> */}
                    {/* <div className='text1'>{stories.content}</div> */}
					<div className='text1'>
					  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
					  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
					  enim ad minim veniam, quis nostrud exercitation ullamco laboris 
					  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
					  reprehenderit in voluptate velit esse cillum dolore eu fugiat 
					  nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
					  sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
                  </div>
				</Link>
            </div>
		  );
        })}
	  </div>
    );
  }

  renderAlbumsResults = () => {
	const { results } = this.state;

	const { 
		isDesc, 
		isImg, 
		gridType, 
		url, 
		isSelected, 
		id, 
		view, 
		name, 
		author, 
		date, 
		coordinates, 
		tags, 
		persons 
	} = this.props;

	console.log(this.props);
  
    return (
	  <div className='storyContainer'>
        { results.map((result) => {
		  return (
            <div className='storyItem'>
              <div className='storyItem__img'>
				<Link 
				  key={result.story.id} 
				  to={{ 
					pathname: `/albums/${result.album.id}`,
					state: {
						url: url,
						id: id,
						name: name,
						author: author,
						date: date,
						coordinates: coordinates,
						tags: tags,
						persons: persons
					}
				  }}
				>
				  <img className='image' src='http://placehold.it/365x365' alt='storyPicture'/>
				  {/* <img src={picture} alt='storyPicture'/> */}
				</Link>
              </div>
            </div>
		  );
        })}
	  </div>
    );
  }

  setGridType = (gridId) => {
    switch (gridId) {
      case 1:
        this.setState({styleType: 'searchWrapBig'});
        break;
      case 2:
        this.setState({styleType: 'searchWrapMiddle'});
        break;
      case 3:
        this.setState({styleType: 'searchWrapSmall'});
        break;
      default:
        return;
    }
  }

  render = () => {
    return (
      <div className='searchContainer'>
			<div className='head1'>Результаты поиска</div>
        <Sorting  currentPage='search' setGridType={this.setGridType}/> 
		{/* <div>
          <div className='head3 searchTitle'>Альбомы</div>
		  { this.renderAlbumsResults() }
        </div> */}
        <div>
          <div className='head3 searchTitle'>Истории</div> 
          { this.renderStoryResults() } 
        </div> 
        {/* <div>
          <div className='head3 searchTitle'>Фотографии</div>
          <div className={this.state.styleType}>
            <div>
              <a className='searchLink'>
                <img className='searchImage' src='http://placehold.it/365x365' alt='/#'/>
              </a>
              <div className='text3 itemTitle'>Название</div>
            </div>
            <div>
              <a className='searchLink'>
                <img className='searchImage' src='http://placehold.it/365x365' alt='/#'/>
              </a>
              <div className='text3 itemTitle'>Название</div>
            </div>
            <div>
              <a className='searchLink'>
                <img className='searchImage' src='http://placehold.it/365x365' alt='/#'/>
              </a>
              <div className='text3 itemTitle'>Название</div>
            </div>
            <div>
              <a className='searchLink'>
                <img className='searchImage' src='http://placehold.it/365x365' alt='/#'/>
              </a>
              <div className='text3 itemTitle'>Название</div>
            </div>
          </div>
        </div> */}
        {/* <div>
          <div className='head3 searchTitle'>Персоны</div>
          <div className={this.state.styleType}>
            <div>
              <a className='searchLink'>
                <img className='searchImage' src='http://placehold.it/365x365' alt='/#'/>
              </a>
              <div className='text3 itemTitle'>Название</div>
            </div>
            <div>
              <a className='searchLink'>
                <img className='searchImage' src='http://placehold.it/365x365' alt='/#'/>
              </a>
              <div className='text3 itemTitle'>Название</div>
            </div>
            <div>
              <a className='searchLink'>
                <img className='searchImage' src='http://placehold.it/365x365' alt='/#'/>
              </a>
              <div className='text3 itemTitle'>Название</div>
            </div>
            <div>
              <a className='searchLink'>
                <img className='searchImage' src='http://placehold.it/365x365' alt='/#'/>
              </a>
              <div className='text3 itemTitle'>Название</div>
            </div>
          </div>
        </div> */}


        {/* { this.renderAlbumResults() }	    */}
	  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
	  query: state.searchQueryInfo.query,
	  isOpen: state.searchQueryInfo.isOpen,
	  stories: state.storiesInfo.stories,
	  token: state.session.sessionID
  };
};

export default connect(mapStateToProps)(withRouter(Search));
