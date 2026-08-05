interface Props {
  completed: number;
  target: number;
}

export function ReadingGoalCard({
  completed,
  target,
}: Props) {

  const progress =
    (completed / target) * 100;

  return (
    <article
      className="
        rounded-[28px]
        border
        border-border
        bg-surface
        p-7
        shadow-[var(--shadow-sm)]
      "
    >
      <div className="space-y-6">

        <div>

          <p className="text-sm text-muted">
            Reading Goal
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {completed}
            <span className="text-muted">
              /{target}
            </span>
          </h2>

          <p className="mt-2 text-muted">
            Books completed this year
          </p>

        </div>

        <div className="space-y-2">

          <div className="h-2 rounded-full bg-border">

            <div
              style={{
                width: `${progress}%`,
              }}
              className="
                h-full
                rounded-full
                bg-primary
              "
            />

          </div>

          <p className="text-sm text-muted">
            {Math.round(progress)}% Complete
          </p>

        </div>

      </div>
    </article>
  );
}