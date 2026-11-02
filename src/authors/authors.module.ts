import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity.js';
import { BookAuthor } from './entities/book-author.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Author, BookAuthor])],
  exports: [TypeOrmModule],
})
export class AuthorsModule {}
