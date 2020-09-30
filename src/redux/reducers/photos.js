const initialState = {
  loading: true,
  photos: null,
  error: null
};

export default function photosInfo(state = initialState, action) {
  switch (action.type) {
    case 'GET_PHOTOS_START':
      return {
        ...state,
        loading: true
      };
    case 'GET_PHOTOS_SUCCESS':
      return {
        ...state,
        loading: false,
        photos: action.payload,
        error: null
      };
    case 'GET_PHOTOS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload.err
      };
    default:
      return state;
  }
}
