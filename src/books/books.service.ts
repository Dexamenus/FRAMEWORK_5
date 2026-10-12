import { Injectable } from '@nestjs/common';
import { Book } from './entites/books.entity.js';
import { UpdateBooksDto } from './dto/update-books-dto.js';


@Injectable()
export class BooksService {
    private books: Book[] = [
        {
            id: 1,
            title: 'The Great Gatsby',                
            author: 'F. Scott Fitzgerald',
            isbn: '978-0-7432-7356-5',
            publishedYear: 1925,
            isAvailable: true
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            publishedYear: 1960,
            isAvailable: false
        },
        {
            id: 3,
            title: '1984',
            author: 'George Orwell',
            isbn: '978-0-452-28423-4',
            publishedYear: 1948,
            isAvailable: true
        }
    ];

    // menampilkan seluruh data buku
    findAll(): Book[] {
        return this.books;
    }
    // menyimpan data ke database
    create(inputbook: Book): Book {
        const newBook: Book = {
            id: this.books.length + 1,
            title: inputbook.title,
            author: inputbook.author,
            isbn: inputbook.isbn,
            publishedYear: inputbook.publishedYear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }
    // menampilkan data buku berdasarkan ID
    findById(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }
    // mengupdate data buku berdasarkan ID
    update(id: number, updatedBook: UpdateBooksDto): Book | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook };
            return this.books[bookIndex];
        }
        return undefined;
    }
    // menghapus data buku berdasarkan ID
    delete(id: number): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return true;
        }
        return false;
    }}
