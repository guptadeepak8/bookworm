"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  BOOK_STATUS,
  type BookStatus,
  type CreateBookDto,
} from "@repo/schemas";

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

  onSubmit(
    data: CreateBookDto,
  ): void | Promise<void>;
}

export function BookForm({
  defaultValues,
  loading = false,
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

  async function submit(
    values: BookFormValues,
  ) {
    await onSubmit({
      title: values.title,
      author: values.author,
      status: values.status,

      tags: values.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(submit)}
      className="space-y-8"
    >
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
        placeholder="react,node,backend"
      />

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Status
        </label>

        <select
          {...form.register("status")}
          className="h-12 w-full rounded-lg border border-neutral-200 px-4"
        >
          {BOOK_STATUS.map((status) => (
            <option
              key={status}
              value={status}
            >
              {status.replaceAll("_", " ")}
            </option>
          ))}
        </select>
      </div>

      <Button
        type="submit"
        loading={loading}
      >
        Save Book
      </Button>
    </form>
  );
}