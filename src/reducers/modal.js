const initialState = {
  addAlbumOpened: false
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_MODAL_ADD_ALBUM':
      return {
        ...state,
        addAlbumOpened: true
      };
    case 'CLOSE_MODAL_ADD_ALBUM':
      return {
        ...state,
        addAlbumOpened: false
      };
    default:
      return state;
  }
}

