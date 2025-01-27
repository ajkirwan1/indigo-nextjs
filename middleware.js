/** @format */
import { NextResponse } from "next/server";

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-current-path", request.nextUrl.pathname);
  requestHeaders.set("x-search-params", request.nextUrl.searchParams);

  // return NextResponse.re(new URL('/blog', request.url))

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/login", "/register", "/consulting", "/admin/:path*"]
};

// middleware.ts

// import { chain } from "@/middlewares/chain";
// import { adminRedirect } from "@/middlewares/admin";
// import { loginRedirect } from "@/middlewares/login-redirect";

// export default chain([loginRedirect, adminRedirect]);

// export const config = {
//   matcher: "/admin/:path*",
// };
