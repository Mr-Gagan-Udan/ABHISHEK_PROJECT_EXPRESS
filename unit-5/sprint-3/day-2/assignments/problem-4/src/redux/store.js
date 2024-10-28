import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Initial state
const initialState = {
  loading: false,
  error: false,
  footballMatches: [],
  favorites: [],
};

// Football match reducer
function footballReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MATCHES_REQUEST":
      return { ...state, loading: true, error: false };
    case "FETCH_MATCHES_SUCCESS":
      return { ...state, loading: false, footballMatches: action.payload };
    case "FETCH_MATCHES_FAILURE":
      return { ...state, loading: false, error: true };
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (match) => match.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  footballData: footballReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
