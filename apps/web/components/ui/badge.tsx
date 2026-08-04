import { HTMLAttributes } from "react";

import { cn } from "../../lib/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700",
        className,
      )}
      {...props}
    />
  );
}
