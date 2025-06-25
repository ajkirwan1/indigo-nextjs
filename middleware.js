/** @format */

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedAdminRoutes = ["/admin"];
const adminAllowedRoutes = ["/admin", "/login/redirect"];

function log(...args) {
  console.log("[MIDDLEWARE DEBUG]", ...args);
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isSecure = req.nextUrl.protocol === 'https:' || process.env.NODE_ENV === 'production';

  const cookieName = isSecure ? '__Secure-authjs.session-token' : undefined;

  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    cookieName,
  });
  
  // const token = await getToken({
  //   req,
  //   secret: process.env.AUTH_SECRET,
  //   // cookieName: req.headers.get("cookie")?.includes("__Secure-authjs.session-token")
  //   //   ? "__Secure-authjs.session-token"
  //   //   : "authjs.session-token",
  // });

  const role = token?.role;

  log("Requested Path:", pathname);
  log("Token:", token ? "Valid" : "Missing or expired");
  log("Role:", role ?? "None");
  log("Cookies:", req.headers.get("cookie") || "No cookies");


  const isAdmin = role === "admin";
  const isClient = role === "user";
  const isProtectedAdminRoute = protectedAdminRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // 1. Block unauthenticated access to /admin or /account
  if ((pathname.startsWith("/admin") || pathname.startsWith("/account")) && !role) {
    log("Unauthenticated user. Redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 2. Admin-specific access control
  if (isAdmin) {
    const isAllowedForAdmin = adminAllowedRoutes.some((route) =>
      pathname.startsWith(route)
    );
    if (!isAllowedForAdmin) {
      log("Admin accessing disallowed route. Redirecting to /admin");
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  // 3. Block user (client) access to admin routes
  if (isClient && pathname.startsWith("/admin")) {
    log("Client trying to access admin route. Redirecting to /account");
    return NextResponse.redirect(new URL("/account", req.url));
  }

  // 4. Block non-client (e.g., admin) access to /account
  if (pathname.startsWith("/account") && !isClient) {
    log("Non-client accessing /account. Redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  log("Access granted. Proceeding.");
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
