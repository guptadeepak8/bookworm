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
        `inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-black text-white text-sm font-medium transition-colors hover:bg-neutral-80 disabled:cursor-not-allowed disabled:opacity-50`,
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="size-4 animate-spin" />}

      {children}
    </button>
  );
}
