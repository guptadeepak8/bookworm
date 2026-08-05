"use client";

import type { Book } from "@repo/schemas";

import { BookCard } from "./book-card";

interface BooksGridProps {
  books: Book[];

  onEdit(book: Book): void;

  onDelete(book: Book): void;
}

export function BooksGrid({ books, onEdit, onDelete }: BooksGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}