import { LabelHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-sm font-medium text-neutral-900", className)}
      {...props}
    />
  );
}
