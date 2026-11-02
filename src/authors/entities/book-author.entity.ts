import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Book } from '../../books/entites/books.entity.js';
import { Author } from './author.entity.js';

@Entity({ name: 'book_authors' })
export class BookAuthor {
  @PrimaryColumn({ name: 'book_id', type: 'uuid' })
  bookId: string;

  @PrimaryColumn({ name: 'author_id', type: 'uuid' })
  authorId: string;

  @ManyToOne(() => Book, (book) => book.bookAuthors)
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(() => Author, (author) => author.bookAuthors)
  @JoinColumn({ name: 'author_id' })
  author: Author;
}
