// src/App.tsx
import React from 'react';
import DataTypeDemo from './components/DataTypeDemo';
import ArrayDemo from './components/ArrayDemo';
import EnumDemo from './components/EnumDemo';
import PropsDemo from './components/PropsDemo';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>TypeScript React Demo</h1>
      <DataTypeDemo />
      <hr />
      <ArrayDemo />
      <hr />
      <EnumDemo />
      <hr />
      <PropsDemo name="John Doe" age={25} />
      <PropsDemo name="Jane Smith" age={30} isAdmin />
    </div>
  );
};

export default App;
