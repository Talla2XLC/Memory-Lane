const addQuerySearch = (queryTransfer) => ({
  type: "ADD_SEARCH_QUERY",
  payload: queryTransfer,
});

export const querySearch = (query) => {
  return (dispatch) => {
    dispatch(addQuerySearch(query));
  };
};
