import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order_entity.js';
import { Book } from '../../books/entites/books.entity.js';

@Entity({ name: 'order_items' })
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order, (order) => order.orderItems)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Book, (book) => book.orderItems)
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @Column({ type: 'int' })
  quantity: number;

  // Snapshot harga saat transaksi — bukan referensi ke books.price
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: number;
}
