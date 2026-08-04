"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterDto,
} from "@repo/schemas";

import { useRegisterMutation } from "../api/auth.mutations";
import { PasswordField } from "../../../components/form/password-field";
import { Button } from "../../../components/ui/button";
import { InputField } from "../../../components/form/input-field";


export function RegisterForm() {
  const router = useRouter();

  const registerMutation = useRegisterMutation();

  const form = useForm<RegisterDto>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: RegisterDto) {
    await registerMutation.mutateAsync(data);

    router.replace("/dashboard");
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mt-12 flex flex-col gap-8"
    >
      <InputField
        control={form.control}
        name="firstName"
        label="First Name"
        placeholder="John"
        autoComplete="given-name"
      />

      <InputField
        control={form.control}
        name="lastName"
        label="Last Name"
        placeholder="Doe"
        autoComplete="family-name"
      />

      <InputField
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
        autoComplete="new-password"
      />

      <Button
        type="submit"
        loading={registerMutation.isPending}
      >
        Create Account
      </Button>
    </form>
  );
}