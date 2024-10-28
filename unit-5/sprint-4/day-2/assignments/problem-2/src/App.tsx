import { Library } from './Library';
import { Genre } from './Book';

const initialBooks = [
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: Genre.Fiction, format: 'Paperback', quantity: 5 },
    { id: 2, title: '1984', author: 'George Orwell', genre: Genre.Fiction, format: 'Hardcover', quantity: 3 },
    { id: 3, title: 'The Da Vinci Code', author: 'Dan Brown', genre: Genre.Mystery, format: 'Ebook', quantity: 7 },
    { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', genre: Genre.NonFiction, format: 'Paperback', quantity: 10 },
];
const library = new Library(initialBooks);

console.log("Library Inventory:");
library.displayBooks();

console.log("\nSearch by Title: '1984'");
const searchResultByTitle = library.searchBookByTitle('1984');
console.log(searchResultByTitle);
console.log("\nSearch by Author: 'Dan Brown'");
const searchResultByAuthor = library.searchBookByAuthor('Dan Brown');
console.log(searchResultByAuthor);
console.log("\nSearch by Genre: 'Fiction'");
const searchResultByGenre = library.searchBookByGenre(Genre.Fiction);
console.log(searchResultByGenre);
console.log("\nUpdating Quantity of 'The Da Vinci Code'");
library.updateQuantity(3, 5);

console.log("\nUpdated Library Inventory:");
library.displayBooks();
