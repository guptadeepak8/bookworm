import { z } from "zod";
import { BOOK_STATUS } from "./book.model";

export const createBookSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),

  author: z.string().trim().min(1, "Author is required"),

  tags: z.array(z.string().trim()).default([]),

  status: z.enum(BOOK_STATUS).default("want_to_read"),
});

export const updateBookSchema = createBookSchema.partial();

export const getBooksQuerySchema = z.object({
  status: z.enum(BOOK_STATUS).optional(),

  tag: z.string().trim().optional(),
});

export const bookParamsSchema = z.object({
  id: z.string().trim().min(1),
});

export type CreateBookDto = z.infer<typeof createBookSchema>;

export type UpdateBookDto = z.infer<typeof updateBookSchema>;

export type GetBooksQueryDto = z.infer<typeof getBooksQuerySchema>;
