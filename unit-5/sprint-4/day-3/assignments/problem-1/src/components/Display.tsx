import React from 'react';

interface TimerDisplayProps {
    time: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time }) => {
    return <h1>Timer: {time} seconds</h1>;
};

export default TimerDisplay;
