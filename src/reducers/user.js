const initialState = {
  loading: true,
  users: '',
  error: null
};

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case 'USER_GET_STARTED':
      return {
        ...state,
        loading: true
      };
    case 'USER_GET_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload
      };
    case 'USER_GET_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload.err
      };
    default:
      return state;
  }
}
