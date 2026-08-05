"use client";

import { Button } from "../../../components/ui/button";

interface EmptyStateProps {
  onAddBook(): void;
}

export function EmptyState({ onAddBook }: EmptyStateProps) {
  return (
    <section className="relative flex flex-col items-center rounded-2xl border border-dashed border-border bg-surface px-8 py-24 text-center">
      <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background" />

      <div className="flex gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 rounded-full bg-border"
            style={{ height: 16 + (i % 3) * 10 }}
          />
        ))}
      </div>

      <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted">
        Empty Shelf
      </p>

      <h2 className="mt-3 font-serif text-3xl font-semibold">No books yet</h2>

      <p className="mt-3 max-w-md text-muted">
        Start building your personal library by adding your first book.
      </p>

      <Button className="mt-8" onClick={onAddBook}>
        Add Book
      </Button>
    </section>
  );
}