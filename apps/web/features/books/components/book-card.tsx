import Link from "next/link";

import type { Book } from "@repo/schemas";

interface BookCardProps {
  book: Book;
}

export function BookCard({
  book,
}: BookCardProps) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6">
      <header>
        <h3 className="text-lg font-semibold tracking-tight">
          {book.title}
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          {book.author}
        </p>
      </header>

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium capitalize">
          {book.status.replaceAll("_", " ")}
        </span>

        <div className="flex gap-4">
          <Link
            href={`/books/${book.id}`}
            className="text-sm font-medium hover:underline"
          >
            Edit
          </Link>

          <button
            type="button"
            className="text-sm font-medium text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>

      {book.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-100 px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}