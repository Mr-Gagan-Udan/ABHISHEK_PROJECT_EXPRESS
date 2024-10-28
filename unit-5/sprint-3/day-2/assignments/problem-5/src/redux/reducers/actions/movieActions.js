export const fetchMovies = (query) => async (dispatch) => {
    dispatch({ type: 'FETCH_MOVIES_REQUEST' });
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`);
      const data = await response.json();
      
      dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: data.results });
    } catch (error) {
      dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error.message });
    }
  };
  