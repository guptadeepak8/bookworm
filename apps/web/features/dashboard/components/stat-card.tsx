import { ReactNode } from "react";

interface Props {
  title: string;
  value: number;
  icon: ReactNode;
}

export function StatCard({ title, value, icon }: Props) {
  return (
    <article className="group rounded-[28px] border border-border/70 bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>

        <span className="text-4xl font-bold tracking-tight">
          {value}
        </span>
      </div>

      <p className="mt-8 text-sm font-medium text-muted">
        {title}
      </p>
    </article>
  );
}