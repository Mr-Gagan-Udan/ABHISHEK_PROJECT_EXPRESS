import React from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchBooks } from '../api/bookApi'; 
import { Book } from '../types/Book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { user } = useAuth();

  const handleBorrow = async () => {
    if (user) {
      await fetchBooks(user.id, book.id);
    }
  };

  const handleReturn = async () => {
    if (user) {
      await fetchBooks(user.id, book.id);
    }
  };

  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Genre: {book.genre}</p>
      <button onClick={book.isBorrowed ? handleReturn : handleBorrow}>
        {book.isBorrowed ? 'Return' : 'Borrow'}
      </button>
    </div>
  );
};

export default BookCard;