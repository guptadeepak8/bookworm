"use client";

import { StatCard } from "./stat-card";
import { RecentBooks } from "./recent-books";

import { useDashboardQuery } from "../api/dashboard.queries";

export function DashboardOverview() {
  const { data, isPending } = useDashboardQuery();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-2 text-neutral-600">
          Track your reading progress.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Books"
          value={data.summary.totalBooks}
        />

        <StatCard
          title="Want to Read"
          value={data.summary.wantToRead}
        />

        <StatCard
          title="Reading"
          value={data.summary.reading}
        />

        <StatCard
          title="Completed"
          value={data.summary.completed}
        />
      </section>

      <RecentBooks books={data.books} />
    </div>
  );
}