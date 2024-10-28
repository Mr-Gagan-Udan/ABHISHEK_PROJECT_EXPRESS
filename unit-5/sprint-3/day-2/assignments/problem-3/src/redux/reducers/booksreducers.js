const initialState = [];

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.payload];
    case "MARK_AS_READ":
      return state.map((book) =>
        book.id === action.payload ? { ...book, read: true } : book
      );
    case "EDIT_BOOK":
      return state.map((book) =>
        book.id === action.payload.id ? { ...book, ...action.payload.data } : book
      );
    case "DELETE_BOOK":
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export default booksReducer;
