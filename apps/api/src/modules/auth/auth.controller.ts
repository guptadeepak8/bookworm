import { Request, Response } from "express";


import { getCurrentUser, loginUser, registerUser } from "./auth.service";
import { loginSchema, registerSchema } from "@repo/schemas";

export async function register(req: Request, res: Response) {
  const body = registerSchema.parse(req.body);

  const user = await registerUser(body);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt,
    },
  });
}

export async function login(req: Request, res: Response) {
  const body = loginSchema.parse(req.body);

  const { token } = await loginUser(body);

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({
    success: true,
    message: "Login successful",
  });
}

export async function me(req: Request, res: Response) {
  const user = await getCurrentUser(req.user!.userId);

  res.json({
    success: true,
    data: user,
  });
}

export async function logout(req: Request, res: Response) {
  res.clearCookie("accessToken", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  res.json({
    success: true,
    message: "Logged out successfully",
  });
}
