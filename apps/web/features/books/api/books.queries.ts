"use client";

import { useQuery } from "@tanstack/react-query";

import { getBooks } from "./books.api";
import { booksKeys } from "./books.keys";

export function useBooksQuery(
  status?: string,
  tag?: string,
) {
  return useQuery({
    queryKey: booksKeys.list(status, tag),

    queryFn: () =>
      getBooks({
        status,
        tag,
      }),
  });
}