"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { BOOK_STATUS, type BookStatus, type CreateBookDto } from "@repo/schemas";

import { InputField } from "../../../components/form/input-field";
import { Button } from "../../../components/ui/button";

const bookFormSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  author: z.string().trim().min(1, "Author is required"),
  tags: z.string(),
  status: z.enum(BOOK_STATUS),
});

type BookFormValues = z.infer<typeof bookFormSchema>;

const STATUS_LABELS: Record<BookStatus, string> = {
  want_to_read: "Want to Read",
  reading: "Reading",
  completed: "Completed",
};

interface BookFormProps {
  defaultValues?: Partial<BookFormValues>;
  loading?: boolean;
  submitLabel?: string;
  onCancel?: () => void;

  onSubmit(data: CreateBookDto): void | Promise<void>;
}

export function BookForm({
  defaultValues,
  loading = false,
  submitLabel = "Save Book",
  onCancel,
  onSubmit,
}: BookFormProps) {
  const form = useForm<BookFormValues>({
    resolver: zodResolver(bookFormSchema),

    defaultValues: {
      title: "",
      author: "",
      tags: "",
      status: "want_to_read",
      ...defaultValues,
    },
  });

  const currentStatus = form.watch("status");

  async function submit(values: BookFormValues) {
    await onSubmit({
      title: values.title,
      author: values.author,
      status: values.status,
      tags: values.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    });

    if (!defaultValues) {
      form.reset();
    }
  }

  return (
    <form onSubmit={form.handleSubmit(submit)} className="flex flex-col gap-6">
      <InputField
        control={form.control}
        name="title"
        label="Title"
        placeholder="Atomic Habits"
      />

      <InputField
        control={form.control}
        name="author"
        label="Author"
        placeholder="James Clear"
      />

      <InputField
        control={form.control}
        name="tags"
        label="Tags"
        placeholder="productivity,self-help,habits"
      />

      <div className="flex flex-col gap-2">
        <label className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Status
        </label>

        <div className="flex gap-1 rounded-lg border border-border bg-background p-1">
          {BOOK_STATUS.map((status) => {
            const active = status === currentStatus;
            return (
              <button
                key={status}
                type="button"
                onClick={() => form.setValue("status", status)}
                className={`flex-1 rounded-md px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {STATUS_LABELS[status]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex justify-end gap-3 border-t border-dashed border-border pt-6">
        {onCancel && (
          <Button
            type="button"
            onClick={onCancel}
            className="border border-border bg-background text-foreground hover:bg-surface-secondary"
          >
            Cancel
          </Button>
        )}

        <Button type="submit" loading={loading}>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}