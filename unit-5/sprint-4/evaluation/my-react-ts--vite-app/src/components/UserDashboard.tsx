import React from 'react';
import { useAuth } from '../context/AuthContext';
import BorrowedBooks from './BorrowedBooks';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <BorrowedBooks userId={user?.id} />
    </div>
  );
};

export default UserDashboard;