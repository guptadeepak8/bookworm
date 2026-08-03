import { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";


interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        `inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 `,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
