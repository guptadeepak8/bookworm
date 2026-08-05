"use client";

import { Bell, Plus, Search } from "lucide-react";
import { useState } from "react";
import { BookDialog } from "../features/books/components/book-dialog";

export function AppHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-20 items-center justify-between border-b border-border px-8">
      <div className="flex flex-1 items-center gap-6">
        <div className="hidden font-serif text-xl font-semibold lg:block">
          BookShelf
        </div>

        
      </div>

      <div className="ml-8 flex items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 items-center gap-2 rounded-full bg-primary px-5 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:opacity-90"
        >
          <Plus size={16} />
          Add Book
        </button>

        <button className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-muted transition hover:text-foreground">
          <Bell size={17} />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-serif font-semibold text-primary-foreground">
          D
        </div>
      </div>

      <BookDialog open={open} mode="create" onClose={() => setOpen(false)} />
    </header>
  );
}