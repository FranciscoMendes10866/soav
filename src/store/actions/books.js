export const addBook = (data) => (dispatch) => {
  dispatch({
    type: "ADD_BOOK",
    payload: {...data, id: Math.floor(Math.random() * 100)},
  });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_BOOK",
    payload: id,
  });
};

export const updateBook = (data) => (dispatch) => {
  dispatch({
    type: "UPDATE_BOOK",
    payload: data,
  });
};
