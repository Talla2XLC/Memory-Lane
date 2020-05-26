import axios from 'axios';

const fetchPhotosStart = () => ({
  type: 'GET_PHOTOS_START'
});

const fetchPhotosSuccess = photos => ({
  type: 'GET_PHOTOS_SUCCESS',
  payload: photos
});

const fetchPhotosFailed = error => ({
  type: 'GET_PHOTOS_FAILED',
  payload: error
});

export const fetchPhotos = () => dispatch => {
  dispatch(fetchPhotosStart());

  console.log('!', this.props);
  console.log('!', this.state);

  const token = localStorage.getItem('token');

  axios
    .post(
      // 'http://api.memory-lane.ru/db/get/images',
      'http://api.memory-lane.ru/get/images',
      {
        // id_album: idAlbum
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      }
    )
    .then(res => dispatch(fetchPhotosSuccess(res.data)))
    .catch(error => dispatch(fetchPhotosFailed(error.message)));
};
