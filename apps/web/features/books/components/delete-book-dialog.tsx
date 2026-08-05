"use client";

import { Trash2 } from "lucide-react";

import { Modal } from "../../../components/ui/modal";
import { Button } from "../../../components/ui/button";

import { useDeleteBookMutation } from "../api/books.mutations";

interface DeleteBookDialogProps {
  open: boolean;
  id: string;
  title: string;
  onClose(): void;
}

export function DeleteBookDialog({
  open,
  id,
  title,
  onClose,
}: DeleteBookDialogProps) {
  const deleteMutation = useDeleteBookMutation();

  async function handleDelete() {
    try {
      await deleteMutation.mutateAsync(id);
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Delete Book"
      description="This action cannot be undone."
      width="max-w-md"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-danger/10 text-danger">
            <Trash2 size={30} />
          </div>

          <p className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Confirm Removal
          </p>

          <h3 className="mt-2 font-serif text-2xl font-semibold">
            Delete “{title}”?
          </h3>

          <p className="mt-3 max-w-sm text-sm text-muted">
            This will permanently remove this book from your library. This
            action cannot be undone.
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t border-dashed border-border pt-6">
          <Button
            type="button"
            onClick={onClose}
            disabled={deleteMutation.isPending}
            className="border border-border bg-background text-foreground hover:bg-surface-secondary"
          >
            Cancel
          </Button>

          <Button
            type="button"
            loading={deleteMutation.isPending}
            onClick={handleDelete}
            className="bg-danger text-white hover:bg-danger/90"
          >
            Delete Book
          </Button>
        </div>
      </div>
    </Modal>
  );
}