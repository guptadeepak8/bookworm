"use client";

import type { BookStatus } from "@repo/schemas";

const STATUS = [
  {
    label: "Want",
    value: "want_to_read",
  },
  {
    label: "Reading",
    value: "reading",
  },
  {
    label: "Done",
    value: "completed",
  },
] as const;

interface StatusSelectorProps {
  value: BookStatus;

  disabled?: boolean;

  onChange(status: BookStatus): void;
}

export function StatusSelector({
  value,
  disabled = false,
  onChange,
}: StatusSelectorProps) {
  return (
    <div className="flex shrink-0 gap-1 rounded-lg border border-border bg-background p-1">
      {STATUS.map((status) => {
        const active = status.value === value;

        return (
          <button
            key={status.value}
            type="button"
            disabled={disabled}
            onClick={() => onChange(status.value)}
            className={`rounded-md px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider transition disabled:pointer-events-none disabled:opacity-50 ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {status.label}
          </button>
        );
      })}
    </div>
  );
}