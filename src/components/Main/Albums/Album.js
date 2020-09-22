import React, { Component } from 'react';
import {connect} from 'react-redux';
import Sorting from '../General/Sorting/Sorting';
import AlbumsItem from './PhotoItem';
import './Album.sass';
import EmptyBlock from '../EmptyBlock/EmptyBlock';
import {ReactComponent as GoBack} from 'components/Main/svg/goBack.svg';

class Album extends Component {
  constructor(props) {
    super(props);
    this.setGridType = this.setGridType.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.goBack = this.goBack.bind(this);

    this.state = {
      images: [],
      isEmpty: true,
      gridType: 'bigColView',
      rowItemView: false,
      itemSelected: []
    };
  }

  componentDidMount() {
    if (this.props.album) {
      this.setState({isEmpty: false, images: this.props.album.photo});
    }
  }

  goBack() {
    this.props.history.goBack();
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

  performAction(id) {
    switch (id) {
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
        break;
      default:
        break;
    }
  }

  render() {
    const { isEmpty, images } = this.state;
    const { album, loading } = this.props;

    // console.log(album);

    const imagesItem = images ? images.map(image => {
      return <AlbumsItem
        key={image.id}
        id = {image.id}
        view={this.state.rowItemView ? 'flex-row' : 'flex-column'}
        url={image.content_url} name={image.photo_name}
        author={image.author}
        desc={image.description}
        tags={image.tags}
        persons={image.persons}
        coordinates={image.coordinates}
        gridType={this.state.gridType}
        isDesc={!(this.state.gridType === 'smallRowView' || this.state.gridType === 'noPreview')}
        isImg={this.state.gridType !== 'noPreview'}
        selectId={this.selectImage}
        isSelected={this.state.itemSelected.includes(image.id)}
      />;
    }) : [];

    return (
      loading ? <h1>Загрузка данных</h1> :
        isEmpty ?
          <div className='album-container'>
            <GoBack className='go-back' onClick={this.goBack}/>
            <Sorting
              currentPage='album'
              setGridType={this.setGridType}
              performAction={this.performAction}
            />
            <EmptyBlock />
          </div>
          :
          <div className='album-container'>
            <GoBack className='go-back' onClick={this.goBack}/>
            <h1 className='album-header'>{album.album_name}</h1>
            <Sorting
              currentPage='album'
              setGridType={this.setGridType}
              performAction={this.performAction}
            />
            <div className={'albumContent ' + this.state.gridType} >
              { imagesItem }
            </div>
          </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    album: state.albums.albums.find(album => album.id === props.match.params.id),
    loading: state.albums.loading,
    token: state.session.sessionID
  };
};

export default connect(mapStateToProps)(Album);
