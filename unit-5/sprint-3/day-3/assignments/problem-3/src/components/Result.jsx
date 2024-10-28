import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const { score, questions } = useSelector((state) => state.quiz);

  return (
    <div>
      <h2>Result</h2>
      <p>Your score: {score}/{questions.length}</p>
    </div>
  );
};

export default Result;
