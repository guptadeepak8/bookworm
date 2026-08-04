import type {
  ApiResponse,
  DashboardResponse,
} from "@repo/schemas";
import { api } from "../../../lib/axios";



export async function getDashboard() {
  const { data } =
    await api.get<ApiResponse<DashboardResponse>>(
      "/books/dashboard",
    );

  return data.data;
}