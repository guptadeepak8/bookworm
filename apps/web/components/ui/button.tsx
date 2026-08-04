"use client";

import { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export function Button({
  children,
  className,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={cn(
        "inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 text-sm font-medium text-white transition-all",
        "hover:bg-neutral-800",
        "active:scale-[0.99]",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:ring-4 focus-visible:ring-neutral-200",
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}

      {children}
    </button>
  );
}
