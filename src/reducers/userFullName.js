const initialState = {
  hasFullName: false
};

export default function userFullName(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_FULL_NAME_STARTED':
      return {
        ...state,
      };
    case 'FETCH_USER_FULL_NAME_SUCCESSED':
      return {
        ...state,
        error: null,
        hasFullName: action.payload
      };
    case 'FETCH_USER_FULL_NAME_FAILED':
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}
