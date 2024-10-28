// src/components/PropsDemo.tsx
import React from 'react';

interface UserProps {
  name: string;
  age: number;
  isAdmin?: boolean; // Optional prop
}

const PropsDemo: React.FC<UserProps> = ({ name, age, isAdmin = false }) => {
  return (
    <div>
      <h2>Props with Interfaces</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Admin Status: {isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
};

export default PropsDemo;
