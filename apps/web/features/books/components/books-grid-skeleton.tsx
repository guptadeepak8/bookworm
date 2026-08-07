export function BooksGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-sm)]"
        >
          <div className="animate-pulse space-y-4">
            <div className="h-6 w-3/4 rounded bg-surface-secondary" />

            <div className="h-4 w-full rounded bg-surface-secondary" />

            <div className="h-4 w-2/3 rounded bg-surface-secondary" />

            <div className="flex gap-2 pt-2">
              <div className="h-6 w-20 rounded-full bg-surface-secondary" />
              <div className="h-6 w-16 rounded-full bg-surface-secondary" />
            </div>

            <div className="flex justify-between pt-4">
              <div className="h-9 w-20 rounded-lg bg-surface-secondary" />
              <div className="h-9 w-20 rounded-lg bg-surface-secondary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}