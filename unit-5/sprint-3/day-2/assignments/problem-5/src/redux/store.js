import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import movieReducer from './reducers/movieReducer';
import bookingReducer from './reducers/bookingReducer';
import watchlistReducer from './reducers/watchlistReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
  watchlist: watchlistReducer,
  booking: bookingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
