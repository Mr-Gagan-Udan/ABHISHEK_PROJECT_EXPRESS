export const ADD_FEEDBACK = 'ADD_FEEDBACK';
export const SET_FILTER = 'SET_FILTER';

interface AddFeedbackAction {
  type: typeof ADD_FEEDBACK;
  payload: Feedback;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: FilterCriteria;
}

export type FeedbackActionTypes = AddFeedbackAction | SetFilterAction;
