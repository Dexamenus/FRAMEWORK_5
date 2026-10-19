import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entites/books.entity.js';
import { UpdateBooksDto } from './dto/update-books-dto.js';

@Injectable()
export class BooksService {
    private readonly books: Book[] = [];

    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {}

    // menampilkan seluruh data buku
    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find({
            order: {
                title: 'ASC',
            },
        });
    }

    // menyimpan data ke database
    async create(inputbook: Book): Promise<Book> {
        const newBook: Book = this.bookRepository.create(inputbook);
        // menyimpan data buku baru ke database
        return await this.bookRepository.save(newBook);
    }

    // menampilkan data buku berdasarkan ID
    async findById(id: string): Promise<Book> {
        const book = await this.bookRepository.findOne({
            where: { id },
        });
        if (!book) {
            throw new Error(`Book with ID ${id} not found`);
        }
        return book;
    }

    // mengupdate data buku berdasarkan ID
    async update(id: string, updatedBook: UpdateBooksDto): Promise<Book | undefined> {
        const book = await this.bookRepository.findOne({
            where: { id }
        });
        if (!book) {
            return undefined;
        }
        Object.assign(book, updatedBook);
        return await this.bookRepository.save(book);
    }

    // menghapus data buku berdasarkan ID
    async delete(id: string): Promise<boolean> {
        const book = await this.bookRepository.findOne({
            where: { id }
        });
        if (!book) {
            return false;
        }
        await this.bookRepository.remove(book);
        return true;
    }
}

           