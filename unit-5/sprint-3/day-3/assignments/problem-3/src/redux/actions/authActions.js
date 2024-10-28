import { LOGIN_SUCCESS, LOGOUT } from '../actionTypes';
export const login = (username, password) => {
  return (dispatch) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        dispatch({ type: LOGIN_SUCCESS, payload: { username } });
      } else {
        alert('Invalid credentials');
      }
    }, 1000);
  };
};

export const logout = () => ({ type: LOGOUT });
