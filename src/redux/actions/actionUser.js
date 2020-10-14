import axios from "axios";

const userGetStarted = () => ({
  type: "USER_GET_STARTED",
});

const userGetSuccess = (users) => ({
  type: "USER_GET_SUCCESS",
  payload: users,
});

const userGetFailed = (err) => ({
  type: "USER_GET_FAILED",
  payload: {
    err,
  },
});

export const getUsers = (lim = "") => {
  return (dispatch, getState) => {
    dispatch(userGetStarted());

    axios
      .post(
        "http://api.memory-lane.ru/db/getUsers/all",
        {
          limit: lim,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch(userGetSuccess(res.data));
      })
      .catch((err) => {
        dispatch(userGetFailed(err.message));
      });
  };
};
