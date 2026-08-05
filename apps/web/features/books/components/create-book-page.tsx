"use client";

import { useRouter } from "next/navigation";

import { BookForm } from "./book-form";
import { useCreateBookMutation } from "../api/books.mutations";
import { CreateBookDto } from "@repo/schemas";

export function CreateBookPage() {
  const router = useRouter();

  const createBook = useCreateBookMutation();

  async function handleSubmit(data: CreateBookDto) {
    await createBook.mutateAsync(data);

    router.push("/books");
  }

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">
          Add Book
        </h1>

        <p className="mt-2 text-neutral-600">
          Add a new book to your library.
        </p>
      </header>

      <BookForm
        loading={createBook.isPending}
        onSubmit={handleSubmit}
      />
    </section>
  );
}