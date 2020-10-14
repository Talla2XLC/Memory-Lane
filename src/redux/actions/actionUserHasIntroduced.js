import axios from "axios";

const askedToIntroduceStarted = () => ({
  type: "SKIP_INTRODUCE_START",
});

const askedToIntroduceSucess = (user) => ({
  type: "SKIP_INTRODUCE_SUCCESS",
  payload: user,
});

const askedToIntroduceFailed = (error) => ({
  type: "SKIP_INTRODUCE_FAILED",
  payload: error,
});

export const askedToIntroduce = () => (dispatch) => {
  dispatch(askedToIntroduceStarted());

  const token = localStorage.getItem("token");

  axios
    .post(
      "http://api.memory-lane.ru/db/setAccount",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(askedToIntroduceSucess(res.data));
    })
    .catch((error) => dispatch(askedToIntroduceFailed(error.message)));
};
