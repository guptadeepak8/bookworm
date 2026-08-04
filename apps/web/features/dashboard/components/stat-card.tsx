interface StatCardProps {
  title: string;
  value: number;
}

export function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6">
      <p className="text-sm font-medium text-neutral-500">
        {title}
      </p>

      <p className="mt-3 text-4xl font-bold tracking-tight text-neutral-950">
        {value}
      </p>
    </article>
  );
}