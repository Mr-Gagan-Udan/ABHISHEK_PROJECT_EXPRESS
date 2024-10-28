const initialState = {
    books: [],
    loading: false,
    error: null,
  };
  
  const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BOOKS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_BOOKS_SUCCESS':
        return {
          ...state,
          loading: false,
          books: action.payload,
        };
      case 'FETCH_BOOKS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'BORROW_BOOK':
        return {
          ...state,
          books: state.books.map(book =>
            book.id === action.payload.id
              ? { ...book, isBorrowed: true }
              : book
          ),
        };
      case 'RETURN_BOOK':
        return {
          ...state,
          books: state.books.map(book =>
            book.id === action.payload.id
              ? { ...book, isBorrowed: false }
              : book
          ),
        };
      default:
        return state;
    }
  };
  
  export default booksReducer;
  