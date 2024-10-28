import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, markAsRead, deleteBook } from "./redux/actions";

const App = () => {
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const book = { ...newBook, id: Date.now(), read: false };
    dispatch(addBook(book));
    setNewBook({ title: "", author: "", genre: "" });
  };


  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesGenre = filters.genre === "All" || book.genre === filters.genre;
    const matchesStatus =
      filters.status === "All" ||
      (filters.status === "Read" && book.read) ||
      (filters.status === "Unread" && !book.read);
  
    return matchesSearch && matchesGenre && matchesStatus;
  });
  

  return (
    <div>
      <h1>Book Library</h1>
      
      <h2>Add New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <input
        type="text"
        placeholder="Genre"
        value={newBook.genre}
        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
      />
      <button onClick={handleAddBook}>Add Book</button>

      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - {book.genre}{" "}
            {book.read ? "(Read)" : "(Unread)"}
            <button onClick={() => dispatch(markAsRead(book.id))}>Mark as Read</button>
            <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
