const closeAddAlbum = () => ({
  type: 'CLOSE_MODAL_ADD_ALBUM'
});

export const modalClose = type => {
  return (dispatch) => {
    switch (type) {
      case 'addAlbum':
        dispatch(closeAddAlbum());
        break;
      default:
        break;
    }
  };
};
