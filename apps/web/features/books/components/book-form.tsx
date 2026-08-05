"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { BOOK_STATUS, type CreateBookDto } from "@repo/schemas";

import { InputField } from "../../../components/form/input-field";
import { Button } from "../../../components/ui/button";

const bookFormSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  author: z.string().trim().min(1, "Author is required"),
  tags: z.string(),
  status: z.enum(BOOK_STATUS),
});

type BookFormValues = z.infer<typeof bookFormSchema>;

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
        <label className="text-sm font-medium">Status</label>

        <select
          {...form.register("status")}
          className="h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        >
          {BOOK_STATUS.map((status) => (
            <option key={status} value={status}>
              {status.replaceAll("_", " ")}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-2 flex justify-end gap-3 border-t border-border pt-6">
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
