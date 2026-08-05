"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-12 w-full rounded-xl border border-border bg-surface px-4 text-[15px] text-foreground shadow-[var(--shadow-sm)] outline-none transition-all placeholder:text-muted/70",
          "focus:border-primary focus:ring-4 focus:ring-primary/15",
          "disabled:cursor-not-allowed disabled:bg-surface-secondary",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
