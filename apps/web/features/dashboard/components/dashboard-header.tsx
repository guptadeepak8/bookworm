export function DashboardHeader() {
  return (
    <header className="flex items-end justify-between">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-3 max-w-xl text-muted">
          Monitor your reading activity and recent books.
        </p>
      </div>
    </header>
  );
}