const openAddAlbum = () => ({
  type: 'OPEN_MODAL_ADD_ALBUM'
});

export const modalOpen = (type) => {
  return (dispatch) => {
    switch (type) {
      case 'addAlbum':
        dispatch(openAddAlbum());
        break;
      default:
        break;
    }
  };
};
