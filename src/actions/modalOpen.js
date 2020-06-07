const openAddAlbum = () => ({
  type: 'OPEN_MODAL_ADD_ALBUM'
});

const openChooseAlbum = () => ({
  type: 'OPEN_MODAL_CHOOSE_ALBUM'
});

export const modalOpen = (type) => {
  return (dispatch) => {
    switch (type) {
      case 'addAlbum':
        dispatch(openAddAlbum());
        break;
      case 'chooseAlbum':
        dispatch(openChooseAlbum());
      default:
        break;
    }
  };
};
