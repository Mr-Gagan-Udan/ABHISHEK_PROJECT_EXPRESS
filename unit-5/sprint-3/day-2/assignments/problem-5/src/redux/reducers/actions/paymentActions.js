export const bookMovie = (bookingDetails) => async (dispatch) => {
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingDetails),
      });
      const data = await response.json();
  
      if (data.success) {
        dispatch({ type: 'BOOK_MOVIE_SUCCESS', payload: data.booking });
      } else {
        dispatch({ type: 'BOOK_MOVIE_FAILURE', payload: data.message });
      }
    } catch (error) {
      dispatch({ type: 'BOOK_MOVIE_FAILURE', payload: 'Booking failed' });
    }
  };
  