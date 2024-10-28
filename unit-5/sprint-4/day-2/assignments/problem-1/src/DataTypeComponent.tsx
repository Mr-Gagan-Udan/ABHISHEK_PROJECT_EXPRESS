import React from "react";

const DataTypeComponent: React.FC = () => {
    const age: number = 30;
    const name: string = "Alice";
    const isStudent: boolean = false;
    const scores: number[] = [85, 90, 78];
    const person: [string, number] = ["John", 35];
    enum Status {
        Active,
        Inactive,
        Suspended
    }
    const currentStatus: Status = Status.Active;

    let randomValue: any = "Hello";
    randomValue = 42;

    return (
        <div>
            <h3>Data Types</h3>
            <p>Name: {name}, Age: {age}, Is Student: {isStudent.toString()}</p>
            <p>Scores: {scores.join(", ")}</p>
            <p>Person: {person[0]} is {person[1]} years old</p>
            <p>Status: {Status[currentStatus]}</p>
            <p>Random Value: {randomValue}</p>
        </div>
    );
};

export default DataTypeComponent;
