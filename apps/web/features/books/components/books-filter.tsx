"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const STATUS_OPTIONS = [
  { label: "All", value: "" },
  { label: "Want", value: "want_to_read" },
  { label: "Reading", value: "reading" },
  { label: "Done", value: "completed" },
] as const;

export function BooksFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeStatus = searchParams.get("status") ?? "";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex gap-1 rounded-lg border border-border bg-background p-1">
        {STATUS_OPTIONS.map((option) => {
          const active = option.value === activeStatus;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => updateParam("status", option.value)}
              className={`rounded-md px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider transition ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <input
        defaultValue={searchParams.get("tag") ?? ""}
        placeholder="Filter by tag"
        className="w-full max-w-xs rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 sm:w-auto"
        onBlur={(e) => updateParam("tag", e.target.value)}
      />
    </div>
  );
}