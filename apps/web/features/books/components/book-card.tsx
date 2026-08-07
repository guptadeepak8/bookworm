"use client";

import type { Book } from "@repo/schemas";

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
    <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-md">
      <span className="absolute left-0 top-0 h-full w-1 bg-primary" aria-hidden />

      <header className="pl-2">
        <h3 className="font-serif text-xl font-semibold leading-snug">
          {book.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{book.author}</p>
      </header>

      {book.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 pl-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 space-y-4 pl-2">
        <div className="border-t border-dashed border-border pt-5">
  

          <StatusSelector
            value={book.status}
            onChange={(status) =>
              updateMutation.mutate({
                id: book.id,
                data: { status },
              })
            }
          />
        </div>

        <div className="flex justify-end gap-3  border-border pt-5">
          <Button
            type="button"
            onClick={() => onEdit(book)}
            className="border border-border bg-background text-foreground hover:bg-surface-secondary"
          >
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
      </div>
    </article>
  );
}