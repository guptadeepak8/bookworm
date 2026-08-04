import { LoginDto, RegisterDto } from "@repo/schemas";
import { api } from "../../../lib/axios";



export async function register(data: RegisterDto) {
  const response = await api.post("/auth/register", data);

  return response.data;
}

export async function login(data: LoginDto) {
  const response = await api.post("/auth/login", data);

  return response.data;
}

export async function logout() {
  const response = await api.post("/auth/logout");

  return response.data;
}

export async function me() {
  const response = await api.get("/auth/me");

  return response.data;
}