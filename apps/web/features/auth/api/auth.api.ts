import type { ApiResponse, LoginDto, RegisterDto, User } from "@repo/schemas";
import { api } from "../../../lib/axios";

export async function login(data: LoginDto) {
  const response = await api.post<ApiResponse<null>>("/auth/login", data);

  return response.data;
}

export async function register(data: RegisterDto) {
  const response = await api.post<ApiResponse<User>>("/auth/register", data);

  return response.data;
}

export async function me() {
  const response = await api.get<ApiResponse<User>>("/auth/me");

  return response.data.data;
}

export async function logout() {
  const response = await api.post<ApiResponse<null>>("/auth/logout");

  return response.data;
}
