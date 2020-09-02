const initialState = {
  query: null
};

export default function searchQueryInfo(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SEARCH_QUERY':
      return {
        ...state,
        query: action.payload
      };
    default:
      return state;
  }
}
