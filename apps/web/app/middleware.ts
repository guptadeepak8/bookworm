import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/books"];

const authRoutes = ["/login", "/register"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  const pathname = req.nextUrl.pathname;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  const isAuthRoute = authRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL("/login", req.url),
    );
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(
      new URL("/dashboard", req.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/books/:path*",
    "/login",
    "/register",
  ],
};