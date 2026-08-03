"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="
              block
              text-sm
              font-medium
              text-neutral-900
            "
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          className={cn(`h-10 w-full rounded-lg border border-neutral-200 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-black disabled:cursor-not-allowed disabled:bg-neutral-100`,
            error && "border-red-500 focus:border-red-500",
            className,
          )}
          {...props}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
