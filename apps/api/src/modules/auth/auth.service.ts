import bcrypt from "bcrypt";
import { createUser, findUserByEmail, findUserById } from "./auth.repository";
import { AppError } from "../../utils/app-error";
import { HTTP_STATUS } from "../../constants/http-status";
import { generateAccessToken } from "../../utils/jwt";
import { LoginDto } from "./auth.validation";

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function registerUser(data: CreateUserInput) {
  const existingUser = await findUserByEmail(data.email);

  if (existingUser) {
    throw new AppError("Email already exists", HTTP_STATUS.CONFLICT);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return createUser({
    ...data,
    password: hashedPassword,
  });
}

export async function loginUser(data: LoginDto) {
  const user = await findUserByEmail(data.email);

  if (!user) {
    throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
  }

  const isPasswordCorrect = await bcrypt.compare(data.password, user.password);

  if (!isPasswordCorrect) {
    throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZED);
  }

  const token = generateAccessToken({
    userId: user._id.toString(),
  });

  return {
    token,
  };
}

export async function getCurrentUser(userId: string) {
  const user = await findUserById(userId);

  if (!user) {
    throw new AppError("User not found", HTTP_STATUS.NOT_FOUND);
  }

  return {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    createdAt: user.createdAt,
  };
}

export async function logoutUser() {
  return;
}
