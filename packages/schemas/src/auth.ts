import { z } from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),

  lastName: z.string().trim().min(2, "Last name must be at least 2 characters"),

  email: z.email().trim().toLowerCase(),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z
    .string({
      error: (issue) =>
        issue.input === undefined || issue.input === ""
          ? "Email is required"
          : "Email must be a string",
    })
    .trim()
    .pipe(z.email("Please enter a valid email address")),

  password: z
    .string({
      error: "Password is required",
    })
    .min(1, "Password is required"),
});

export type RegisterDto = z.infer<typeof registerSchema>;

export type LoginDto = z.infer<typeof loginSchema>;


export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}