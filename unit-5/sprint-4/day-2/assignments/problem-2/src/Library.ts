import { Book, Genre } from './Book';

// Interface for LibraryInventory
interface LibraryInventory {
    books: Book[];
    searchBookByTitle(title: string): Book | undefined;
    searchBookByAuthor(author: string): Book[];
    searchBookByGenre(genre: Genre): Book[];
    updateQuantity(bookId: number, quantity: number): void;
}

export class Library implements LibraryInventory {
    books: Book[];

    constructor(books: Book[]) {
        this.books = books;
    }

    searchBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    }

    searchBookByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());
    }

    searchBookByGenre(genre: Genre): Book[] {
        return this.books.filter(book => book.genre === genre);
    }

    updateQuantity(bookId: number, quantity: number): void {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            book.quantity = quantity;
        }
    }

    displayBooks(): void {
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author} - Genre: ${book.genre} - Quantity: ${book.quantity}`);
        });
    }
}
