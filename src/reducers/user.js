import axios from 'axios';

function getUsers(limit) {
  axios
    .post(
      'http://api.memory-lane.ru/db/getUsers/all',
      {
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(response => {
      let usersArr = response.data.result[0];
      return usersArr;
    });
}

const initialState = {
  user: getUsers(100)
};

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.payload};
    default:
      return state;
  }
}
