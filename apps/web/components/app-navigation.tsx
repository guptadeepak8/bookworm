"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Book,
  BookOpen,
  ChartColumn,
  CheckCircle2,
  LogOut,
  Settings,
} from "lucide-react";
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
  {
    label: "Reading",
    href: "/reading",
    icon: BookOpen,
  },
  {
    label: "Completed",
    href: "/completed",
    icon: CheckCircle2,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppNavigation() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen flex-col">
      <div className="border-b border-border p-8">
        <div className="text-3xl">📚</div>

        <h2 className="mt-3 text-2xl font-bold">BookShelf</h2>

        <p className="mt-1 text-sm text-muted">Your personal library</p>
      </div>

      <nav className="flex-1 space-y-2 p-6">
        {items.map((item) => {
          const Icon = item.icon;

          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-4
                rounded-2xl px-4 py-3
                transition-all

                ${
                  active
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted hover:bg-surface-secondary hover:text-foreground"
                }
              `}
            >
              <Icon size={20} />

              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-6">
        <button
          className="
          flex w-full items-center
          gap-3 rounded-2xl
          px-4 py-3 text-muted
          transition hover:bg-surface-secondary
        "
        onClick={logout}
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
