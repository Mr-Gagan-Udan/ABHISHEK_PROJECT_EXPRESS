import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import MyComponent from './MyComponent';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="App">
          <MyComponent />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;