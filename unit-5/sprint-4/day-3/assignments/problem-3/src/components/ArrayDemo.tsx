import React from 'react';

const ArrayDemo: React.FC = () => {
  const fruits: string[] = ['Apple', 'Banana', 'Cherry'];

  const numbers: Array<number> = [1, 2, 3, 4, 5];

  interface Person {
    id: number;
    name: string;
  }

  const people: Person[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  return (
    <div>
      <h2>Arrays and Lists</h2>
      <h3>Fruits:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h3>Numbers:</h3>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>

      <h3>People:</h3>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.id}: {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayDemo;
