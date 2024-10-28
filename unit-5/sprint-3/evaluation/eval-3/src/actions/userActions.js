export const fetchUsers = () => async dispatch => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
  
    try {
      const response = await fetch('FIREBASE_API_URL/users'); 
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: error });
    }
  };
  
export const banUser = (userId) => {
    return {
        type: 'BAN_USER',
        payload: userId
    };
};