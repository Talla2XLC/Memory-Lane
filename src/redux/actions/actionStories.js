import axios from "axios";

const fetchStoriesStart = () => ({
  type: "GET_STORIES_START",
});

const fetchStoriesSuccess = (stories) => ({
  type: "GET_STORIES_SUCCESS",
  payload: stories,
});

const fetchStoriesFailed = (error) => ({
  type: "GET_STORIES_FAILED",
  payload: error,
});

export const fetchStories = () => (dispatch) => {
  dispatch(fetchStoriesStart());

  const token = localStorage.getItem("token");

  axios
    .post(
      "http://api.memory-lane.ml/db/getHistory",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
    .then((res) => dispatch(fetchStoriesSuccess(res.data)))
    .catch((error) => dispatch(fetchStoriesFailed(error.message)));
};
