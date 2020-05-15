const initialState = {
  loading: true,
  users: '',
  error: null,
  currentUser: false
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
    case 'GET_USER_DATA_START':
      return {
        ...state,
        loading: true
      };
    case 'GET_USER_DATA_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        currentUser: action.payload
      };
    case 'GET_USER_DATA_FAILED':
      return {
        ...state,
        error: action.payload.error
      };
      case 'SKIP_INTRODUCE_START':
      return {
        ...state,
        loading: true
      };
    case 'SKIP_INTRODUCE_SUCCESS':
      return {
        ...state,
        error: null,
        loading: false,
        currentUser: action.payload
      };
    case 'SKIP_INTRODUCE_FAILED':
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}
