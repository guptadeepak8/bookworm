"use client";

import type { Book, BookStatus, DashboardBook } from "@repo/schemas";
import { useUpdateBookMutation } from "../../books/api/books.mutations";
import { StatusSelector } from "../../../components/status-selector";

interface RecentBooksProps {
  books: DashboardBook[];
}

const STATUS = [
  { label: "Want", value: "want_to_read" },
  { label: "Reading", value: "reading" },
  { label: "Done", value: "completed" },
] as const;

export function RecentBooks({ books }: RecentBooksProps) {
  const updateBookMutation = useUpdateBookMutation();
  function updateStatus(id: string, status: BookStatus) {
    updateBookMutation.mutate({
      id,
      data: {
        status,
      },
    });
  }

  return (
    <section className="rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]">
      <header className="border-b border-border px-6 py-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Recent Books
        </p>
        <p className="mt-1.5 text-sm text-muted">
          Quickly update your reading progress.
        </p>
      </header>

      <div>
        {books.map((book, index) => (
          <article
            key={book._id}
            className="flex flex-col gap-3 border-b border-border px-6 py-5 last:border-none sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="font-mono text-[11px] tracking-wider text-muted">
                LIB · {String(index + 1).padStart(3, "0")}
              </span>
              <h3 className="font-serif text-lg font-semibold leading-snug">
                {book.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted">{book.author}</p>
            </div>

            <StatusSelector
              value={book.status}
              disabled={updateBookMutation.isPending}
              onChange={(status) => updateStatus(book._id, status)}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
