"use client";

import {
  BookMarked,
  BookOpen,
  CheckCircle2,
  Library,
} from "lucide-react";

import { RecentBooks } from "./recent-books";
import { StatCard } from "./stat-card";

import { useDashboardQuery } from "../api/dashboard.queries";

export function DashboardOverview() {
  const { data, isPending } = useDashboardQuery();

  if (isPending) {
    return <p className="text-muted">Loading dashboard...</p>;
  }

  if (!data) {
    return <p className="text-danger">Unable to load dashboard.</p>;
  }

  return (
    <div className="flex flex-col gap-5">
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Books"
          value={data.summary.totalBooks}
          icon={<Library size={16} />}
          accent="primary"
        />
        <StatCard
          title="Reading"
          value={data.summary.reading}
          icon={<BookOpen size={16} />}
          accent="warning"
        />
        <StatCard
          title="Completed"
          value={data.summary.completed}
          icon={<CheckCircle2 size={16} />}
          accent="success"
        />
        <StatCard
          title="Wishlist"
          value={data.summary.wantToRead}
          icon={<BookMarked size={16} />}
          accent="muted"
        />
      </section>

        

        <RecentBooks books={data.books} />
 
    </div>
  );
}