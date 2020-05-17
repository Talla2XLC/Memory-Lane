import axios from 'axios';


const getAlbumsStarted = albums => ({
  type: 'GET_ALBUMS_DATA_STARTED',
  payload: albums
});
const getAlbumsSucces = albums => ({
  type: 'GET_ALBUMS_DATA_SUCCESS',
  payload: albums
});
const getAlbumsFailed = error => ({
  type: 'GET_ALBUMS_DATA_FAILED',
  payload: error
});


export const getAlbums = () => dispatch => {

  dispatch(getAlbumsStarted());
  const token = localStorage.getItem('token');

  axios
    .post(
      'http://api.memory-lane.ru/db/getAlbum',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      }
    )
    .then(res => {
      dispatch(getAlbumsSucces(res.data));
    })
    .catch(error => dispatch(getAlbumsFailed(error.message)));
};
