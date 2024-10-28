import { FETCH_QUIZ_SUCCESS, SET_ANSWER, SUBMIT_QUIZ, QUIZ_COMPLETED } from './actionTypes';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  score: 0,
  completed: false,
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZ_SUCCESS:
      return { ...state, questions: action.payload };
    case SET_ANSWER:
      return { 
        ...state, 
        answers: [...state.answers, action.payload],
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case SUBMIT_QUIZ:
      return { 
        ...state, 
        score: action.payload,
        completed: true,
      };
    case QUIZ_COMPLETED:
      return { ...state, completed: true };
    default:
      return state;
  }
}
