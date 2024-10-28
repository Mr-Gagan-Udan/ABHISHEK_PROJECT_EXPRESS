import { ADD_FEEDBACK, SET_FILTER, FeedbackActionTypes } from '../actions/feedbackActions';

interface FeedbackState {
  feedbacks: Feedback[];
  filter: FilterCriteria;
}

const initialState: FeedbackState = {
  feedbacks: [],
  filter: { rating: null, date: null },
};

export function feedbackReducer(state = initialState, action: FeedbackActionTypes): FeedbackState {
  switch (action.type) {
    case ADD_FEEDBACK:
      return { ...state, feedbacks: [...state.feedbacks, action.payload] };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
