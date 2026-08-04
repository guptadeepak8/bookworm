"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginDto } from "@repo/schemas";

import { useLoginMutation } from "../api/auth.mutations";

import { Button } from "../../../components/ui/button";
import { FormInput } from "../../../components/form/input-field";
import { PasswordField } from "../../../components/form/password-field";

export function LoginForm() {
  const router = useRouter();

  const loginMutation = useLoginMutation();

  const form = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginDto) {
    await loginMutation.mutateAsync(data);

    router.replace("/dashboard");
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mt-12 flex flex-col gap-8"
    >
      <FormInput
        control={form.control}
        name="email"
        label="Email"
        type="email"
        placeholder="john@example.com"
        autoComplete="email"
      />

      <PasswordField
        control={form.control}
        name="password"
        label="Password"
        forgotPasswordHref="/forgot-password"
      />

      <Button loading={loginMutation.isPending}>Sign In</Button>
    </form>
  );
}
