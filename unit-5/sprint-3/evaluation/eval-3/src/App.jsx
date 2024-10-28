import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import BookCard from './components/BookCard';
import Admin from './components/Admin';

function App() {
  return (
    <Routes>
      <Route path="/adminn" element={<Admin/>} />
      <Route path="/admin" element={<AdminDashboard/>} />
      <Route path="/" element={<BookCard/>}/>
    </Routes>
  
  );
}

export default App;