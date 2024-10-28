import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizQuestions, setAnswer, submitQuiz } from '../redux/actions/quizActions';

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, answers } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuizQuestions());
  }, [dispatch]);

  const handleAnswer = (answer) => {
    dispatch(setAnswer(questions[currentQuestionIndex].id, answer));
  };

  const handleSubmit = () => {
    dispatch(submitQuiz(answers));
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Quiz</h2>
      <p>{questions[currentQuestionIndex].question}</p>
      <button onClick={() => handleAnswer('A')}>A</button>
      <button onClick={() => handleAnswer('B')}>B</button>
      <button onClick={() => handleAnswer('C')}>C</button>
      <button onClick={() => handleAnswer('D')}>D</button>
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleSubmit}>Submit Quiz</button>
      )}
    </div>
  );
};

export default Quiz;
