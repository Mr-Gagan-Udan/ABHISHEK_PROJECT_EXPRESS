export enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Mystery = "Mystery",
    Thriller = "Thriller",
}

export type BookFormat = "Paperback" | "Hardcover" | "Ebook";

export interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    format: BookFormat;
    quantity: number;
}
