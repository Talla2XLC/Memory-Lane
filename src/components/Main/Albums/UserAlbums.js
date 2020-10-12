import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getAlbums } from '../../../redux/actions/actionAlbums';
import './UserAlbums.sass';
import { Link } from  'react-router-dom';
import Sorting from '../generalUi/sorting/Sorting';
import DropdownAction from '../generalUi/dropdownAction/DropdownAction';
import axios from 'axios';
import { ReactComponent as FamilySvg } from '../../../assets/Images/emptyBlock/family.svg';

class UserAlbums extends Component {
  constructor(props) {
    super(props);
    this.setGridType = this.setGridType.bind(this);
    this.showActions = this.showActions.bind(this);
    this.closeActions = this.closeActions.bind(this);
    this.performAction = this.performAction.bind(this);

    this.state = {
      albumName: '',
      description: '',
      styleType: 'userAlbumsWrapBig',
      showActions: ''
    };
  }

  showActions(event, id) {
    event.preventDefault();
    this.setState({ showActions: id }, () => {
      document.addEventListener('click', this.closeActions);
    });
  }
  closeActions() {
    this.setState({ showActions: '' }, () => {
      document.removeEventListener('click', this.closeActions);
    });
  }
	handleInput = e => {
	  const { name, value } = e.target;
	  this.setState({ [name]: value });
	}

	setGridType(gridId) {
	  switch (gridId) {
	    case 1:
	      this.setState({styleType: 'userAlbumsWrapBig'});
	      this.setState({rowItemView: false});
	      break;
	    case 2:
	      this.setState({styleType: 'userAlbumsWrapMiddle'});
	      this.setState({rowItemView: false});
	      break;
	    case 3:
	      this.setState({styleType: 'userAlbumsWrapSmall'});
	      this.setState({rowItemView: true});
	      break;
	    default:
	      return;
	  }
	}
	
	performAction(actionId, albumId) {
	  switch (actionId) {
	    case 1:
	      break;
	    case 2:
	      break;
	    case 3:
	      break;
	    case 4:
	      break;
	    case 5:
	      break;
	    case 6:
	      this.deleteAlbum(albumId);
	      break;
	    default:
	      break;
	  }
	}

	deleteAlbum(id) {
	  axios
	    .post(
	      'http://api.memory-lane.ru/db/deleteAlbum',
	      {
	        id_album: id
	      },
	      {
	        headers: {
	          'Content-Type': 'application/json',
	          'Authorization': `${this.props.token}`
	        }
	      }
	    )
	    .then(res => {
	      if (res.data.result) {
	        this.props.downloadAlbums();
	      }
	    })
	    .catch(error => console.error(error));
	}
  
	render() {
	  const { loading, albums } = this.props;
	  const userAlbums = albums ?? [];

	  const albumsItems = userAlbums.map((album, index) =>
	    (
	        <div key={album.id} className='album-item'>
	        <Link className='userAlbumsLink' to={`/albums/${album.id}`}>
	          <div className='imgWrap'>
	            {album.photo ? 
	              <img className='imgWrap__img' src={album.photo[album.photo.length - 1].content_url} alt='albumPreview'/>
	              :
	              <div className='album-empty'>
	                <FamilySvg className='album-empty-svg' />
	                <span className='album-empty-txt text3'>Здесь пока нет ни одной фотографии</span>
	              </div>
	            }
	          </div>
	        </Link>
	          <div className='albumName'>
	            <span className='albumName-span'>{album.album_name}</span>
	          <DropdownAction
	            currentPage='allAlbums'
	            albumId={album.id}
	            performAction={this.performAction}
	          />
	          </div>
	        </div>
	    )
	  );

	  return (
	    loading ? <h1>Загрузка данных</h1> :
	      <div className='albums-container'>
	        <Sorting
	          currentPage='allAlbums'
	          setGridType={this.setGridType}
	          performAction={this.performAction}
	        />
	        <div className={this.state.styleType}>
	          {albumsItems}
	        </div>
	      </div>
	  );
	}
}

const mapStateToProps = (state) => {
  return {
    loading: state.albums.loading,
    albums: state.albums.albums,
    token: state.session.sessionID
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


