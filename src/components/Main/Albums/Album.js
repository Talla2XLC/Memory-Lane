import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Sorting from '../Sorting';
import AlbumsItem from './PhotoItem';
import {ButtonContainer} from '../Button';
import './Album.sass';
import EmptyBlock from '../EmptyBlock/EmptyBlock';

class Album extends Component {
  constructor(props) {
    super(props);
    this.setGridType = this.setGridType.bind(this);
    this.selectImage = this.selectImage.bind(this);

    this.state = {
      loading: true,
      images: [],
      isEmpty: true,
      imagesToUpload: [],
      gridType: 'bigColView',
      rowItemView: false,
      itemSelected: []
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const { album, token } = this.props;
    this.setState({ loading: true });

    axios
      .post(
        'http://api.memory-lane.ru/get/images',
        {
          'id_album': album.id
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        })
      .then(res => {
        if (res.data.result) {		// res.status === 200
          this.setState({ loading: false });
          if (res.data.content) {
            this.setState({ images: Object.values(res.data.content) });
            this.setState({ isEmpty: false });
          } else {
            this.setState({ isEmpty: true });
          }
        } else {	// res.status !== 200
          console.error(res.data.error);
          alert(`${res.data.error}`);
        }
      })
      .catch(error => console.error(error));
  }

  setGridType(gridId) {
    switch (gridId) {
      case 1:
        this.setState({gridType: 'bigColView'});
        this.setState({rowItemView: false});
        break;
      case 2:
        this.setState({gridType: 'smallColView'});
        this.setState({rowItemView: false});
        break;
      case 3:
        this.setState({gridType: 'bigRowView'});
        this.setState({rowItemView: true});
        break;
      case 4:
        this.setState({gridType: 'smallRowView'});
        this.setState({rowItemView: true});
        break;
      case 5:
        this.setState({gridType: 'noPreview'});
        this.setState({rowItemView: false});
        break;
      default:
        return;
    }
  }

  selectImage(id, action) {
    const newItemArr = this.state.itemSelected;
    switch (action) {
      case 'add':
        newItemArr.push(id);
        break;
      case 'del':
        newItemArr.splice(newItemArr.indexOf(id), 1);
        break;
      default:
        return;
    }
    this.setState({itemSelected: newItemArr});
  }

  render() {
    const { isEmpty, images } = this.state;
    const { album } = this.props;

    const imagesItem = images.map(image => {
      return <AlbumsItem
        id = {image.id}
        view={this.state.rowItemView ? 'flex-row' : 'flex-column'}
        url={image.urls} name={image.photo_name}
        autor={image.author} /* date={card.date}*/
        key={ image.id }
        gridType={this.state.gridType}
        isDesc={!(this.state.gridType === 'smallRowView' || this.state.gridType === 'noPreview')}
        isImg={this.state.gridType !== 'noPreview'}
        selectId={this.selectImage}
        isSelected={this.state.itemSelected.includes(image.id)}
      />;
    });

    return (
      <div className='contentContainer '>
        {
          isEmpty ?
            <div className='contentContainer'>
              <Sorting/>
              <EmptyBlock albumId={album.id}/>
            </div>
            :
            <>
              <Sorting gridId={this.setGridType}/>
              
              <div className={'albumContent ' + this.state.gridType} >
                { imagesItem }
              </div>
            </>
        }
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    album: state.albums.albums[props.match.params.id],
    token: state.session.sessionID
  };
};

export default connect(mapStateToProps)(Album);
