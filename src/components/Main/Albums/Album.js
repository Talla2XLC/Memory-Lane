import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Sorting from '../Sorting';
import AlbumsItem from './PhotoItem';
import {ButtonContainer} from '../Button';
import './Album.sass';

class Album extends Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadFileHandler = this.uploadFileHandler.bind(this);
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

  uploadImage() {
    const { album, token } = this.props;
    const { imagesToUpload } = this.state;
    const data = new FormData();
    for (let x = 0; x < imagesToUpload.length; x++) {
      data.append('images[]', this.state.imagesToUpload[x]);
    }
    data.append('id_album', album.id);
    
    if (imagesToUpload.length > 0)
      axios
        .post(
          'http://api.memory-lane.ru/upload/images',
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `${token}`
            }
          })
        .then(res => {
          if (res.data.result) {		// res.status === 200
            this.getImages();
          } else {	// res.status !== 200
            this.setState({ errorMessage: res.data });
            alert(`${res.data.error}`);
          }
        })
        .catch(error => console.error(error));
  }

  uploadFileHandler(event) {
    event.persist();
    this.setState({
      imagesToUpload: event.target.files
    });
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


            <div className='addPhotoWrap'>

              <div className='head1 albumTitle'>
            Загрузка фотографий
              </div>
              <div className='albumName'>
                <div className='text1 albumDesc'>
            Альбом для загрузки фото
                </div>
                <div className='text1'>
            Новый альбом
                </div>
              </div>

              <div className='addPhoto'> 
                <div className='addPhoto__border' onChange={this.uploadFileHandler}>
                  <input 
                    className='input'
                    type='file' 
                    name='file' 
                    multiple onChange={this.uploadFileHandler}/>
                  <div className='addPhoto__border_text head3'>Перетащите фотографию сюда
                  </div>
                </div>
              </div>

              <div className='choicePhoto'>
                <div className='choicePhoto__line'>
                  <div className='choicePhoto__line_lineLeft'/>
                  <span className='text1'>или</span>
                  <div className='choicePhoto__line_lineRight'/>
                </div>
                <div className='text1'>Выберите файлы со своего компьютера</div>
                <ButtonContainer className='choicePhoto__button' onClick={this.uploadImage}>Выбрать</ButtonContainer>
              </div>
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
