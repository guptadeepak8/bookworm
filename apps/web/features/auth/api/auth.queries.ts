"use client";

import { useQuery } from "@tanstack/react-query";

import { me } from "./auth.api";
import { authKeys } from "./auth.keys";

export function useMeQuery() {
  return useQuery({
    queryKey: authKeys.me(),
    queryFn: me,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}