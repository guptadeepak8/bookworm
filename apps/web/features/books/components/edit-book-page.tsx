"use client";

import { useRouter } from "next/navigation";

import type { CreateBookDto } from "@repo/schemas";

import { BookForm } from "./book-form";

import { useBookQuery } from "../api/books.queries";
import { useUpdateBookMutation } from "../api/books.mutations";

interface EditBookPageProps {
  id: string;
}

export function EditBookPage({
  id,
}: EditBookPageProps) {
  const router = useRouter();

  const { data: book, isPending } = useBookQuery(id);

  const updateMutation =
    useUpdateBookMutation();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found.</p>;
  }

  async function handleSubmit(
    data: CreateBookDto,
  ) {
    await updateMutation.mutateAsync({
      id,
      data,
    });

    router.push("/books");
  }

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">
          Edit Book
        </h1>

        <p className="text-neutral-600">
          Update your book information.
        </p>
      </header>

      <BookForm
        defaultValues={{
          title: book.title,
          author: book.author,
          tags: book.tags.join(", "),
          status: book.status,
        }}
        loading={updateMutation.isPending}
        onSubmit={handleSubmit}
      />
    </section>
  );
}