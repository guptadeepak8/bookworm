import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  error?: string;
  children: ReactNode;
}

export function Field({
  children,
  className,
  error,
  ...props
}: FieldProps) {
  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      {...props}
    >
      {children}

      {error && (
        <p className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}