import { ReactNode } from "react";

interface Props {
  title: string;
  value: number;
  icon: ReactNode;
  accent?: "primary" | "success" | "warning" | "muted";
}

const ACCENT_MAP = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  muted: "bg-muted",
} as const;

export function StatCard({ title, value, icon, accent = "primary" }: Props) {
  return (
    <article className="relative overflow-hidden rounded-2xl  bg-surface shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-md">
      <span
        className={`absolute left-0 top-0 h-full w-1 ${ACCENT_MAP[accent]}`}
        aria-hidden
      />

      <div className="flex items-center justify-between px-5 pl-6 pt-5">
        <span className="font-mono text-xl font-medium uppercase tracking-[0.15em] text-muted">
          {title}
        </span>
        <span className="text-muted/60">{icon}</span>
      </div>

      <div className="relative border-t border-dashed border-border px-5 pl-6 py-5">
        <span className="absolute -left-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full border border-border bg-background" />
        <span className="absolute -right-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full border border-border bg-background" />

        <p className="font-serif text-2xl font-semibold tabular-nums">
          {value}
        </p>
      </div>
    </article>
  );
}