"use client";

import { useQuery } from "@tanstack/react-query";

import { me } from "./auth.api";

export function useMeQuery() {
  return useQuery({
    queryKey: ["me"],

    queryFn: me,

    retry: false,
  });
}