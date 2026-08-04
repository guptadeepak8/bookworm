"use client";

import { useQuery } from "@tanstack/react-query";

import { getDashboard } from "./dashboard.api";
import { dashboardKeys } from "./dashboard.keys";

export function useDashboardQuery() {
  return useQuery({
    queryKey: dashboardKeys.overview(),

    queryFn: getDashboard,

    staleTime: 60 * 1000,
  });
}