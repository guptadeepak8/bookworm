import axios from "axios";
import { env } from "./env";

export const api = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ??
        error.message ??
        "Something went wrong";

      return Promise.reject(new Error(message));
    }

    return Promise.reject(error);
  }
);