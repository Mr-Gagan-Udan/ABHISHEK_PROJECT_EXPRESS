import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
};

const initialState = {
  isVisible: false,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleVisibility = () => {
    dispatch({ type: 'TOGGLE_VISIBILITY' });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleVisibility}>
        Toggle Message
      </button>
      
      {state.isVisible && <h1>Hello, World!</h1>}
    </div>
  );
};

export default App;
