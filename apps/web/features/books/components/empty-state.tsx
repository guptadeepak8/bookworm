"use client";

import { Button } from "../../../components/ui/button";

interface EmptyStateProps {
  onAddBook(): void;
}

export function EmptyState({
  onAddBook,
}: EmptyStateProps) {
  return (
    <section className="flex flex-col items-center rounded-[32px] border border-dashed border-border bg-surface px-8 py-24 text-center">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-primary/10 text-4xl">
        📚
      </div>

      <h2 className="mt-8 text-3xl font-bold">
        No books yet
      </h2>

      <p className="mt-3 max-w-md text-muted">
        Start building your personal library by adding your first book.
      </p>

      <Button
        className="mt-8"
        onClick={onAddBook}
      >
        Add Book
      </Button>
    </section>
  );
}