"use client"
import { Bell, Plus, Search } from "lucide-react";
import { useState } from "react";
import { BookDialog } from "../features/books/components/book-dialog";

export function AppHeader() {

  const [open, setOpen] = useState(false);
  return (
    <header className="flex h-20 items-center justify-between px-8">
      <div className="flex flex-1 items-center gap-6">
        <div className="hidden text-2xl font-bold lg:block">BookShelf</div>

        <div className="relative w-full max-w-xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />

          <input
            placeholder="Search books, authors..."
            className="h-12 w-full rounded-full border border-border bg-background pl-12 pr-4"
          />
        </div>
      </div>

      <div className="ml-8 flex items-center gap-4">
        <button
          className="
          flex h-11 items-center gap-2 rounded-full
          bg-primary px-5 text-primary-foreground
          transition hover:scale-[1.02]
        "
        >
          <Plus size={18} />
          Add Book
        </button>



        <button
          className="
          grid h-11 w-11 place-items-center
          rounded-full border border-border
          bg-surface
        "
        >
          <Bell size={18} />
        </button>

        <div
          className="
          flex h-11 w-11 items-center
          justify-center rounded-full
          bg-primary text-primary-foreground
          font-semibold
        "
        >
          D
        </div>
      </div>
      <BookDialog
    open={open}
    mode="create"
    onClose={() => setOpen(false)}
/>
    </header>
  );
}
