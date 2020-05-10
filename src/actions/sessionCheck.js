import axios from 'axios';

const sessionValid = () => ({
  type: 'SESSION_ID_VALID'
});

const sessionNotValid = () => ({
  type: 'SESSION_ID_NOT_VALID'
});

export const sessionCheck = (sessionID) => {
  console.log(sessionID);
  return (dispatch) => {
    axios
      .post(
        'http://api.memory-lane.ru/checkToken',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${sessionID}`
          }
        })
      .then(res => {
        if (res.data.result) {	// res.status === 200
          dispatch(sessionValid());

        } else {	// res.status !== 200
          localStorage.removeItem('token');
          dispatch(sessionNotValid());
        }
      })
      .catch(error => console.error(error));
  };
};
