// src/components/EnumDemo.tsx
import React from 'react';

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

const EnumDemo: React.FC = () => {
  const favoriteColor: Color = Color.Green;

  return (
    <div>
      <h2>Enums in TypeScript</h2>
      <p>Favorite Color: {favoriteColor}</p>
    </div>
  );
};

export default EnumDemo;
