const closeAddAlbum = () => ({
  type: 'CLOSE_MODAL_ADD_ALBUM'
});

const closeChooseAlbum = () => ({
  type: 'CLOSE_MODAL_CHOOSE_ALBUM'
});

export const modalClose = type => {
  return (dispatch) => {
    switch (type) {
      case 'addAlbum':
        dispatch(closeAddAlbum());
        break;
      case 'chooseAlbum':
        dispatch(closeChooseAlbum());
        break;
      default:
        break;
    }
  };
};
