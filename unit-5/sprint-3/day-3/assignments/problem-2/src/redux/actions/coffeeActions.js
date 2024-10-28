import axios from 'axios';
export const FETCH_COFFEES_SUCCESS = 'FETCH_COFFEES_SUCCESS';
export const FETCH_COFFEES_ERROR = 'FETCH_COFFEES_ERROR';
export const fetchCoffees = (sortOrder = 'asc') => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.sampleapis.com/coffee/hot`);
      const sortedCoffees = response.data.sort((a, b) => {
        if (sortOrder === 'asc') return a.title.localeCompare(b.title);
        else return b.title.localeCompare(a.title);
      });
      dispatch({
        type: FETCH_COFFEES_SUCCESS,
        payload: sortedCoffees,
      });
    } catch (error) {
      dispatch({
        type: FETCH_COFFEES_ERROR,
        payload: error.message,
      });
    }
  };
};
