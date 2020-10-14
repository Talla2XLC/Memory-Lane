const initialState = {
  loading: true,
  stories: "",
  error: null,
};

export default function storiesInfo(state = initialState, action) {
  switch (action.type) {
    case "GET_STORIES_START":
      return {
        ...state,
        loading: true,
        // stories: []
      };
    case "GET_STORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthorized: true, // Not sure about this
        stories: action.payload,
        error: null,
      };
    case "GET_STORIES_FAILED":
      return {
        ...state,
        loading: false,
        isAuthorized: false, // Not sure about this
        error: action.payload.error,
      };
    default:
      return state;
  }
}
