/** @format */

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Routes that require the user to be an admin
const protectedAdminRoutes = ["/admin"];

// Public routes where admins should NOT access (redirect them to /admin)
const publicRedirectIfAdminRoutes = ["/", "/contact"];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  const isAdmin = token?.role === "admin";

  // 1. Redirect unauthenticated or non-admin users away from /admin routes
  const isProtectedAdminRoute = protectedAdminRoutes.some((route) =>
    pathname.startsWith(route)
  );
  if (isProtectedAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 2. If logged in as admin, only allow access to /admin routes
  if (isAdmin && !pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};

