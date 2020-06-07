import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Search.sass';

class Search extends Component {
  constructor(props) {
    super(props)
	this.state = {
		results: [],
		filtered: ''
	};

    this.handleClick();
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
	if(res) {
		this.setState({
		  results: res.data.conten
		}); 
		console.log(res.data.conten[0].story);
	} else {
		  console.error(res.data.error);
	  }
    
	  })
	  .catch((error) => {
		if (axios.isCancel(error) || error) {
		  this.setState({
			loading: false,
			message: 'Failed to fetch results. Please check network',
		  });
		}
	  }); 
  };

  renderStoryResults = () => {
    const { results } = this.state;
	return (
	  <div className="results-container">
		{ results.map((result) => {
		  return (
			<a key={result.story.id} href='/#' className="result-items">
			  <h6 className="image-username">{result.story.story_name}</h6>
			  <div className="image-wrapper">
				<img className="image" src='/#' alt="/#"/>
			  </div>
			</a>
		  );
		})}
	  </div>
	)
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
      <div>
	    { this.renderStoryResults() }
		{/* { this.renderAlbumResults() }	   */}
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
