"use client";

import type { Book, BookStatus } from "@repo/schemas";

import { Button } from "../../../components/ui/button";

import { useUpdateBookMutation } from "../api/books.mutations";
import { StatusSelector } from "../../../components/status-selector";

interface BookCardProps {
  book: Book;

  onEdit(book: Book): void;

  onDelete(book: Book): void;
}

export function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  const updateMutation = useUpdateBookMutation();

  return (
    <article className="group rounded-[28px] border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <header className="space-y-1">
        <h3 className="text-xl font-bold tracking-tight">{book.title}</h3>

        <p className="text-sm text-muted">{book.author}</p>
      </header>

      {book.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6">
        <StatusSelector
          value={book.status}
          onChange={(status) =>
            updateMutation.mutate({
              id: book.id,
              data: {
                status,
              },
            })
          }
        />
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <Button type="button" onClick={() => onEdit(book)}>
          Edit
        </Button>

        <Button
          type="button"
          onClick={() => onDelete(book)}
          className="bg-danger text-white hover:bg-danger/90"
        >
          Delete
        </Button>
      </div>
    </article>
  );
}
