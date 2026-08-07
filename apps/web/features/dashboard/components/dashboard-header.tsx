export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-6  pb-8 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Overview
        </p>

        <h1 className="font-serif text-5xl font-semibold tracking-tight">
          Dashboard
        </h1>

        <p className="max-w-xl text-base leading-7 text-muted">
          Monitor your reading activity and recent books.
        </p>
      </div>
    </header>
  );
}