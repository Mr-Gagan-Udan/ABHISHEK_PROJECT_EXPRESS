const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isAuthenticated: true, user: action.payload, error: null };
      case 'LOGIN_FAILURE':
      case 'SIGNUP_FAILURE':
        return { ...state, error: action.payload };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, user: null };
      default:
        return state;
    }
  }
  