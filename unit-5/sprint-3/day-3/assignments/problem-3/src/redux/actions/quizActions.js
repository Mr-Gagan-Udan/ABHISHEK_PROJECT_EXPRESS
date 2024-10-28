import axios from 'axios';
import { FETCH_QUIZ_SUCCESS, SET_ANSWER, SUBMIT_QUIZ } from '../actionTypes';

export const fetchQuizQuestions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz');
      dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data.questions });
    } catch (error) {
      console.error('Error fetching quiz:', error);
    }
  };
};

export const setAnswer = (questionId, answer) => ({
  type: SET_ANSWER,
  payload: { questionId, answer },
});

export const submitQuiz = (answers) => {
  return (dispatch, getState) => {
    const { questions } = getState().quiz;
    let score = 0;

    answers.forEach((answer, index) => {
      if (questions[index].correctAnswer === answer.answer) {
        score += 1;
      }
    });

    dispatch({ type: SUBMIT_QUIZ, payload: score });
  };
};
