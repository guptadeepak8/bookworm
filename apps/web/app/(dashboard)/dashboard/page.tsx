import { DashboardOverview } from "../../../features/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Welcome back
          </p>

          <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground">
            Your Library
          </h1>

          <p className="max-w-xl text-base leading-7 text-muted">
            Track your reading, organize your books, and continue where you left
            off.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-sm)]">
          <p className="px-6 pt-5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted">
            Reading Goal
          </p>

          <div className="relative mt-3 border-t border-dashed border-border px-6 py-4">
            <span className="absolute -left-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full border border-border bg-background" />
            <span className="absolute -right-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full border border-border bg-background" />

            <div className="flex items-end gap-2">
              <span className="font-serif text-4xl font-semibold tabular-nums">18</span>
              <span className="pb-1 font-mono text-sm text-muted">/ 24 BOOKS</span>
            </div>
          </div>
        </div>
      </header>

      <DashboardOverview />
    </div>
  );
}