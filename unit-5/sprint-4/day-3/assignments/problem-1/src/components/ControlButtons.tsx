import React from 'react';

interface ControlButtonsProps {
    isActive: boolean;
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ isActive, onStart, onStop, onReset }) => {
    return (
        <div>
            {isActive ? (
                <button onClick={onStop}>Stop</button>
            ) : (
                <button onClick={onStart}>Start</button>
            )}
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default ControlButtons;
