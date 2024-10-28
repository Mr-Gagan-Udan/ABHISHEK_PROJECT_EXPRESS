import { useState, useEffect, useRef } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0);  
  const [isRunning, setIsRunning] = useState(false); 
  const intervalRef = useRef(null);  
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };
  const resetTimer = () => {
    stopTimer(); 
    setTimer(0); 
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return {
    timer,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useTimer;
