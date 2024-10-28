import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; 
import usersReducer from './reducers/usersReducer';
import booksReducer from './reducers/booksReducer';

const store = configureStore({
  reducer: {
    users: usersReducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
