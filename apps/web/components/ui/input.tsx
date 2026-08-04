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
          "h-12 w-full rounded-xl border border-neutral-300 bg-white px-4 text-[15px] text-neutral-900 shadow-sm outline-none transition-all placeholder:text-neutral-400",
          "focus:border-neutral-900 focus:ring-4 focus:ring-neutral-100",
          "disabled:cursor-not-allowed disabled:bg-neutral-100",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";