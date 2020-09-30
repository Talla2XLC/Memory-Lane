const initialState = {
  loading: true,
  albums: '',
  error: null
};

export default function albumsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALBUMS_DATA_STARTED':
      return {
        ...state,
        loading: true,
        albums: []
      };
    case 'GET_ALBUMS_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        albums: action.payload

      };
    case 'GET_ALBUMS_DATA_FAILED':
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
}

