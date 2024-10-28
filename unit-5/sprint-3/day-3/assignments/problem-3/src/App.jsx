import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        {isAuthenticated && <Route path="/quiz" element={<Quiz />} />}
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
