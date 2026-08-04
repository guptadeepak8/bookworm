export const booksKeys = {
  all: ["books"] as const,

  list: (status?: string, tag?: string) =>
    [...booksKeys.all, "list", status, tag] as const,

  detail: (id: string) =>
    [...booksKeys.all, "detail", id] as const,
};