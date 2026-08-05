"use client";

import { useQuery } from "@tanstack/react-query";

import { booksKeys } from "./books.keys";
import { getBook, getBooks } from "./books.api";
import { BookStatus } from "@repo/schemas";

export function useBooksQuery(
  status?: BookStatus,
  tag?: string,
) {
  return useQuery({
    queryKey: booksKeys.list(status, tag),
    queryFn: () => getBooks({ status, tag }),
  });
}

export function useBookQuery(id: string) {
  return useQuery({
    queryKey: booksKeys.detail(id),
    queryFn: () => getBook(id),
    enabled: !!id,
  });
}