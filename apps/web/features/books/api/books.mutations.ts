"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createBook,
  deleteBook,
  updateBook,
} from "./books.api";

import { booksKeys } from "./books.keys";
import { dashboardKeys } from "../../dashboard/api/dashboard.keys";


export function useCreateBookMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBook,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: booksKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: dashboardKeys.all,
      });
    },
  });
}

export function useUpdateBookMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Parameters<typeof updateBook>[1];
    }) => updateBook(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: booksKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: dashboardKeys.all,
      });
    },
  });
}

export function useDeleteBookMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBook,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: booksKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: dashboardKeys.all,
      });
    },
  });
}