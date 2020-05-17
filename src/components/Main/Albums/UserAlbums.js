import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getAlbums } from '../../../actions/actionAlbums';
import {ReactComponent as Folder} from '../svg/folder.svg';
import axios from 'axios';
import './Album.sass';
import { Link } from  'react-router-dom';
class UserAlbums extends Component {
  state = {
	  albumName: '',
	  description: ''
  }

	handleInput = e => {
	  const { name, value } = e.target;
	  this.setState({ [name]: value });
	}
  
	addAlbum = () => {
	  const { albumName, description } = this.state;
	  const { downloadAlbums } = this.props;

	  const token = localStorage.getItem('token');

	  axios
	    .post(
	      'http://api.memory-lane.ru/db/setAlbum',
	      {
	        'album_name': albumName,
	        'description': description
	      },
	      {
	        headers: {
	          'Content-Type': 'application/json',
	          'Authorization': `${token}`
	        }
	      })
	    .then(res => {
	      if (res.data.result) {
	        downloadAlbums();
	      } else {
	        console.error(res.data.error);
	      }
	    })
	    .catch(error => console.error(error));
	}
  
	render() {
	  const { albumName, description } = this.state;
	  const { loading } = this.props;
	  const userAlbums = typeof this.props.albums === 'object' ? Object.values(this.props.albums) : [];

	  
	  const albumsItems = userAlbums.map(albums =>
	    (
				  <Link key={albums.id} to={`/albums/${albums.id}`}>
	        <Folder/>
	        <div>
	          {albums.album_name}
	        </div>
	      </Link>


	    )
	  );

	  return (
	    loading ? <h1>Загрузка данных</h1> :
	      <div className='contentContainer'>
	        <div className='AlbumsWrapper'>
	          {albumsItems}
	        </div>

	        <input
	          name='albumName'
	          type='text'
	          placeholder='Название альбома'
	          value={albumName}
	          onChange={this.handleInput}
	        />
	        <input
	          name='description'
	          type='text'
	          placeholder='Описание альбома'
	          value={description}
	          onChange={this.handleInput}
	        />
	        <button
	          value='Создать'
	          onClick={this.addAlbum}
	        >создать
	        </button>
	      </div>
	  );
	}
}

const mapStateToProps = (state) => {
  return {
    loading: state.albums.loading,
    albums: state.albums.albums.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    downloadAlbums: () => {
      dispatch(getAlbums());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlbums);


