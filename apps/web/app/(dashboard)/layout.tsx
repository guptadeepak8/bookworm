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
    <div className="flex h-screen bg-background">
      <AppNavigation />

      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl px-8 py-8 xl:px-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}