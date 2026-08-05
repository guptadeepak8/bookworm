"use client";

import type {
  Book,
  CreateBookDto,
} from "@repo/schemas";

import { BookForm } from "./book-form";
import { Modal } from "../../../components/ui/modal";

import {
  useCreateBookMutation,
  useUpdateBookMutation,
} from "../api/books.mutations";

interface BookDialogProps {
  open: boolean;
  onClose(): void;

  mode: "create" | "edit";

  book?: Book;
}

export function BookDialog({
  open,
  onClose,
  mode,
  book,
}: BookDialogProps) {
  const createBook = useCreateBookMutation();

  const updateBook = useUpdateBookMutation();

  async function handleSubmit(
    data: CreateBookDto,
  ) {
    if (mode === "create") {
      await createBook.mutateAsync(data);
    } else {
      if (!book) return;

      await updateBook.mutateAsync({
        id: book.id,
        data,
      });
    }

    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={
        mode === "create"
          ? "Add Book"
          : "Edit Book"
      }
      description={
        mode === "create"
          ? "Add a new book to your library."
          : "Update your book information."
      }
    >
      <BookForm
        defaultValues={
          book && {
            title: book.title,
            author: book.author,
            tags: book.tags.join(", "),
            status: book.status,
          }
        }
        loading={
          createBook.isPending ||
          updateBook.isPending
        }
        submitLabel={
          mode === "create"
            ? "Add Book"
            : "Save Changes"
        }
        onCancel={onClose}
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}