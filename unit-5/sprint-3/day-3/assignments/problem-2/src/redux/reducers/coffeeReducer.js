import { FETCH_COFFEES_SUCCESS, FETCH_COFFEES_ERROR } from '../actions/coffeeActions';

const initialState = {
  coffees: [],
  error: null,
};

export default function coffeeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COFFEES_SUCCESS:
      return { ...state, coffees: action.payload };
    case FETCH_COFFEES_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
