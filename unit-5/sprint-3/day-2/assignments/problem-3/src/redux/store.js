import { createStore, combineReducers } from "redux";
import booksReducer from "./reducers/booksReducer";
import filtersReducer from "./reducers/filtersReducer";
const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
});
const store = createStore(rootReducer);

export default store;
