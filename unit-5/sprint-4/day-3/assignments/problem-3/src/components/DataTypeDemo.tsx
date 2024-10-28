import React from 'react';

const DataTypeDemo: React.FC = () => {
  const name: string = 'John Doe';

  const age: number = 30;

  const isStudent: boolean = false;

  const address: {
    street: string;
    city: string;
    zipCode: number;
  } = {
    street: '123 Main St',
    city: 'Anytown',
    zipCode: 12345,
  };

  let randomValue: any = 'Hello';
  randomValue = 42; 
  return (
    <div>
      <h2>Data Types in TypeScript</h2>
      <p>Name (string): {name}</p>
      <p>Age (number): {age}</p>
      <p>Is Student (boolean): {isStudent ? 'Yes' : 'No'}</p>
      <p>
        Address (object): {address.street}, {address.city}, {address.zipCode}
      </p>
      <p>Random Value (any): {randomValue}</p>
    </div>
  );
};

export default DataTypeDemo;
