"use client";

import { useState } from "react";

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

export function BooksPage({
  status,
  tag,
}: BooksPageProps) {
  const { data, isPending } =
    useBooksQuery(status, tag);

  const [createOpen, setCreateOpen] =
    useState(false);

  const [selectedBook, setSelectedBook] =
    useState<Book | null>(null);

  const [deleteBook, setDeleteBook] =
    useState<Book | null>(null);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (!data?.length) {
    return (
      <>
        <EmptyState
          onAddBook={() =>
            setCreateOpen(true)
          }
        />

        <BookDialog
          open={createOpen}
          mode="create"
          onClose={() =>
            setCreateOpen(false)
          }
        />
      </>
    );
  }

  return (
    <>
      <section className="space-y-10">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Books
            </h1>

            <p className="mt-2 text-muted">
              Manage your personal library.
            </p>
          </div>

          <Button
            onClick={() =>
              setCreateOpen(true)
            }
          >
            Add Book
          </Button>
        </header>

        <BooksGrid
          books={data}
          onEdit={(book) =>
            setSelectedBook(book)
          }
          onDelete={(book) =>
            setDeleteBook(book)
          }
        />
      </section>

      <BookDialog
        open={createOpen}
        mode="create"
        onClose={() =>
          setCreateOpen(false)
        }
      />

      {selectedBook && (
        <BookDialog
          open={true}
          mode="edit"
          book={selectedBook}
          onClose={() =>
            setSelectedBook(null)
          }
        />
      )}

      {deleteBook && (
        <DeleteBookDialog
          open={true}
          id={deleteBook.id}
          title={deleteBook.title}
          onClose={() =>
            setDeleteBook(null)
          }
        />
      )}
    </>
  );
}