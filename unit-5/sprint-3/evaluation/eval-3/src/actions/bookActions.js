export const fetchBooks = () => async dispatch => {
    dispatch({ type: 'FETCH_BOOKS_REQUEST' });
  
    try {
      const response = await fetch('https://masai-book-library-default-rtdb.firebaseio.com/.json'); 
      const data = await response.json();
      dispatch({ type: 'FETCH_BOOKS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_BOOKS_FAILURE', payload: error });
    }
  };
  
  export const borrowBook = (bookId) => {
    return {
      type: 'BORROW_BOOK',
      payload: { id: bookId }
    };
  };
  
  export const returnBook = (bookId) => {
    return {
      type: 'RETURN_BOOK',
      payload: { id: bookId }
    };
  };


