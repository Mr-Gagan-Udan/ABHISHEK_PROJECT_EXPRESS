import React from 'react';
import { useDispatch } from 'react-redux';

const ExampleComponent = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT', payload: { amount: 1 } });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT', payload: { amount: 1 } });
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default ExampleComponent;
