"use client";

import {
  BookMarked,
  BookOpen,
  CheckCircle2,
  Library,
} from "lucide-react";

import { ContinueReadingCard } from "./continue-reading-card";
import { RecentBooks } from "./recent-books";
import { StatCard } from "./stat-card";
import { useDashboardQuery } from "../api/dashboard.queries";

export function DashboardOverview() {
  const { data, isPending } = useDashboardQuery();

  if (isPending) return <p>Loading...</p>;

  if (!data) return <p>Error</p>;

  return (
    <div className="flex flex-col gap-4">
      
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Books" value={data.summary.totalBooks} icon={<Library size={20} />} />

        <StatCard title="Reading" value={data.summary.reading} icon={<BookOpen size={20} />} />

        <StatCard title="Completed" value={data.summary.completed} icon={<CheckCircle2 size={20} />} />

        <StatCard title="Wishlist" value={data.summary.wantToRead} icon={<BookMarked size={20} />} />
      </section>
      <ContinueReadingCard book={data.books[0]} />
        

      <RecentBooks books={data.books} />
    </div>
  );
}