import React from 'react';
import useTimer from '../hooks/useTimer';

const TimerComponent = () => {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h1>Timer</h1>
      <h2>{timer} seconds</h2>
      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
