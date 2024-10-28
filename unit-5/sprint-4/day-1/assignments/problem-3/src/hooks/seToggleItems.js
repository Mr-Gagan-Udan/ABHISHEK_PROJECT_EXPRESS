import { useState } from 'react';

const useToggleItems = (initialItems, initialPosition = 0) => {
  const validPosition = Math.max(0, Math.min(initialPosition, initialItems.length - 1));
  
  const [currentIndex, setCurrentIndex] = useState(validPosition); 
  const toggleState = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % initialItems.length;
    });
  };

  return [initialItems[currentIndex], toggleState];
};

export default useToggleItems;
