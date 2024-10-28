import React, { useState, useEffect } from 'react';
import TimerDisplay from './Display';
import ControlButtons from './ControlButtons';

const TimerApp: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0); // State to track the seconds
    const [isActive, setIsActive] = useState<boolean>(false); // State to check if timer is active

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval as NodeJS.Timeout);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, seconds]);

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div>
            <TimerDisplay time={seconds} />
            <ControlButtons 
                isActive={isActive} 
                onStart={startTimer} 
                onStop={stopTimer} 
                onReset={resetTimer} 
            />
        </div>
    );
};

export default TimerApp;
