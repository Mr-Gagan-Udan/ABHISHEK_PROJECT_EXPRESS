const initialState = {
    bookings: [],
    error: null,
  };
  
  export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
      case 'BOOK_MOVIE_SUCCESS':
        return { ...state, bookings: [...state.bookings, action.payload], error: null };
      case 'BOOK_MOVIE_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }
  