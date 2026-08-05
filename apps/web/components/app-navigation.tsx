"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Book, ChartColumn, LogOut } from "lucide-react";
import { logout } from "../features/auth";

const items = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: ChartColumn,
  },
  {
    label: "My Books",
    href: "/books",
    icon: Book,
  },
];

export function AppNavigation() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen flex-col">
      <div className="border-b border-border p-8">
        <div className="flex gap-1.5">
          {[16, 24, 18, 28, 14].map((h, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-primary"
              style={{ height: h }}
            />
          ))}
        </div>

        <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight">
          BookShelf
        </h2>

        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          Your Personal Library
        </p>
      </div>

      <nav className="flex-1 space-y-1 p-6">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center gap-4 overflow-hidden rounded-xl px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${
                active
                  ? "bg-surface-secondary text-foreground shadow-[var(--shadow-sm)]"
                  : "text-muted hover:bg-surface-secondary hover:text-foreground"
              }`}
            >
              {active && (
                <span
                  className="absolute left-0 top-0 h-full w-1 bg-primary"
                  aria-hidden
                />
              )}

              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-dashed border-border p-6"  onClick={logout}>
        <button
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-muted transition hover:bg-surface-secondary hover:text-foreground"
         
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}