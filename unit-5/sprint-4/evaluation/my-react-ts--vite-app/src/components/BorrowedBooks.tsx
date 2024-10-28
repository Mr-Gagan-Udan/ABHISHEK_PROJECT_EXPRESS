import React from 'react';
import { useAuth } from '../context/AuthContext';

const BorrowedBooks: React.FC<{ userId: string | undefined }> = ({ userId }) => {
  const { user } = useAuth();

  if (!user || !user.BorrowedBooks.length) {
    return <p>No borrowed books.</p>;
  }

  return (
    <div>
      <h2>Your Borrowed Books:</h2>
      <ul>
        {user.BorrowedBooks.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;