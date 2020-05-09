import axios from 'axios';

const fetchUserFullNameStarted = () => ({
  type: 'FETCH_USER_FULL_NAME_STARTED'
});

const fetchUserFullNameSuccessed = user => ({
  type: 'FETCH_USER_FULL_NAME_SUCCESSED',
  payload: user
});

const fetchUserFullNameFailed = error => ({
  type: 'FETCH_USER_FULL_NAME_FAILED',
  payload: error
});

export const fetchUserFullName = () => dispatch => {
  dispatch(fetchUserFullNameStarted());

  const token = localStorage.getItem('token')

  axios
    .post(
      'http://api.memory-lane.ru/db/setAccount',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      }
    )
    .then(res => { 
      console.log(res);
      dispatch(fetchUserFullNameSuccessed(res.data.info))
    })
    .catch(error => dispatch(fetchUserFullNameFailed(error.message)));
};