const initialState = {
  addAlbumOpened: false,
  chooseAlbumOpened: false
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
    case 'OPEN_MODAL_CHOOSE_ALBUM':
      return {
        ...state,
        chooseAlbumOpened: true
      };
    case 'CLOSE_MODAL_CHOOSE_ALBUM':
      return {
        ...state,
        chooseAlbumOpened: false
      };
    default:
      return state;
  }
}

