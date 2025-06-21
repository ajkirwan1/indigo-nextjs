/** @format */

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Routes that require the user to be an admin
const protectedAdminRoutes = ["/admin"];

// Public routes where admins should NOT access (redirect them to /admin)
const publicRedirectIfAdminRoutes = ["/", "/contact"];

// Add /login/redirect as allowed for admin users
const adminAllowedRoutes = ["/admin", "/login/redirect"];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  const isAdmin = token?.role === "admin";
  const isClient = token?.role === "user";

  // 1. Redirect unauthenticated or non-admin users away from /admin routes
  const isProtectedAdminRoute = protectedAdminRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Allow admin users to access /login/redirect
  if (isAdmin) {
    // If admin is trying to access anything NOT in adminAllowedRoutes, redirect to /admin
    const isAllowedForAdmin = adminAllowedRoutes.some((route) =>
      pathname.startsWith(route)
    );
    if (!isAllowedForAdmin) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  } else {
    // Non-admin users trying to access /admin redirect to /account
    if (isProtectedAdminRoute) {
      return NextResponse.redirect(new URL("/account", req.url));
    }
  }

  // 3. Redirect non-client users trying to access /account routes
  if (pathname.startsWith("/account") && !isClient) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 4. Redirect unauthenticated users trying to access /admin or /account to login
  if ((pathname.startsWith("/admin") || pathname.startsWith("/account")) && !token?.role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
