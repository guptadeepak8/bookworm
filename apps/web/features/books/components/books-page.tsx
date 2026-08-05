"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import type { Book, BookStatus } from "@repo/schemas";

import { Button } from "../../../components/ui/button";

import { useBooksQuery } from "../api/books.queries";

import { BookDialog } from "./book-dialog";
import { BooksGrid } from "./books-grid";
import { EmptyState } from "./empty-state";
import { DeleteBookDialog } from "./delete-book-dialog";

interface BooksPageProps {
  status?: BookStatus;
  tag?: string;
}

const STATUS_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Want", value: "want_to_read" },
  { label: "Reading", value: "reading" },
  { label: "Done", value: "completed" },
] as const;

export function BooksPage({ status, tag }: BooksPageProps) {
  const [statusFilter, setStatusFilter] = useState<BookStatus | "all">(
    status ?? "all",
  );
  const [tagInput, setTagInput] = useState(tag ?? "");
  const [tagFilter, setTagFilter] = useState(tag ?? "");

  const [createOpen, setCreateOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [deleteBook, setDeleteBook] = useState<Book | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTagFilter(tagInput.trim());
    }, 300);

    return () => clearTimeout(timeout);
  }, [tagInput]);

  const { data, isPending } = useBooksQuery(
    statusFilter === "all" ? undefined : statusFilter,
    tagFilter || undefined,
  );

  const hasActiveFilters = statusFilter !== "all" || tagFilter.length > 0;

  function clearFilters() {
    setStatusFilter("all");
    setTagInput("");
    setTagFilter("");
  }

  if (isPending) {
    return <p className="text-muted">Loading library...</p>;
  }

  const isEmptyLibrary = !data?.length && !hasActiveFilters;

  if (isEmptyLibrary) {
    return (
      <>
        <EmptyState onAddBook={() => setCreateOpen(true)} />

        <BookDialog
          open={createOpen}
          mode="create"
          onClose={() => setCreateOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <section className="space-y-8">
        <header className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Library
            </p>

            <h1 className="font-serif text-5xl font-semibold tracking-tight">
              Books
            </h1>

            <p className="max-w-xl text-base leading-7 text-muted">
              Organize, update and manage every book in your collection.
            </p>
          </div>

          <Button onClick={() => setCreateOpen(true)}>Add Book</Button>
        </header>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-1 rounded-lg border border-border bg-background p-1">
              {STATUS_OPTIONS.map((option) => {
                const active = option.value === statusFilter;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setStatusFilter(option.value as BookStatus | "all")
                    }
                    className={`rounded-md px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider transition ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted transition hover:text-foreground"
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="relative w-full max-w-xs sm:w-64">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Filter by tag"
              className="h-11 w-full rounded-xl border border-border bg-surface pl-10 pr-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        {data?.length ? (
          <BooksGrid
            books={data}
            onEdit={(book) => setSelectedBook(book)}
            onDelete={(book) => setDeleteBook(book)}
          />
        ) : (
          <div className="rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="font-serif text-xl font-semibold">
              No books match these filters
            </p>
            <p className="mt-2 text-sm text-muted">
              Try a different status or tag.
            </p>
          </div>
        )}
      </section>

      <BookDialog
        open={createOpen}
        mode="create"
        onClose={() => setCreateOpen(false)}
      />

      {selectedBook && (
        <BookDialog
          open
          mode="edit"
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

      {deleteBook && (
        <DeleteBookDialog
          open
          id={deleteBook.id}
          title={deleteBook.title}
          onClose={() => setDeleteBook(null)}
        />
      )}
    </>
  );
}