import Link from "next/link";

import type { Book, BookStatus } from "@repo/schemas";
import {
  useDeleteBookMutation,
  useUpdateBookMutation,
} from "../api/books.mutations";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const deleteMutation = useDeleteBookMutation();
  const updateMutation =useUpdateBookMutation();
  async function handleDelete() {
    if (!window.confirm("Delete this book?")) {
      return;
    }

    await deleteMutation.mutateAsync(book.id);
  }
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6">
      <header>
        <h3 className="text-lg font-semibold tracking-tight">{book.title}</h3>

        <p className="mt-1 text-sm text-neutral-500">{book.author}</p>
      </header>

      <div className="mt-6 flex items-center justify-between">
        <select
          value={book.status}
          onChange={(e) =>
            updateMutation.mutate({
              id: book.id,
              data: {
                status: e.target.value as BookStatus,
              },
            })
          }
        >
          <option value="want_to_read">Want to Read</option>

          <option value="reading">Reading</option>

          <option value="completed">Completed</option>
        </select>

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
            onClick={handleDelete}
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
