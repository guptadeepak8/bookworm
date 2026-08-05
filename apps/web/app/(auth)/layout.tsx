import { ReactNode } from "react";
import { BookOpen, CheckCircle2, Library, Sparkles } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid min-h-screen bg-background lg:grid-cols-[1.05fr_.95fr]">
      <aside className="hidden border-r border-border/70 bg-surface-secondary lg:flex">
        <div className="flex h-full w-full flex-col justify-between p-16">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-md)]">
              <BookOpen className="h-7 w-7" />
            </div>

            <h1 className="mt-10 text-5xl font-bold tracking-tight text-foreground">
              Bookworm
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              Organize your reading journey. Track every book, monitor your
              progress and build your personal library.
            </p>

            <div className="mt-10 grid max-w-md gap-4">
              {[
                { icon: Library, label: "Library in one place" },
                { icon: CheckCircle2, label: "Reading progress that updates" },
                { icon: Sparkles, label: "A calmer way to choose what is next" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-sm)]"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <blockquote className="max-w-md text-2xl font-medium leading-relaxed text-foreground">
              "A reader lives a thousand lives before he dies."
            </blockquote>

            <p className="mt-5 text-muted">- George R. R. Martin</p>
          </div>
        </div>
      </aside>

      <section className="flex min-h-screen bg-background">
        <div className="flex w-full items-center px-8 py-12 sm:px-14 lg:px-20 xl:px-24">
          <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-md)] sm:p-10">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
