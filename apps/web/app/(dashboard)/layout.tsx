import { ReactNode } from "react";
import { AppHeader } from "../../components/app-header";
import { AppNavigation } from "../../components/app-navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-[270px_1fr]">
      <aside className="border-r border-border/70 bg-surface/90 backdrop-blur">
        <AppNavigation />
      </aside>

      <div className="flex min-h-screen flex-col">
        <AppHeader />

        <main className="flex-1 flex-row">
          <div className="mx-auto w-full max-w-7xl px-8 py-10 xl:px-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}