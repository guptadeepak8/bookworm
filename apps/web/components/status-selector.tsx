"use client";

import { BOOK_STATUS, type BookStatus } from "@repo/schemas";

interface Props {
  value: BookStatus;
  onChange(status: BookStatus): void;
}

export function StatusSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex rounded-2xl bg-background p-1">
      {BOOK_STATUS.map((status) => {
        const active = value === status;

        return (
          <button
            key={status}
            type="button"
            onClick={() => onChange(status)}
            className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium capitalize transition ${
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted hover:bg-surface"
            }`}
          >
            {status.replaceAll("_", " ")}
          </button>
        );
      })}
    </div>
  );
}