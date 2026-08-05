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
  autoComplete?: string;
};

export function PasswordField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  forgotPasswordHref,
  autoComplete = "current-password",
}: PasswordFieldProps<TFieldValues>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field  error={fieldState.error?.message}>
          <div className="flex items-center justify-between">
            <Label htmlFor={field.name}>{label}</Label>

            {forgotPasswordHref && (
              <Link
                href={forgotPasswordHref}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
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
              autoComplete={autoComplete}
             
              className="pr-12"
            />

            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-foreground"
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
