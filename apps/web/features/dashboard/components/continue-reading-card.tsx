import { ArrowRight } from "lucide-react";

interface Props {
  book?: {
    title: string;
    author: string;
    status: string;
  };
}

export function ContinueReadingCard({ book }: Props) {
  if (!book) return null;

  return (
    <article
      className="
    h-full
    rounded-3xl
    bg-surface
    p-6
    shadow-[var(--shadow-sm)]
  "
    >
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div
            className="
              h-28
              w-20
              shrink-0
              rounded-2xl
              bg-gradient-to-br
              from-amber-200
              to-amber-500
              shadow-lg
            "
          />

          <div className="space-y-3">
            <span
              className="
                inline-flex
                rounded-full
                bg-primary/10
                px-3
                py-1
                text-xs
                font-medium
                text-primary
              "
            >
              Continue Reading
            </span>

            <div>
              <h2 className="text-2xl font-bold">{book.title}</h2>

              <p className="mt-1 text-muted">{book.author}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>73%</span>

                <span className="text-muted">Chapter 7</span>
              </div>

              <div className="h-2 rounded-full bg-border">
                <div
                  className="
                    h-full
                    w-[73%]
                    rounded-full
                    bg-primary
                  "
                />
              </div>
            </div>
          </div>
        </div>

        <button
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-full
            bg-primary
            px-5
            text-primary-foreground
            transition-all
            hover:scale-[1.03]
          "
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}
