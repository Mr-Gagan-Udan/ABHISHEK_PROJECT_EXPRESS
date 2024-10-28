import React, { useState, useEffect, useRef } from 'react';
import { fetchBooks } from '../api/bookApi';
import BookCard from './BookCard';
import useDebounce from '../hooks/useDeBounce';
import { Book } from '../types/Book';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1); 
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true); 

  const observer = useRef<IntersectionObserver | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      try {
        const fetchedBooks = await fetchBooks(debouncedSearchTerm, page); 
        setBooks((prevBooks) => [...prevBooks, ...fetchedBooks]);
        setHasMore(fetchedBooks.length > 0); 
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [debouncedSearchTerm, page]);

  useEffect(() => {
    const lastBookElement = document.querySelector('.book-card:last-child');

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        setPage((prevPage) => prevPage + 1); 
      }
    }, { threshold: 1 });

    if (lastBookElement) observer.current.observe(lastBookElement);

    return () => observer.current?.disconnect();
  }, [books, loading, hasMore]);

  return (
    <div>
      <h1>Book List</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && !loading && <p>No more books to load.</p>}
    </div>
  );
};

export default BookList;