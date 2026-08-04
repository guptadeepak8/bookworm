"use client";

import { useRouter } from "next/navigation";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  login,
  logout,
  register,
} from "./auth.api";

import { authKeys } from "./auth.keys";

export function useLoginMutation() {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: authKeys.me(),
      });

      router.replace("/dashboard");
    },
  });
}

export function useRegisterMutation() {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: authKeys.me(),
      });

      router.replace("/dashboard");
    },
  });
}

export function useLogoutMutation() {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,

    onSuccess: async () => {
      queryClient.removeQueries({
        queryKey: authKeys.me(),
      });

      router.replace("/login");
    },
  });
}