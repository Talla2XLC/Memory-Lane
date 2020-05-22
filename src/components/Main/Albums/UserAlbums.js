import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getAlbums } from '../../../actions/actionAlbums';
import axios from 'axios';
import './UserAlbums.sass';
import { Link } from  'react-router-dom';
import {ReactComponent as DownloadIcon} from '../svg/downloadIcon.svg';
import {ReactComponent as ShareIcon} from '../svg/shareIcon.svg';
import {ReactComponent as RenameIcon} from '../svg/reNameIcon.svg';
import {ReactComponent as CopyIcon} from '../svg/copyIcon.svg';
import {ReactComponent as DeleteIcon} from '../svg/deleteIcon.svg';
import {ReactComponent as Dots} from '../svg/dots.svg';
import Sorting from '../Sorting';
class UserAlbums extends Component {
  constructor(props) {
    super(props);
    this.setStyleType = this.setStyleType.bind(this);
    this.showActions = this.showActions.bind(this);
    this.closeActions = this.closeActions.bind(this);

    this.state = {
      albumName: '',
      description: '',
      styleType: 'userAlbumsWrapBig',
      showActions: false
    };
  }
  showActions(event) {
    event.preventDefault();
    this.setState({ showActions: true }, () => {
      document.addEventListener('click', this.closeActions);
    });
  }
  closeActions() {
    this.setState({ showActions: false }, () => {
      document.removeEventListener('click', this.closeActions);
    });
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

	setStyleType(styleId) {
	  switch (styleId) {
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
  
	render() {
	  const { albumName, description } = this.state;
	  const { loading } = this.props;
	  const userAlbums = typeof this.props.albums === 'object' ? Object.values(this.props.albums) : [];
		

	  const albumsItems = userAlbums.map(albums =>


	    (


	        <div key={albums.id}>

	        <Link className='userAlbumsLink' to={`/albums/${albums.id}`}>      
	          <div className='imgWrap'>	      
	            <img className='imgWrap__img' src='https://picsum.photos/238/149' alt='albumPreview'/>
	          </div>
	        </Link>

	          <div className='albumName'>
	            {albums.album_name}
	            <div className='actionsForAlbums'>
	            <Dots  onClick={this.showActions}/>
	              {
	                this.state.showActions 
	                  ? 
	                  (<ul className='actionsForAlbums__dropdown'>
	
	                    <li className='actionsForAlbums__li'>
	                      <ShareIcon/> Поделиться
	                    </li>
	                    <li className='actionsForAlbums__li'>
	                      <DownloadIcon/>Скачать

	                    </li>
	                    <li className='actionsForAlbums__li'>
	                      <RenameIcon/>Переименовать

	                    </li>
	                    <li className='actionsForAlbums__li'>
	                      <CopyIcon/>Копировать
	                    </li>
	                    <li className='actionsForAlbums__li'>
	                      <DeleteIcon/>Удалить

	                    </li>
							  </ul>)
	                  :
	                  (
	                    null
	                  )


	              }

	            </div>


	          </div>

	        </div>

			
	    )
	  );

	  return (
	    loading ? <h1>Загрузка данных</h1> :
	      <div className='contentContainer'>
	        <Sorting album={true} 
	          styleId={this.setStyleType}
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
    albums: state.albums.albums
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


