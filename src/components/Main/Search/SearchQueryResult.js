import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Search.sass';
import Sorting from '../General/Sorting/Sorting';
class Search extends Component {
  constructor(props) {
    super(props);
    this.setGridType = this.setGridType.bind(this);
    this.state = {
      results: [],
      filtered: '',
      styleType: 'searchWrapMiddle'
    };
		
    this.handleClick();
  }
  setGridType(gridId) {
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
	
  handleClick = () => {
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
	  console.warn(res);
        if (res) {
          this.setState({
		  results: res.data.conten
          }); 
          // console.log(res.data.conten[0].story);
        } else {
		  console.error(res.data.error);
	  }
	  })
	  .catch((error) => {
        if (axios.isCancel(error) || error) {
		  this.setState({
            loading: false,
            message: 'Failed to fetch results. Please check network'
		  });
        }
	  }); 
  };

  renderStoryResults = () => {
    const { results } = this.state;
    return (
	  <div className='storyContainer'>
        { results.map((result) => {
		  return (
            <div className='storyItem'>
              <div className='storyItem__img'>
                <a key={result.story.id} href='/#' className='result-items'>
                  <img className='image' src='http://placehold.it/365x365' alt='/#'/>
                </a>
              </div>
              <div className='storyItem__text'>
                {/* <h6 className='image-username'>{result.story.story_name}</h6> */}
                <div className='text3 itemTitle'>имя истории </div>
                <div className='text3'>имя историиимя историиимя историиимя историиимя историиимя историиимя историиимя историиимя историиимя историиимя историиимя истории </div>
              </div>
            </div>
		  );
        })}
	  </div>
    );
  }

  //   renderAlbumResults = () => {
  // 	const { results } = this.state;
  // 	  return (
  // 		<div className="results-container">
  // 		  { results.map((result) => {
  // 			return (
  // 			  <a key={result.album.id} href='/#' className="result-items">
  // 				<h6 className="image-username">{result.album.album_name}</h6>
  // 				<div className="image-wrapper">
  // 				  <img className="image" src='/#' alt="/#"/>
  // 				</div>
  // 			  </a>
  // 			);
  // 		  })}
  // 		</div>
  // 	  )
  //   }

  render = () => {
    return (
      <div className='searchContainer'>
			 <div className='head1'>Результаты поиска</div>
        <Sorting  currentPage='search' setGridType={this.setGridType}/> 

        <div>
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
        </div>

        <div>
          <div className='head3 searchTitle'>Альбомы</div>
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
        </div>

        <div>
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
        </div>

        <div>
          <div className='head3 searchTitle'>Истории</div> 
          { this.renderStoryResults() } 
        </div>


        {/* { this.renderAlbumResults() }	    */}
	  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
	  query: state.searchQueryInfo.query,
	  token: state.session.sessionID
  };
};

export default connect(mapStateToProps)(Search);
