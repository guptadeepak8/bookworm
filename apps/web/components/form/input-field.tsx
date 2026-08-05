"use client";

import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: string;
};

export function InputField<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
}: FormInputProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field error={fieldState.error?.message}>
          <Label htmlFor={field.name}>{label}</Label>

          <Input
            {...field}
            id={field.name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
        </Field>
      )}
    />
  );
}
