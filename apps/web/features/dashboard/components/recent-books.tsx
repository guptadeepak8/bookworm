import type { Book } from "@repo/schemas";

interface RecentBooksProps {
  books: Book[];
}

export function RecentBooks({
  books,
}: RecentBooksProps) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white">
      <header className="border-b border-neutral-200 px-6 py-5">
        <h2 className="text-lg font-semibold">
          Recent Books
        </h2>
      </header>

      <div>
        {books.map((book) => (
          <article
            key={book.id}
            className="flex items-center justify-between border-b border-neutral-100 px-6 py-5 last:border-none"
          >
            <div>
              <h3 className="font-medium">
                {book.title}
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                {book.author}
              </p>
            </div>

            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium capitalize">
              {book.status.replaceAll("_", " ")}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}