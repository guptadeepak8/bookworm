import { ReactNode } from "react";
import { BookOpen } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <aside className="hidden bg-neutral-950 text-white lg:flex">
        <div className="flex h-full w-full flex-col justify-between p-16">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <BookOpen className="h-7 w-7" />
            </div>

            <h1 className="mt-10 text-5xl font-bold tracking-tight">
              Bookworm
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-neutral-300">
              Organize your reading journey. Track every book, monitor your
              progress and build your personal library.
            </p>
          </div>

          <div>
            <blockquote className="max-w-md text-2xl font-medium leading-relaxed">
              “A reader lives a thousand lives before he dies.”
            </blockquote>

            <p className="mt-5 text-neutral-400">— George R. R. Martin</p>
          </div>
        </div>
      </aside>

      <section className="flex min-h-screen bg-white">
        <div className="flex w-full items-center px-8 py-12 sm:px-14 lg:px-20 xl:px-24">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </section>
    </main>
  );
}
