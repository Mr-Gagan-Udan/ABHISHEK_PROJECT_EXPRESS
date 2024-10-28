import { createStore, combineReducers } from 'redux';
import { feedbackReducer } from './reducers/feedbackReducer';

const rootReducer = combineReducers({
  feedback: feedbackReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);