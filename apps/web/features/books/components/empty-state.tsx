import Link from "next/link";


export function EmptyState() {
  return (
    <section className="flex flex-col items-center rounded-2xl border border-dashed border-neutral-300 py-20 text-center">
      <h2 className="text-2xl font-semibold">No books yet</h2>

      <p className="mt-3 max-w-sm text-neutral-600">
        Start building your personal library by adding your first book.
      </p>

      <Link
        href="/books/new"
        className="inline-flex h-10 items-center justify-center rounded-lg bg-black px-4 text-sm font-medium text-white"
      >
        Add Book
      </Link>
    </section>
  );
}
