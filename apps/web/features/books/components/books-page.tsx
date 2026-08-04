"use client";

import Link from "next/link";



import { useBooksQuery } from "../api/books.queries";

import { BooksGrid } from "./books-grid";
import { EmptyState } from "./empty-state";
import { Button } from "../../../components/ui/button";

export function BooksPage() {
  const { data, isPending } = useBooksQuery();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (!data?.length) {
    return <EmptyState />;
  }

  return (
    <section className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Books
          </h1>

          <p className="mt-2 text-neutral-600">
            Manage your reading collection.
          </p>
        </div>

        <Button >
          <Link href="/books/new">
            Add Book
          </Link>
        </Button>
      </header>

      <BooksGrid books={data} />
    </section>
  );
}