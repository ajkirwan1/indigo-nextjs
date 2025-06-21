/** @format */

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Routes that require the user to be an admin
const protectedAdminRoutes = ["/admin"];

// Routes where admins should be redirected *away* from
const publicRedirectIfAdminRoutes = ["/", "/contact"];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const { pathname } = req.nextUrl;

  const isAdmin = token?.role === "admin";

  // 1. Redirect unauthenticated or non-admin users away from protected admin routes
  const isProtectedAdminRoute = protectedAdminRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 2. Optionally redirect admins away from public-facing pages
  const shouldRedirectAdminToDashboard =
    isAdmin &&
    publicRedirectIfAdminRoutes.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );

  if (shouldRedirectAdminToDashboard) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/contact", "/admin/:path*"],
};
