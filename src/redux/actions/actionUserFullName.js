import axios from "axios";

const fetchUserStarted = () => ({
  type: "GET_USER_DATA_START",
});

const fetchUserSuccess = (user) => ({
  type: "GET_USER_DATA_SUCCESS",
  payload: user,
});

const fetchUserFailed = (error) => ({
  type: "GET_USER_DATA_FAILED",
  payload: error,
});

export const fetchUserFullName = () => (dispatch) => {
  dispatch(fetchUserStarted());

  const token = localStorage.getItem("token");

  axios
    .post(
      "http://api.memory-lane.ml/db/setAccount",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(fetchUserSuccess(res.data));
    })
    .catch((error) => dispatch(fetchUserFailed(error.message)));
};
