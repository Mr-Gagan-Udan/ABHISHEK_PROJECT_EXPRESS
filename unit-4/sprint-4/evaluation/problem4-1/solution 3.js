class Book{
    #isbn;
    constructor(title,author,availableCopies,isbn){
        this.title = title;
        this.author = author;
        this.availableCopies = availableCopies;
        this.#isbn = isbn;
    }
    get availableCopies(){
        return this.availableCopies;
    }
    set availableCopies(copies){
        if (copies<0){
            throw new Error('number cannot be negative');
        }
        this.availableCopies = copies;
    }
    #validate(isbn){
        return typeof isbn === 'string' && isbn.length === 13;
    }
    setISBN(isbn){
        if(this.#validate(isbn)){
            this.#isbn = isbn;
        }else{
            throw new Error('invalid isbn');

        }
    }
    getISBN(){
        return this.#isbn;
    }
}


class Library{
    constructor(){
        this.books = []
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(isbn){
        this.books = this.books.filter(book => book.getISBN() !== isbn);

    }
    searchBook(author){
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));

    }
    searchBooktitle(title){
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));

    }
    displayBook(){
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author : ${book.author},AvailableCopies:${book.availableCopies},ISBN:${getISBN()}`);

        });
    }
}


let book1 = new Book('the secret','aasdkhgha', 10, Book.generateISBN());
let book2 = new Book('the habit','asdfasdfb', 11, Book.generateISBN());

let library = new Library();
library.addBook(book1);
library.addBook(book2);

library.displayBook();

console.log('searchfor 1988',library.searchBooktitle('1988'));
console.log("search for aasdkhgha",library.searchBook("aasdkhgha"))



library.removeBook(book2.getISBN());
library.displayBook();