import React from "react";

const FunctionComponent: React.FC = () => {
    const greetUser = (name: string, age: number): string => {
        return `Hello, ${name}. You are ${age} years old.`;
    };

    const welcomeMessage = (name: string, message?: string): string => {
        return message ? `${message}, ${name}` : `Welcome, ${name}`;
    };

    const calculateSum = (a: number, b: number): number => {
        return a + b;
    };

    return (
        <div>
            <h3>Functions</h3>
            <p>{greetUser("Alice", 28)}</p>
            <p>{welcomeMessage("John")}</p>
            <p>Sum: {calculateSum(10, 15)}</p>
        </div>
    );
};

export default FunctionComponent;
