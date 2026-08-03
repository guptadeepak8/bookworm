import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { AppError } from "../utils/app-error";
import { HTTP_STATUS } from "../constants/http-status";

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
      };
    }
  }
}

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.accessToken;

  if (!token) {
    throw new AppError(
      "Authentication required",
      HTTP_STATUS.UNAUTHORIZED
    );
  }

  const payload = verifyAccessToken(token);

  req.user = payload;

  next();
}