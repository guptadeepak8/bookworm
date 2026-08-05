import { DashboardOverview } from "../../../features/dashboard";

export default function DashboardPage() {
  return (
    <div className="flex-col flex gap-4">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-muted">
            Welcome back
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Your Personal Library
          </h1>
        </div>

        <div className="text-right">

          <p className="text-sm text-muted">
            Reading Goal
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            18
            <span className="text-muted"> / 24</span>
          </h2>

        </div>

      </div>

      <DashboardOverview />

    </div>
  );
}