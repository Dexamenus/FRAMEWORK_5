import * as typeorm from 'typeorm';
import { Category } from '../../categories/entites/categories.entity.js';
import { Publisher } from '../../publishers/entities/publisher.entity.js';
import { BookAuthor } from '../../authors/entities/book-author.entity.js';
import { OrderItem } from '../../orders/entities/order-item.entity.js';

@typeorm.Entity({ name: 'books' })
export class Book {
  @typeorm.PrimaryGeneratedColumn('uuid')
  id: string;

  @typeorm.Column({ type: 'varchar', length: 30 })
  title: string;

  @typeorm.Column({ type: 'varchar', length: 25 })
  author: string;

  @typeorm.Column({ type: 'varchar', length: 45, unique: true })
  isbn: string;

  @typeorm.Column({ type: 'int', default: 0 })
  publishedYear: number;

  @typeorm.Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @typeorm.Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  price: number;

  @typeorm.Column({ type: 'int', default: 0 })
  stock: number;

  @typeorm.ManyToOne(() => Category, (category) => category.books, { nullable: true })
  @typeorm.JoinColumn({ name: 'category_id' })
  category: Category;

  @typeorm.ManyToOne(() => Publisher, (publisher) => publisher.books, { nullable: true })
  @typeorm.JoinColumn({ name: 'publisher_id' })
  publisher: Publisher;

  @typeorm.OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.book)
  bookAuthors: BookAuthor[];

  @typeorm.OneToMany(() => OrderItem, (orderItem: OrderItem) => orderItem.book)
  orderItems: typeorm.Relation<OrderItem[]>;

  @typeorm.CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @typeorm.UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @typeorm.DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date | null;
}
