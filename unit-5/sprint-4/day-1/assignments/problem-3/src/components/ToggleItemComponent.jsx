import React from 'react';
import useToggleItems from '../hooks/useToggleItems';

const ToggleItemComponent = () => {
  const [currentItem, toggleItem] = useToggleItems(['A', 'B', 'C'], 1);

  return (
    <div>
      <h1>Current Item: {currentItem}</h1>
      <button onClick={toggleItem}>Toggle Item</button>
    </div>
  );
};

export default ToggleItemComponent;
