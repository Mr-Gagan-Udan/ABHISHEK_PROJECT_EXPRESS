import React from 'react';
import { useDispatch } from 'react-redux';
import { borrowBook, returnBook } from '../actions/bookActions';
import { Button } from '@chakra-ui/react';

const BookCard = ({ book = {} }) => {
  const dispatch = useDispatch();

  const handleBorrow = () => {
    dispatch(borrowBook(book.id));
  };

  const handleReturn = () => {
    dispatch(returnBook(book.id)); 
  };

  const isBorrowed = book.isBorrowed || false;

  return (
    <div>
      <h3>{book.title || 'YOU CAN WIN'}</h3>
      <p>{book.author || 'SHIV KHERA'}</p>
      {isBorrowed ? (
        <Button onClick={handleReturn} bg="red">Return</Button>
      ) : (
        <Button onClick={handleBorrow} bg="green">Borrow</Button>
      )}


    <h3>{book.title || 'To Kill a Mockingbird'}</h3>
      <p>{book.author || 'George Orwell'}</p>
      {isBorrowed ? (
        <Button onClick={handleReturn}  bg="red">Return</Button>
      ) : (
        <Button onClick={handleBorrow} bg="green">Borrow</Button>
      )}


    <h3>{book.title || 'The Great Gatsby'}</h3>
      <p>{book.author ||"F. Scott Fitzgerald"}</p>
      {!isBorrowed ? (
        <Button onClick={handleReturn} bg="red">Return</Button>
      ) : (
        <Button onClick={handleBorrow} bg="green">Borrow</Button>
      )}
    </div>
  );
};

export default BookCard;