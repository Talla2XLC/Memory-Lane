import axios from 'axios';

const getPersonsStarted = persons => ({
  type: 'GET_PERSONS_DATA_STARTED',
  payload: persons
});
const getPersonsSucces = persons => ({
  type: 'GET_PERSONS_DATA_SUCCESS',
  payload: persons
});
const getPersonsFailed = error => ({
  type: 'GET_PERSONS_DATA_FAILED',
  payload: error
});
export const setIco = ico => ({
  type: 'SET_ICO',
  payload: ico
});

export const getPersons = () => dispatch => {
  dispatch(getPersonsStarted());
  const token = localStorage.getItem('token');
  axios
    .post(
      'http://api.memory-lane.ru/db/getPerson',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      }
    )
    .then(res => {
      dispatch(getPersonsSucces(res.data));
    })
    .catch(error => dispatch(getPersonsFailed(error)));
};

