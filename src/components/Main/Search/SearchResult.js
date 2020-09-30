import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Search.sass";
import Sorting from "../generalUi/sorting/Sorting";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      filtered: "",
      message: "",
      styleType: "searchWrapMiddle",
    };
  }

  componentDidMount() {
    const { token, query } = this.props;

    console.log(query);

    axios
      .post(
        "http://api.memory-lane.ru/search",
        {
          search: query,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.content);
        console.log(res);
        if (res.data.content) {
          this.setState({
            results: res.data.content,
          });
        } else {
          // console.error(res.data.error);
          this.setState({
            message: "Failed to fetch results",
          });
        }
      })
      .catch((error) => {
        if (error) {
          this.setState({
            message: "The request failed",
          });
        }
      });
  }

  renderStoryResults = () => {
    const { results, message } = this.state;
    const {
      id,
      content,
      story_name,
      date_updated,
      author,
      city,
      tags,
      ico_url,
    } = this.props.stories;

    // console.log(results);

    // const {
    // 	id,
    // 	content,
    // 	date,
    // 	title,
    // 	author,
    // 	city,
    // 	tags,
    // 	picture
    //   } = this.props;

    if (message) {
      return <p className="message">{message}</p>;
    } else {
      return (
        <div className="storyContainer">
          {results.map((result) => {
            if (result.story) {
              return (
                <div className="storyItem">
                  {console.log(result)}
                  <div className="storyItem__img">
                    <Link
                      key={result.story.id}
                      to={{
                        pathname: `/stories/${result.story.id}`,
                        state: {
                          id: id,
                          content: content,
                          date: date_updated,
                          title: story_name,
                          author: author,
                          city: city,
                          tags: tags,
                          picture: ico_url,
                        },
                      }}
                    >
                      <img
                        className="image"
                        src="http://placehold.it/365x365"
                        alt="storyPicture"
                      />
                      {/* <img src={picture} alt='storyPicture'/> */}
                    </Link>
                  </div>
                  {/* <Link
					key={result.story.id} 
					to={{ 
						pathname: `/stories/${result.story.id}`,
						state: {
						id: id,
						content: content,
						date: date_updated,
						title: story_name,
						author: author,
						city: city,
						tags: tags,
						picture: ico_url
						}
					}}				  
					> 
					<div className='storyItem__text'>
						<div className='head3 itemTitle'>{result.story.story_name}</div>
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
					</Link> */}
                </div>
              );
            }
            return <p className="message">{message}</p>;
          })}
        </div>
      );
    }
  };

  renderAlbumsResults = () => {
    const { results, message } = this.state;
    const {
      id,
      content_url,
      author,
      // description,
      album_name,
      tags,
      persons,
      coordinates,
      // photo_name
    } = this.props.albums;

    // console.log(results);
    // const photo_url = this.props.albums.photo[0].content_url;
    // console.log(this.props.albums);
    if (message) {
      return <p className="message">{message}</p>;
    } else {
      return (
        <div className="storyContainer">
          {results.map((result) => {
            //   console.log(result);
            if (result.album) {
              return (
                <div className="storyItem">
                  <div className="storyItem__img">
                    <Link
                      key={result.album.id}
                      to={{
                        pathname: `/albums/${result.album.id}`,
                        state: {
                          url: content_url,
                          id: id,
                          name: album_name,
                          author: author,
                          // date: date,
                          coordinates: coordinates,
                          tags: tags,
                          persons: persons,
                        },
                      }}
                    >
                      <img
                        className="image"
                        src="http://placehold.it/365x365"
                        alt="storyPicture"
                      />
                      {/* <img src={(result.album.id === albums.id) ? albums.photo[albums.photo.length - 1].content_url : 'http://placehold.it/365x365'} alt='storyPicture'/> */}
                    </Link>
                  </div>
                </div>
              );
            }
            return <p className="message">{message}</p>;
          })}
        </div>
      );
    }
  };

  setGridType = (gridId) => {
    switch (gridId) {
      case 1:
        this.setState({ styleType: "searchWrapBig" });
        break;
      case 2:
        this.setState({ styleType: "searchWrapMiddle" });
        break;
      case 3:
        this.setState({ styleType: "searchWrapSmall" });
        break;
      default:
        return;
    }
  };

  render = () => {
    const { message } = this.state;

    if (message) {
      return <p className="message">{message}</p>;
    } else {
      return (
        <div className="searchContainer">
          <div className="head1">Результаты поиска</div>
          <Sorting currentPage="search" setGridType={this.setGridType} />
          <div>
            <div className="head3 searchTitle">Альбомы</div>
            {this.renderAlbumsResults()}
          </div>
          <div>
            <div className="head3 searchTitle">Истории</div>
            {this.renderStoryResults()}
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
          </div>
        </div> */}

          {/* { this.renderAlbumResults() }	    */}
        </div>
      );
    }
  };
}

const mapStateToProps = (state) => {
  return {
    query: state.searchQueryInfo.query,
    stories: state.storiesInfo.stories,
    albums: state.albums.albums,
    persons: state.persons.persons,
    token: state.session.sessionID,
  };
};

export default connect(mapStateToProps)(withRouter(Search));
