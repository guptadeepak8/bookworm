"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Field } from "../ui/field";

type PasswordFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  forgotPasswordHref?: string;
};

export function PasswordField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  forgotPasswordHref,
}: PasswordFieldProps<TFieldValues>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field>
          <div className="flex items-center justify-between">
            <Label htmlFor={field.name}>{label}</Label>

            {forgotPasswordHref && (
              <Link
                href={forgotPasswordHref}
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
              >
                Forgot password?
              </Link>
            )}
          </div>

          <div className="relative">
            <Input
              {...field}
              id={field.name}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              error={fieldState.error?.message}
              className="pr-12"
            />

            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {showPassword ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>
        </Field>
      )}
    />
  );
}
