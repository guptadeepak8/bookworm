import { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export function Field({ className, ...props }: FieldProps) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}
