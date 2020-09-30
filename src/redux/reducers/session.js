const initialState = {
  sessionID: localStorage.getItem('token'),
  isAuthorized: false
};

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case 'SESSION_ID_SET':
      return {
        ...state,
        sessionID: action.payload
      };
    case 'SESSION_ID_VALID':
      return {
        ...state,
        isAuthorized: true
      };
    case 'SESSION_ID_NOT_VALID':
      return {
        ...state,
        isAuthorized: false
      };
    default:
      return state;
  }
}
