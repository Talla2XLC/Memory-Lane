const setSessionID = sessionID => ({
  type: 'SESSION_ID_SET',
  payload: sessionID
});

export const setSession = (id) => {
  return (dispatch) => {
    dispatch(setSessionID(id));
    return Promise.resolve();
  };
};
