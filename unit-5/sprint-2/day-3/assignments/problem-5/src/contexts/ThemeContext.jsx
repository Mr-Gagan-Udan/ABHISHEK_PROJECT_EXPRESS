import { createContext, useState } from 'react';

// Create a context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Manage theme state (light/dark)
  const [theme, setTheme] = useState('light');

  // Toggle function to switch themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};