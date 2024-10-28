const initialState = {
    users: [],
    bannedUsers: [],
    isLoading: false,
    error: null,
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
        return { ...state, isLoading: true };
      case 'FETCH_USERS_SUCCESS':
        return { ...state, isLoading: false, users: action.payload };
      case 'BAN_USER':
        return { 
          ...state, 
          bannedUsers: [...state.bannedUsers, action.payload] 
        };
      case 'FETCH_USERS_FAILURE':
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default usersReducer;