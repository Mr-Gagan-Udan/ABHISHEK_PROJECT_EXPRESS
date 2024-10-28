export const fetchMatches = () => async (dispatch) => {
    dispatch({ type: "FETCH_MATCHES_REQUEST" });
  
    try {
      const response = await fetch("https://jsonmock.hackerrank.com/api/football_matches?page=2");
      const data = await response.json();
      
      dispatch({
        type: "FETCH_MATCHES_SUCCESS",
        payload: data.data, 
      });
    } catch (error) {
      dispatch({
        type: "FETCH_MATCHES_FAILURE",
      });
    }
  };
  
  export const addToFavorites = (match) => ({
    type: "ADD_TO_FAVORITES",
    payload: match,
  });
  
  export const removeFromFavorites = (id) => ({
    type: "REMOVE_FROM_FAVORITES",
    payload: id,
  });
  